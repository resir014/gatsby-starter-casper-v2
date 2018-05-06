import * as React from 'react'
import styled, { css } from 'react-emotion'

const Wrapper = styled<PageContentProps, 'section'>('section')`
  position: relative;
  margin: 0 auto;
  padding: 70px 100px 0;
  min-height: 230px;
  font-family: Georgia, serif;
  font-size: 2.2rem;
  line-height: 1.6em;
  background: #fff;

  @media (max-width: 1170px) {
    padding: 5vw 7vw 0;
  }

  @media (max-width: 500px) {
    padding: 0;

    &:before,
    &:after {
      display: none;
    }
  }

  ${props =>
    !props.withImage &&
    css`
      padding-top: 0;
    `};
`

interface PageContentProps {
  className?: string
  withImage?: boolean
}

const PageContent: React.SFC<PageContentProps> = ({ children, withImage, className }) => (
  <Wrapper className={className} withImage={withImage}>
    {children}
  </Wrapper>
)

export default PageContent
