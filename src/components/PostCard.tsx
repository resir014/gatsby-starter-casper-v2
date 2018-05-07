import * as React from 'react'
import styled, { css } from 'react-emotion'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import { ArticleNode } from '../types/nodes'
import { colors } from '../styles/variables'

const PostCardWrapper = styled('article')`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 20px 40px;
  min-height: 300px;
  background: #fff center center;
  background-size: cover;
  border-radius: 5px;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
    text-decoration: none;
  }
`

const ImageLink = styled(Link)`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
`

const ImageClass = css`
  width: auto;
  height: 200px;
  background: ${colors.lightgrey} no-repeat center center;
  background-size: cover;
`

const InnerWrapperClass = css`
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
`

const ContentLink = styled(Link)`
  position: relative;
  flex-grow: 1;
  display: block;
  padding: 25px 25px 0;
  color: ${colors.darkgrey};

  &:hover {
    text-decoration: none;
  }
`

const Category = styled('span')`
  display: block;
  margin-bottom: 4px;
  color: ${colors.midgrey};
  font-size: 1.2rem;
  line-height: 1.15em;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`

interface PostCardProps {
  className?: string
  post: ArticleNode
}

const PostCard: React.SFC<PostCardProps> = ({ children, post, className }) => (
  <PostCardWrapper className={className}>
    <ImageLink to={post.fields.slug}>
      <Img
        outerWrapperClassName={ImageClass}
        className={InnerWrapperClass}
        imgStyle={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        resolutions={post.frontmatter.image.childImageSharp.resolutions}
      />
      <ContentLink to={post.fields.slug}>
        {post.fields.category && <Category>{post.fields.category}</Category>}
        {children}
      </ContentLink>
    </ImageLink>
  </PostCardWrapper>
)

export default PostCard
