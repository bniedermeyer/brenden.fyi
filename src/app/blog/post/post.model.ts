export interface BlogAttributes {
  postTitle: string;
  date: string;
}

export interface BlogPost {
  attributes: BlogAttributes;
  body: string;
  frontmatter: string;
}
