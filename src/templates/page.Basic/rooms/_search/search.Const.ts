import clsx from 'clsx';
import style from './search.module.scss';

const URL = ['http://localhost:3000/json/rooms.json'];
///////////////////////////////////////////

const classesData = (props: boolean) => {
  const classes = [
    {
      span: clsx(style['span-button'], {[style.item]: (props)}),
      ul: (props) && (style.body),
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


export { URL, classesData, icon };