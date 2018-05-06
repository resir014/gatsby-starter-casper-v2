'use strict'

/**
 * @typedef {Object} MenuItem
 * @property {string} name
 * @property {string} link
 * @property {'internal' | 'external'} linkType
 */

exports.siteConfig = {
  title: 'Casper',
  description: 'The default theme of Ghost, ported to GatsbyJS.',
  siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
  pathPrefix: '/',
  author: {
    name: 'Resi Respati',
    url: 'https://twitter.com/resir014',
    email: 'resir014@gmail.com'
  },
  themeColor: '#c62828',
  backgroundColor: '#e0e0e0'
}

/** @type {MenuItem[]} */
exports.menuItems = [
  {
    name: 'About',
    link: '/about',
    linkType: 'internal'
  },
  {
    name: 'Example Page',
    link: '/a-markdown-page',
    linkType: 'internal'
  },
  {
    name: 'Gatsby',
    link: 'https://www.gatsbyjs.org',
    linkType: 'external'
  }
]
