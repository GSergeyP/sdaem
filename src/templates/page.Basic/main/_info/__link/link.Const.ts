import clsx from 'clsx';
import style from './link.module.scss'

const URL = ['https://gsergeyp.github.io/sdaem/json/rooms.json'];
////////////////////////////////////

const h2Data = [
  {
    classes: clsx(style.h2, style.item1),
    title: 'Квартиры',
  },
  {
    classes: clsx(style.h2, style.item2),
    title: 'Коттеджи и усадьбы',
  },
  {
    classes: clsx(style.h2, style.item3),
    title: 'Популярные направления',
  }
];

const linkDataTop = [
  {
    title: 'Аггроусадьбы',
  },
  {
    title: 'Коттеджи',
  },
  {
    title: 'Загородный комплекс',
  },
  {
    title: 'Базы отдыха',
  },
  {
    title: 'Кенпенги',
  },
  {
    title: 'Веранды',
  },
];

const linkDataBottom = [
  {
    classes: clsx(style.a, style.item3),
    title: 'Коттеджи и усадьбы на о. Брасласких ',
    url: 'nolink',
  },
  {
    classes: clsx(style.a, style.item3),
    title: 'Коттеджи и усадьбы (жилье) на Нарочи',
    url: 'nolink',
  },
  {
    classes: clsx(style.a, style.item3),
    title: 'Коттеджи и усадьбы (жилье) у воды, на берегу, на озере',
    url: 'nolink',
  }
];


export { URL, h2Data, linkDataTop, linkDataBottom };