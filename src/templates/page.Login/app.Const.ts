import clsx from 'clsx';
import style from './app.module.scss';

const h2Data = [
  {
    classes: style.h2, 
    title: 'Авторизация',
  }
];

const pData = [
  {
    classes: clsx(style.p, style.top), 
    title: 'Авторизируйтесь, чтобы начать публиковать свои объявления',
  },
  {
    classes: clsx(style.p, style.middle), 
    title: 'Запомнить меня',
  },
  {
    classes: clsx(style.p, style.bottom), 
    title: 'Еще нет аккаунта?',
  }
];

const buttonData = [
  {
    classes: clsx(style.button, style.top), 
    title: 'Забыли пароль?',
  },
];

const labelData = [
  {
    classes: style.label, 
    htmlFor: 'checkbox',
  }
];

const spanData = [
  {
    classes: style.span, 
  }
];

const divData = [
  {
    id: 'form',
    classes: style.form,
  }
];

export { h2Data, pData, buttonData, labelData, spanData, divData }