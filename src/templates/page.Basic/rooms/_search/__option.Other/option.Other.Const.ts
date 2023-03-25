
import clsx from 'clsx';
import style from './option.Other.module.scss';

const URL = ['https://gsergeyp.github.io/sdaem/json/rooms.json'];
///////////////////////////////////////////

const bedsClassesData = (props: boolean) => {
  const classes = [
    {
      span: clsx(style['span-button'], style.item1, {[style.item]: (props)}), 
      ul: (props) && (clsx(style.body, style.item1)),
      li: style.content
    }
  ];
  return classes;
};

const districtClassesData = (props: boolean) => {
  const classes = [
    {
      span: clsx(style['span-button'], style.item2, {[style.item]: (props)}), 
      ul: (props) && (clsx(style.body, style.item2)),
      li: style.content
    }
  ];
  return classes;
};

const metroClassesData = (props: boolean) => {
  const classes = [
    {
      span: clsx(style['span-button'], style.item3, {[style.item]: (props)}), 
      ul: (props) && (clsx(style.body, style.item3)),
      li: style.content
    }
  ];
  return classes;
};

const noneClassesData = [
  {
    span: style['span-button__none'], 
    ul: style['body-none'],
    li: style['content-none']
  }
];

const icon = [
  {
    icon: 'mark',
    classes: style['span-button__icon']
  }
];
///////////////////////////////////////////

export { URL, bedsClassesData, districtClassesData, metroClassesData, noneClassesData, icon };