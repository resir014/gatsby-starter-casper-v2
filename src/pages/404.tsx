import * as React from 'react'

import LayoutMain from '../components/LayoutMain'
import ErrorMessage from '../components/ErrorMessage'
import Header from '../components/Header'
import { menuItems } from '../../config/SiteConfig'

interface NotFoundPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

const NotFoundPage: React.SFC<NotFoundPageProps> = ({ data }) => (
  <React.Fragment>
    <Header
      pageTemplate
      errorTemplate
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      menuItems={menuItems}
    />
    <LayoutMain errorTemplate>
      <ErrorMessage code={404} />
    </LayoutMain>
  </React.Fragment>
)

export default NotFoundPage

export const query = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
