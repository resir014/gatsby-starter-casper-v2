import * as React from 'react'
import styled, { css } from 'react-emotion'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import { ArticleNode } from '../types/nodes'
import { colors } from '../styles/variables'
import { lighten } from 'polished'

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

    a {
      text-decoration: none;
    }
  }

  @media (max-width: 650px) {
    margin: 0 20px 5vw;
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
  text-decoration: none;

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

const Title = styled('h2')`
  margin-top: 0;
`

const Content = styled('div')`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Excerpt = styled('section')`
  font-family: Georgia, serif;
`

const Meta = styled('footer')`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 25px 25px;
`

const Author = styled(Link)`
  flex: 1;
  position: relative;
  margin: 0;
  padding: 0;

  img {
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-right: 5px;
    border-radius: 100%;
    object-fit: cover;
  }
`

const AuthorProfileWrapper = css`
  display: block;
  background: ${lighten(0.1, colors.lightgrey)};
  border-radius: 100%;

  object-fit: cover;
`

const AuthorName = styled('span')`
  color: ${colors.darkgrey};
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  vertical-align: middle;
`

const ReadingTime = styled('span')`
  flex-shrink: 0;
  margin-left: 20px;
  color: ${colors.midgrey};
  font-size: 1.2rem;
  line-height: 33px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  vertical-align: middle;
`

interface PostCardProps {
  className?: string
  post: ArticleNode
}

const PostCard: React.SFC<PostCardProps> = ({ post, className }) => (
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
    </ImageLink>
    <Content>
      <ContentLink to={post.fields.slug}>
        {post.fields.category && <Category>{post.fields.category}</Category>}
        <Title>{post.frontmatter.title}</Title>
        <Excerpt>
          <p>{post.excerpt}</p>
        </Excerpt>
      </ContentLink>
      <Meta>
        <Author to={post.frontmatter.author.fields.slug}>
          <img
            className={AuthorProfileWrapper}
            src={post.frontmatter.author.avatar.childImageSharp.resolutions.src}
          />
          <AuthorName>{post.frontmatter.author.id}</AuthorName>
        </Author>
        <ReadingTime>{post.timeToRead} min read</ReadingTime>
      </Meta>
    </Content>
  </PostCardWrapper>
)

export default PostCard
