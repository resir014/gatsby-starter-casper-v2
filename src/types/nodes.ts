export interface ArticleNode {
  html: string
  fields: {
    date: string
    dateFormatted: string
    slug: string
  }
  frontmatter: {
    title: string
  }
}
