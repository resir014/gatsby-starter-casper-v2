import * as React from 'react'
import styled from 'react-emotion'
import { darken } from 'polished'
import { colors } from '../styles/variables'

const PageHeaderWrapper = styled('header')`
  margin: 0 auto;
  padding: 6vw 3vw 3vw;
  max-width: 1040px;
  text-align: center;

  @media (max-width: 500px) {
    padding: 14vw 3vw 10vw;
  }
`

const Title = styled('h1')`
  margin: 0;
  color: ${darken(0.05, colors.darkgrey)};

  @media (max-width: 500px) {
    font-size: 2.9rem;
  }
`

const PostDate = styled('time')`
  color: ${colors.blue};
`

const Meta = styled('section')`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.midgrey};
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 500px) {
    font-size: 1.2rem;
    line-height: 1.3em;
  }
`

interface PageHeaderProps {
  className?: string
  title: string
  date?: string
}

const PageHeader: React.SFC<PageHeaderProps> = ({ title, date, className }) => (
  <PageHeaderWrapper className={className}>
    {date && (
      <Meta>
        <PostDate>{date}</PostDate>
      </Meta>
    )}
    <Title>{title}</Title>
  </PageHeaderWrapper>
)

export default PageHeader
