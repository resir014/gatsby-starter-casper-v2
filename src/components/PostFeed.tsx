import * as React from 'react'
import styled from 'react-emotion'

const PostFeedWrapper = styled('div')`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  padding: 40px 0 0 0;

  @media (min-width: 900px) {
    margin-top: -70px;
    padding-top: 0;
  }
`

interface PostFeedProps {
  className?: string
}

const PostFeed: React.SFC<PostFeedProps> = ({ children, className }) => (
  <PostFeedWrapper className={className}>{children}</PostFeedWrapper>
)

export default PostFeed
