import * as React from 'react'
import styled from 'react-emotion'

export const OuterWrapper = styled('div')`
  position: relative;
  padding: 0 4vw;
`

export const InnerWrapper = styled('div')`
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
`

interface ContainerProps {
  className?: string
}

const Container: React.SFC<ContainerProps> = ({ children, className }) => (
  <OuterWrapper className={className}>
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
)

export default Container
