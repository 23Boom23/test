export interface Card {
  id: string;
  title: string;
  author: string;
  avatarUrl: string;
  progress: number;
  status: 'done' | 'inProgress' | 'paused';
  time: string;
}

export interface MenuItems {
  name: string,
  path: string,
  icon: string,
}

