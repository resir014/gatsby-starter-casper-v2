import * as React from 'react'
import styled from 'react-emotion'
import Link from 'gatsby-link'
import { colors } from '../styles/variables'

const ErrorWrapper = styled('section')`
  text-align: center;
`

const ErrorCode = styled('h1')`
  margin: 0;
  font-size: 12vw;
  line-height: 1em;
  letter-spacing: -5px;
  opacity: 0.3;
`

const ErrorDescription = styled('p')`
  margin: 0;
  color: ${colors.midgrey};
  font-size: 3rem;
  line-height: 1.3em;
  font-weight: 400;

  @media (max-width: 800px) {
    margin: 5px 0 0 0;
    font-size: 1.8rem;
  }
`

const ErrorLink = styled(Link)`
  display: inline-block;
  margin-top: 5px;
`

interface ErrorMessageProps {
  className?: string
  code: string | number
}

const ErrorMessage: React.SFC<ErrorMessageProps> = ({ className, code }) => (
  <ErrorWrapper className={className}>
    <ErrorCode>{code}</ErrorCode>
    <ErrorDescription>Page not found.</ErrorDescription>
    <ErrorLink to="/">Go to the front page &rarr;</ErrorLink>
  </ErrorWrapper>
)

export default ErrorMessage
