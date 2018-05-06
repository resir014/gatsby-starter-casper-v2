import * as React from 'react'
import styled, { css } from 'react-emotion'
import Container from './Container'

interface SiteMainProps {
  pageTemplate?: boolean
  errorTemplate?: boolean
}

const SiteMain = styled<SiteMainProps, 'main'>('main')`
  z-index: 100;
  flex-grow: 1;

  ${props =>
    props.pageTemplate &&
    css`
      padding-bottom: 4vw;
      background: #fff;
    `};

  ${props =>
    props.errorTemplate &&
    css`
      position: relative;
      padding: 7vw 4vw;
    `};
`

interface LayoutMainProps {
  className?: string
  pageTemplate?: boolean
  errorTemplate?: boolean
}

const LayoutMain: React.SFC<LayoutMainProps> = ({
  children,
  className,
  pageTemplate,
  errorTemplate
}) => (
  <SiteMain className={className} pageTemplate={pageTemplate} errorTemplate={errorTemplate}>
    <Container>{children}</Container>
  </SiteMain>
)

export default LayoutMain
