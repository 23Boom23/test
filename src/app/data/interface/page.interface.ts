export interface Card {
  id: string;
  title: string;
  author: string;
  avatarUrl: string;
  progress: number;
  status: 'inProgress' | 'done' | 'paused' | 'draft' | 'inReview' ;
  time: string;
  assigned?: boolean;
  product: string;
  type: string;
  inProgressCard?: boolean;
  onPause?: boolean;
}

export interface MenuItems {
  name: string;
  path: string;
  icon: string;
}
