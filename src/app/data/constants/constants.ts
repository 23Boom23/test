import {Card, MenuItems} from '../interface/page.interface';

export const mockCards: Card[] = [
  {
    id: 'TR-321',
    title: 'Разработка нового компонента для отображения графиков',
    author: 'Вильгельмина Ш.',
    avatarUrl: '/assets/img/peson.png',
    progress: 100,
    status: 'done',
    time: '5ч'
  },
  {
    id: 'TR-322',
    title: 'Рефакторинг кода модуля авторизации',
    author: 'Вильгельмина Ш.',
    avatarUrl: '/assets/img/peson.png',
    progress: 100,
    status: 'done',
    time: '24ч'
  },
  {
    id: 'TR-121',
    title: 'Устранить проблемы с кроссбраузерной совместимостью',
    author: 'Вильгельмина Ш.',
    avatarUrl: '/assets/img/peson.png',
    progress: 75,
    status: 'inProgress',
    time: '12ч'
  },
  {
    id: 'TR-122',
    title: 'Ошибка валидации формы при пустом поле "номер телефона"',
    author: 'Вильгельмина Ш.',
    avatarUrl: '/assets/img/peson.png',
    progress: 50,
    status: 'paused',
    time: '24ч'
  },
]

export const menuItems: MenuItems[] = [
  {
    name: 'Главная',
    path: '/',
    icon: 'ic_rocket.svg',
  },
  {
    name: 'Проекты',
    path: '/projects',
    icon: 'projects.svg',
  },
  { name: 'Команда', path: '/team', icon: 'team.svg' },
  {
    name: 'Канбан',
    path: '/kanban',
    icon: 'kanban.svg',
  },
  {
    name: 'Итерации',
    path: '/iteration',
    icon: 'iteration.svg',
  },
];
