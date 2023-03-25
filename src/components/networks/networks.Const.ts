import style from './networks.module.scss';

const spanData = [
  {
    classes: style.span,
    title: 'Поделиться',
  }
];

const linksData = [
  {
    classes: style.a,
    url: 'nolink',
    icon: {
      icon: 'vk',
      classes: style['a-icon'],
    },
    position: 'right',
  },
  {
    classes: style.a,
    url: 'nolink',
    icon: {
      icon: 'facebook2',
      classes: style['a-icon'],
    },
    position: 'left',
  },
  {
    classes: style.a,
    url: 'nolink',
    icon: {
      icon: 'viber',
      classes: style['a-icon'],
    },
    position: 'left',
  },
  {
    classes: style.a,
    url: 'nolink',
    icon: {
      icon: 'telegram',
      classes: style['a-icon'],
    },
    position: 'left',
  },
  {
    classes: style.a,
    url: 'nolink',
    icon: {
      icon: 'whatsapp',
      classes: style['a-icon'],
    },
    position: 'left',
  },
];

export { spanData, linksData };