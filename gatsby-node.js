'use strict'

const path = require('path')
const slugify = require('slug')
const { createFilePath } = require('gatsby-source-filesystem')

// Regex to parse date and title from the filename
const BLOG_POST_SLUG_REGEX = /^\/posts\/([\d]{4})-([\d]{2})-([\d]{2})-(.+)$/

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  if (node.internal.type === 'MarkdownRemark') {
    const { permalink, layout, date } = node.frontmatter
    const relativePath = createFilePath({ node, getNode, basePath: 'content' })

    let slug = permalink

    if (!slug && relativePath.includes('posts')) {
      // Generate final path + graphql fields for blog posts
      const match = BLOG_POST_SLUG_REGEX.exec(relativePath)
      if (match) {
        const year = match[1]
        const month = match[2]
        const day = match[3]
        const filename = match[4]

        slug = `/posts/${year}/${month}/${day}/${slugify(filename)}/`

        const pubDate = date
          ? new Date(date)
          : new Date(Number.parseInt(year), Number.parseInt(month) - 1, Number.parseInt(day))

        // Blog posts are sorted by date and display the date in their header.
        createNodeField({
          node,
          name: 'date',
          value: pubDate.toJSON()
        })
      }
    }

    if (!slug) {
      slug = relativePath
    }

    // Used to generate URL to view this content.
    createNodeField({
      node,
      name: 'slug',
      value: slug || ''
    })

    // Used to determine a page layout.
    createNodeField({
      node,
      name: 'layout',
      value: layout || ''
    })
  }
}

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              layout
              slug
            }
          }
        }
      }
    }
  `)

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)
    throw new Error(allMarkdown.errors)
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout } = node.fields

    createPage({
      path: slug,
      // This will automatically resolve the template to a corresponding
      // `layout` frontmatter in the Markdown.
      //
      // Feel free to set any `layout` as you'd like in the frontmatter, as
      // long as the corresponding template file exists in src/templates.
      // If no template is set, it will fall back to the default `page`
      // template.
      //
      // Note that the template has to exist first, or else the build will fail.
      component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug
      }
    })
  })
}
