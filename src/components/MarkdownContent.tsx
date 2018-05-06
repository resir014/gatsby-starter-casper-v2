import * as React from 'react'
import styled from 'react-emotion'
import { darken, lighten, saturate } from 'polished'
import { colors } from '../styles/variables'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 920px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  dl,
  dt,
  dd,
  pre,
  blockquote,
  .gatsby-highlight,
  .post-full-comments,
  .footnotes {
    min-width: 100%;
  }

  li {
    word-break: break-word;
  }

  li p {
    margin: 0;
  }

  a {
    color: #000;
    box-shadow: ${colors.blue} 0 -1px 0 inset;
  }

  a:hover {
    color: ${colors.blue};
    text-decoration: none;
  }

  strong,
  em {
    color: ${darken(0.05, colors.darkgrey)};
  }

  small {
    display: inline-block;
    line-height: 1.6em;
  }

  li:first-child {
    margin-top: 0;
  }

  img,
  video {
    display: block;
    margin: 1.5em auto;
    max-width: 1040px;

    @media (max-width: 1040px) {
      width: 100%;
    }
  }

  img + br + small {
    display: block;
    margin-top: -3em;
    margin-bottom: 1.5em;
  }

  iframe {
    margin: 0 auto;
  }

  blockquote {
    margin: 0 0 1.5em;
    padding: 0 1.5em;
    border-left: #3eb0ef 3px solid;
  }

  blockquote p {
    margin: 0 0 1em 0;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    font-style: italic;
  }

  blockquote p:last-child {
    margin-bottom: 0;
  }

  code {
    padding: 0 5px 2px;
    font-size: 0.8em;
    line-height: 1em;
    font-weight: 400 !important;
    background: ${colors.whitegrey};
    border-radius: 3px;
  }

  pre {
    overflow-x: auto;
    margin: 1.5em 0 3em;
    padding: 20px;
    max-width: 100%;
    border: ${darken(0.1, colors.darkgrey)} 1px solid;
    color: ${colors.whitegrey};
    font-size: 1.4rem;
    line-height: 1.5em;
    background: ${darken(0.03, colors.darkgrey)};
    border-radius: 5px;
  }

  pre code {
    padding: 0;
    font-size: inherit;
    line-height: inherit;
    background: transparent;
  }

  pre code * {
    color: inherit;
  }

  .fluid-width-video-wrapper {
    margin: 1.5em 0 3em;
  }

  hr {
    margin: 4vw 0;

    &:after {
      content: '';
      position: absolute;
      top: -15px;
      left: 50%;
      display: block;
      margin-left: -10px;
      width: 1px;
      height: 30px;
      background: ${lighten(0.1, colors.lightgrey)};
      box-shadow: #fff 0 0 0 5px;
      transform: rotate(45deg);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${darken(0.05, colors.darkgrey)};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1 {
    margin: 0.5em 0 0.2em 0;
    font-size: 4.6rem;
    font-weight: 700;

    @media (max-width: 500px) {
      font-size: 2.8rem;
    }
  }

  h2 {
    margin: 0.5em 0 0.2em 0;
    font-size: 3.6rem;
    font-weight: 700;

    @media (max-width: 500px) {
      font-size: 2.6rem;
    }
  }

  h3 {
    margin: 0.5em 0 0.2em 0;
    font-size: 2.8rem;
    font-weight: 700;

    @media (max-width: 500px) {
      font-size: 2.2rem;
    }
  }

  h4 {
    margin: 0.5em 0 0.2em 0;
    font-size: 2.8rem;
    font-weight: 700;

    @media (max-width: 500px) {
      font-size: 2.2rem;
    }
  }

  h5 {
    display: block;
    margin: 0.5em 0;
    padding: 1em 0 1.5em;
    border: 0;
    color: ${colors.blue};
    font-family: Georgia, serif;
    font-size: 3.2rem;
    line-height: 1.35em;
    text-align: center;

    @media (min-width: 1180px) {
      max-width: 1060px;
      width: 100vw;
    }

    @media (max-width: 500px) {
      padding: 0 0 0.5em;
      font-size: 2.2rem;
    }
  }

  h6 {
    margin: 0.5em 0 0.2em 0;
    font-size: 2.3rem;
    font-weight: 700;

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }

  table {
    display: inline-block;
    overflow-x: auto;
    margin: 0.5em 0 2.5em;
    max-width: 100%;
    width: auto;
    border-spacing: 0;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    white-space: nowrap;
    vertical-align: top;
  }

  table {
    -webkit-overflow-scrolling: touch;
    background: radial-gradient(ellipse at left, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 0
        center,
      radial-gradient(ellipse at right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 100% center;
    background-attachment: scroll, scroll;
    background-size: 10px 100%, 10px 100%;
    background-repeat: no-repeat;

    td {
      &:first-child {
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 1) 50%,
          rgba(255, 255, 255, 0) 100%
        );
        background-size: 20px 100%;
        background-repeat: no-repeat;
      }

      &:last-child {
        background-image: linear-gradient(
          to left,
          rgba(255, 255, 255, 1) 50%,
          rgba(255, 255, 255, 0) 100%
        );
        background-position: 100% 0;
        background-size: 20px 100%;
        background-repeat: no-repeat;
      }
    }

    th {
      color: ${colors.darkgrey};
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 0.2px;
      text-align: left;
      text-transform: uppercase;
      background-color: ${lighten(0.04, colors.whitegrey)};
    }

    th,
    td {
      padding: 6px 12px;
      border: ${saturate(-0.05, darken(0.01, colors.whitegrey))} 1px solid;
    }
  }

  .footnotes {
    font-size: 1.5rem;

    hr:first-child {
      display: none;
    }

    p {
      display: inline;
      margin: 0;
    }

    .footnote-backref {
      color: ${colors.blue} !important;
      font-size: 1.2rem;
      font-weight: bold;
      text-decoration: none !important;
      box-shadow: none !important;
    }
  }
`

interface MarkdownContentProps {
  className?: string
  post?: boolean
  html: string
}

const MarkdownContent: React.SFC<MarkdownContentProps> = ({ html, className }) => (
  <Wrapper
    className={className}
    dangerouslySetInnerHTML={{
      __html: html
    }}
  />
)

export default MarkdownContent
