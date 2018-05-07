import * as React from 'react'

import { ArticleNode } from '../types/nodes'
import { menuItems } from '../../config/SiteConfig'

import LayoutMain from '../components/LayoutMain'
import Header from '../components/Header'
import PostFeed from '../components/PostFeed'
import PostCard from '../components/PostCard'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
    allMarkdownRemark: {
      edges: Array<{
        node: ArticleNode
      }>
    }
  }
}

const IndexPage: React.SFC<IndexPageProps> = ({ data }) => (
  <React.Fragment>
    <Header
      homeTemplate
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      menuItems={menuItems}
    />
    <LayoutMain>
      <PostFeed>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostCard key={node.fields.slug} post={node}>
            {node.frontmatter.title}
          </PostCard>
        ))}
      </PostFeed>
    </LayoutMain>
  </React.Fragment>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { id: { regex: "/posts/" } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          html
          fields {
            date
            dateFormatted: date(formatString: "MMMM DD, YYYY")
            category
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                resolutions(width: 1400, height: 935) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
        }
      }
    }
  }
`
