import * as React from 'react'
import Helmet from 'react-helmet'

import 'normalize.css'
import '../styles/normalize'

import { menuItems } from '../../config/SiteConfig'
import LayoutRoot from '../components/LayoutRoot'
import Footer from '../components/Footer'

interface WrapperProps {
  children: () => React.ReactNode
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

const IndexLayout: React.SFC<WrapperProps> = ({ children, data }) => (
  <LayoutRoot>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: 'gatsbyjs, gatsby, javascript, sample, something' }
      ]}
    />
    {children()}
    <Footer title={data.site.siteMetadata.title} menuItems={menuItems} />
  </LayoutRoot>
)

export default IndexLayout

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
