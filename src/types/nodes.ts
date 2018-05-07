export interface ArticleNode {
  html: string
  fields: {
    date: string
    dateFormatted: string
    category: string
    slug: string
  }
  frontmatter: {
    title: string
    image: {
      childImageSharp: {
        resolutions: {
          [key: string]: any
        }
      }
    }
  }
}
