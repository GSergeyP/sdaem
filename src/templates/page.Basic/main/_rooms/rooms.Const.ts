import clsx from 'clsx';
import style from './rooms.module.scss';

const URL = ['https://gsergeyp.github.io/sdaem/json/rooms.json'];
////////////////////////////////////

const pageSize = 3;
////////////////////////////////////

const metroClassesData = (props: boolean) => {
  const classes = [
    {
      span: clsx(style.button, style.item1),
      ul: (props) && clsx(style.block, style.item1),
      li: style.content
    }
  ];
  return classes;
};

const metroIcon = [
  {
    icon: 'metro',
    classes: style['icon-metro']
  },
  {
    icon: 'mark',
    classes: style.icon
  }
];
////////////////////////////////////

const districtClassesData = (props: boolean) => {
  const classes = [
    {
      span: clsx(style.button, style.item2),
      ul: (props) && clsx(style.block, style.item2),
      li: style.content
    }
  ];
  return classes;
};

const districtIcon = [
  {
    icon: 'mark',
    classes: style.icon
  }
];
////////////////////////////////////

const h3Data = [
  {
    classes: style.h3,
    title: 'КВАРТИРЫ НА СУТКИ',
  }
];
////////////////////////////////////

const linksData = [
  {
    classes: style.a, 
    title: 'Посмотреть все',
    url: './sdaem/rooms/&/&/&/&/&/&/&',
    icon: {
      icon: 'mark',
      classes: style['a-icon'],
    },
    position: 'right',
  }
];


export { URL, pageSize, h3Data, metroClassesData, metroIcon, districtClassesData,  districtIcon, linksData }