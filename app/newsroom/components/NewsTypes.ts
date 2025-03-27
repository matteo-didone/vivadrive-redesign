// app/newsroom/components/NewsTypes.ts

export interface Partner {
    name: string;
    logo: string;
  }


export interface Article {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: number;
  image: string;
  category: string;
  type: string;
  excerpt: string;
  content: string;
  partners?: any[];
  tags: string[];
  translations?: {
    [key: string]: {
      slug?: string;
      title: string;
      excerpt: string;
      content: string;
      category?: string;
      type?: string;
      readTime?: number;
      tags?: string[];
    }
  };
}