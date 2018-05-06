import * as React from 'react'
import styled from 'react-emotion'

const SiteWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <SiteWrapper className={className}>{children}</SiteWrapper>
)

export default LayoutRoot
