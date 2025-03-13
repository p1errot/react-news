export interface NewsItem {
  id: string;
  title: string;
  source_title: string;
  source_link: string;
  article_link: string;
  keywords: string[];
  topics: string[];
  description: string;
  pub_date: string;
  creator?: string[];
  content?: string;
  media_url?: string;
  media_type?: string;
  media_description?: string;
  media_credit?: string;
  media_thumbnail?: string;
  language: string;
  sentiment: NewsSentiment;
}

export interface NewsSentiment {
  pos: number;
  neg: number;
  neu: number;
}
