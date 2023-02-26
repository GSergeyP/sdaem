import clsx from 'clsx';
import style from './modal.module.scss';

const imgData = [
  {
    src: 'http://localhost:3000/img/photo/photoBig.png',
    classes: style.img,
    alt: 'SDAEM.BY',
  }
];

const h4Data = [
  {
    classes: style.h4,
    title: 'Владелец',
  }
];

const h2Data = [
  {
    classes: style.h2,
    title: 'Dmitriy',
  },
  {
    classes: style.h2,
    title: '+375 (29) 291-14-44',
  }
];

const h3Data = [
  {
    classes: style.h3,
    title: 'vladimir6234@tut.by',
  }
];

const spanData = [
  {
    classes: style.span,
  }
];

const linksData = [
  {
    classes: clsx(style.a, style.item1),
    url: 'nolink',
    icon: {
      icon: 'viber',
      classes: style.icon,
    },
    position: 'left'
  },
  {
    classes: clsx(style.a, style.item2),
    url: 'nolink',
    icon: {
      icon: 'whatsapp',
      classes: style.icon,
    },
    position: 'left'
  },
  {
    classes: clsx(style.a, style.item3),
    url: 'nolink',
    icon: {
      icon: 'mail',
      classes: style.icon,
    },
    position: 'left'
  }
];

export { imgData, h4Data, h2Data, h3Data, spanData, linksData };