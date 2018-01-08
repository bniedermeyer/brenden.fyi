export interface BlogAttributes {
  postTitle: string;
  date: string;
}

export interface BlogPost {
  attributes: BlogAttributes;
  body: string;
  frontmatter: string;
}

export interface BlogPostMetadata {
  postTitle: string;
  intro: string;
  date: string;
  thumbnail: string;
  documentName: string;
}
