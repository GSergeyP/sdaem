import style from './network.module.scss';

const divData = [
  {
    classes: style.div
  }
];

const linksData = [
  {
    classes: style.a,
    url: 'noLink',
    icon: {
      icon: 'instagram',
      classes: style['a-icon'],
    },
    position: 'left', 
  },
  {
    classes: style.a,
    url: 'noLink',
    icon: {
      icon: 'vk',
      classes: style['a-icon'],
    },
    position: 'left', 
  },
  {
    classes: style.a,
    url: 'noLink',
    icon: {
      icon: 'facebook1',
      classes: style['a-icon'],
    },
    position: 'left', 
  }
];

export { divData, linksData }