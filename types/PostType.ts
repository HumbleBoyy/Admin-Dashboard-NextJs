export interface PostType {
    id: string;
    title: string;
    body: string;
    author: string;
    date: string;
    comments: PostCommentType[];
  }
  
  export interface PostCommentType {
    id: string;
    text: string;
    username: string;
  }