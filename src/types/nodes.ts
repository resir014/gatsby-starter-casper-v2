export interface AuthorNode {
  id: string
  bio: string
  avatar: {
    childImageSharp: {
      resolutions: {
        [key: string]: any
      }
    }
  }
  twitter: string
  fields: {
    slug: string
  }
}

export interface ArticleNode {
  html: string
  excerpt: string
  timeToRead: number
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
    author: AuthorNode
  }
}
