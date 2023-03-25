import clsx from 'clsx';
import style from './info.module.scss';

const h2Data = [
  {
    classes: style.h2,
    title: 'Контакты',
  }
];

const pData = [
  {
    classes: style.p,
    title: 'Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.',
  },
  {
    classes: clsx(style.p, style.other),
    title: 'Администрация сайта не владеет информацией о наличии свободных квартир',
    icon: {
      icon: 'exclamation',
      classes: style['p-icon'], 
    },
    position: 'left', 
  }
];

const ulData = [
  {
    classes: style.ul,
  }
];

const liData = [
  {
    classes: style.li,
    title: '220068, РБ, г. Минск, ул. Осипенко, 21, кв.23',
    icon: {
      icon: 'sign',
      classes: style['li-icon'], 
    },
    position: 'left', 
  },
  {
    classes: style.li,
    title: '+375 29 621-48-33',
    icon: {
      icon: 'cellphone',
      classes: style['li-icon'], 
    },
    position: 'left', 
  },
  {
    classes: style.li,
    title: 'sdaem@sdaem.by',
    icon: {
      icon: 'mail',
      classes: style['li-icon'], 
    },
    position: 'left', 
  },
  {
    classes: style.li,
    title: 'Режим работы: 08:00-22:00',
    icon: {
      icon: 'clock',
      classes: style['li-icon'], 
    },
    position: 'left', 
  },
  {
    classes: style['li-other'],
    title: 'ИП Шушкевич Андрей Викторович',
  },
  {
    classes: style['li-other'],
    title: 'УНП 192602485 Минским горисполкомом 10.02.2016',
  }
];

const linksData = [
  {
    classes: style.a,
    url: 'noLink',
    icon: {
      icon: 'viber',
      classes: style['a-icon'],
    },
    position: 'left',  
  },
  {
    classes: style.a,
    url: 'noLink',
    icon: {
      icon: 'telegram',
      classes: style['a-icon'],
    },
    position: 'left',  
  },
  {
    classes: style.a,
    url: 'noLink',
    icon: {
      icon: 'whatsapp',
      classes: style['a-icon'],
    },
    position: 'left',  
  } 
];

export { h2Data, pData, ulData, liData, linksData }