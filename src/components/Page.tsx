import * as React from 'react'
import styled from 'react-emotion'

const PageWrapper = styled('article')`
  position: relative;
  z-index: 50;
`

interface PageProps {
  className?: string
}

const Page: React.SFC<PageProps> = ({ children, className }) => (
  <PageWrapper className={className}>{children}</PageWrapper>
)

export default Page
