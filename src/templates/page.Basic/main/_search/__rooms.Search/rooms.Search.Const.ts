import clsx from 'clsx';
import style from './rooms.Search.module.scss'

const URL = ['http://localhost:3000/json/rooms.json'];
////////////////////////////////////

const cityClassesData = (props: boolean) => {
  const classes = [
    {
      span: clsx(style['span-button'], style.item1, {[style.item]: (props)}), 
      ul: (props) && (clsx(style.body, style.item1)),
      li: style.content
    }
  ];
  return classes;
};

const roomClassesData = (props: boolean) => {
  const classes = [
    {
      span: clsx(style['span-button'], style.item2, {[style.item]: (props)}), 
      ul: (props) && (clsx(style.body, style.item2)),
      li: style.content
    }
  ];
  return classes;
};

const icon = [
  {
    icon: 'mark',
    classes: style['span-button__icon']
  }
];
////////////////////////////////////

const spanData = [
  {
    classes: clsx(style.span, style.item1),
  },
  {
    classes: clsx(style.span, style.item),
  },
  {
    classes: clsx(style.span, style.item2),
  },
  {
    classes: clsx(style.span, style.item),
  },
  {
    classes: clsx(style.span, style.item3),
  },
  {
    classes: clsx(style.span, style.item),
  },
  {
    classes: clsx(style.span, style.item4),
  },
  {
    classes: clsx(style.span, style.item),
  },
  {
    classes: clsx(style.span, style.item5),
  },
  {
    classes: clsx(style.span, style.item6),
  },
];
////////////////////////////////////

const spanDataTitle = [
  {
    classes: clsx(style['span-title'], style.item1),
    title: 'Город',
  },
  {
    classes: clsx(style['span-title'], style.item2),
    title: 'Комнаты',
  },
  {
    classes: clsx(style['span-title'], style.item3),
    title: 'Цена за сутки (BYN)',
  }
];
////////////////////////////////////

const linksData = [
  {
    classes: clsx(style.a, style.item1),
    title: 'Больше опций',
    url: 'redirect',
    icon:{
      icon: 'setup',
      classes: clsx(style['a-icon'], style.item1),
    },
    position: 'right',
  },
  {
    classes: clsx(style.a, style.item2),
    title: 'На карте',
    url: '#map',
    icon:{
      icon: 'sign',
      classes: clsx(style['a-icon'], style.item2),
    },
    position: 'right',
  },
];
////////////////////////////////////

const buttonData = [
  {
    classes: style.button,
    title: 'Показать',
    icon: {
      icon: 'mark',
      classes: style['button-icon'],
    },
    position: 'right',
  }
]
////////////////////////////////////

export { URL, cityClassesData, roomClassesData, icon, spanData, spanDataTitle, linksData, buttonData }