import style from './error.module.scss';

const h1Data = [
  {
    classes: style.h1,
    title: 'Ошибка 404',
  }
];
///////////////////////

const pData = [
  {
    classes: style.p,
    title: 'Возможно, у вас опечатка в адресе страницы, или её просто не существует',
  }
];
///////////////////////

const linksData = [
  {
    classes: style.a,
    title: 'Вернуться на главную',
    url: 'sdaem/',
    icon: {
      icon: 'house',
      classes: style['a-icon'],
    },
    position: 'left',
  }
];
///////////////////////

export { h1Data, pData, linksData };