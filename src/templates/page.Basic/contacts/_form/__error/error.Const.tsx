import style from './error.module.scss';

const spanData = [
  {
    classes: style.span,
    title: 'Ошибка ввода',
    icon: {
      icon: 'exclamation', 
      classes: style['span-icon'],
    },
    position: 'right'
  }
];

export { spanData };