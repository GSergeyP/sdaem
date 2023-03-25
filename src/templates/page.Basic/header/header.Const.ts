import clsx from 'clsx';
import { navData } from '../../../components.Event/nav.Data';
import style from './header.module.scss';

const iconNavTop = [
  {
    id: 4,
    icon: 'sign',
    classes: style['top-nav__item-icon'],
    position: 'left',
  }
];

const navDataTop = navData(0, 4, style['top-nav__item'], iconNavTop);
///////////////////////////

const iconNavBottom = [
  {
    id: 10,
    icon: 'heart',
    classes: style['top-a__left-icon'],
    position: 'right',
  }
];

const linkDataTop = navData(9, 9, style['top-a__left'], iconNavBottom);
///////////////////////////

const navDataBottom = navData(5, 7, style['bottom-nav__item'], []);
///////////////////////////

const linkDataBottom = navData(8, 8, style['bottom-a'], []);
///////////////////////////

const imgDataBottom = [
  {
    classes: style['bottom-img'],
    src: require('../../../common/img/general/logo.png'),
    alt: 'SDAEM.BY',
  }
];
///////////////////////////

const buttonDataOpen = [
  {
    classes: clsx(style.button, style.open),
    title: 'Вход и регистрация',
  }
];
///////////////////////////

const buttonDataClose = [
  {
    classes: clsx(style.button, style.close),
    icon:{
      icon: 'mark', 
      classes: style.icon,
    },
    position: 'right',
  }
];
///////////////////////////

export { navDataTop, linkDataTop, navDataBottom, linkDataBottom, imgDataBottom, buttonDataOpen, buttonDataClose }