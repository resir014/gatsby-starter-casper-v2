import { injectGlobal } from 'react-emotion'
import { colors } from './variables'
import { lighten, darken } from 'polished'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
html {
  box-sizing: border-box;
  font-family: sans-serif;
  overflow-x: hidden;
  overflow-y: scroll;
  font-size: 62.5%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  overflow-x: hidden;
  color: ${darken(0.25, colors.midgrey)};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.5rem;
  line-height: 1.6em;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0;
  text-rendering: optimizeLegibility;
  background: #fff;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: 'liga' on;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

::selection {
  text-shadow: none;
  background: ${lighten(0.3, colors.blue)};
}

a {
  background-color: transparent;
  color: ${darken(0.05, colors.blue)};
  text-decoration: none;

  &:active,
  &:hover {
    outline: 0;
  }

  &:hover {
    text-decoration: underline;
  }
}

img {
  border: 0;
}

hr {
  position: relative;
  display: block;
  width: 100%;
  margin: 2.5em 0 3.5em;
  padding: 0;
  height: 1px;
  border: 0;
  border-top: 1px solid ${lighten(0.1, colors.lightgrey)} l(+10%));
}

audio,
canvas,
iframe,
img,
svg,
video {
  vertical-align: middle;
}

fieldset {
  margin: 0;
  padding: 0;
  border: 0;
}

textarea {
  resize: vertical;
}

p,
ul,
ol,
dl,
blockquote {
  margin: 0 0 1.5em 0;
}

ol,
ul {
  padding-left: 1.3em;
  padding-right: 1.5em;
}

ol ol,
ul ul,
ul ol,
ol ul {
  margin: 0.5em 0 1em;
}

ul {
  list-style: disc;
}

ol {
  list-style: decimal;
}

ul,
ol {
  max-width: 100%;
}

li {
  margin: 0.5em 0;
  padding-left: 0.3em;
  line-height: 1.6em;
}

dt {
  float: left;
  margin: 0 20px 0 0;
  width: 120px;
  color: ${colors.darkgrey};
  font-weight: 500;
  text-align: right;
}

dd {
  margin: 0 0 5px 0;
  text-align: left;
}

blockquote {
  margin: 1.5em 0;
  padding: 0 1.6em 0 1.6em;
  border-left: ${colors.whitegrey} 0.5em solid;
}

blockquote p {
  margin: 0.8em 0;
  font-size: 1.2em;
  font-weight: 300;
}

blockquote small {
  display: inline-block;
  margin: 0.8em 0 0.8em 1.5em;
  font-size: 0.9em;
  opacity: 0.8;
}
/* Quotation marks */
blockquote small:before {
  content: '\\2014 \\00A0';
}

blockquote cite {
  font-weight: bold;
}
blockquote cite a {
  font-weight: normal;
}

a {
  color: ${darken(0.05, colors.blue)};
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  line-height: 1.15;
  font-weight: 700;
  text-rendering: optimizeLegibility;
}

h1 {
  margin: 0 0 0.5em 0;
  font-size: 5rem;
  font-weight: 700;
  @media (max-width: 500px) {
    font-size: 2.2rem;
  }
}

h2 {
  margin: 1.5em 0 0.5em 0;
  font-size: 2rem;
  @media (max-width: 500px) {
    font-size: 1.8rem;
  }
}

h3 {
  margin: 1.5em 0 0.5em 0;
  font-size: 1.8rem;
  font-weight: 500;
  @media (max-width: 500px) {
    font-size: 1.7rem;
  }
}

h4 {
  margin: 1.5em 0 0.5em 0;
  font-size: 1.6rem;
  font-weight: 500;
}

h5 {
  margin: 1.5em 0 0.5em 0;
  font-size: 1.4rem;
  font-weight: 500;
}

h6 {
  margin: 1.5em 0 0.5em 0;
  font-size: 1.4rem;
  font-weight: 500;
}

body {
  background: #f4f8fb;
}

.img {
  display: block;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  border-radius: 100%;
}

.hidden {
  visibility: hidden;
  position: absolute;
  text-indent: -9999px;
}
`
