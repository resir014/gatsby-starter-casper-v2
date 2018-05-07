import * as React from 'react'

import Page from '../components/Page'
import LayoutMain from '../components/LayoutMain'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import MarkdownContent from '../components/MarkdownContent'
import { menuItems } from '../../config/SiteConfig'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const PostTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <React.Fragment>
    <Header
      pageTemplate
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      menuItems={menuItems}
    />
    <LayoutMain pageTemplate>
      <Page>
        <PageHeader title={data.markdownRemark.frontmatter.title} />
        <PageContent>
          <MarkdownContent html={data.markdownRemark.html} />
        </PageContent>
      </Page>
    </LayoutMain>
  </React.Fragment>
)

export default PostTemplate

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        author {
          id
          bio
          twitter
          avatar {
            childImageSharp {
              resolutions(width: 400, height: 400) {
                src
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
