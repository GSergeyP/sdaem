import clsx from 'clsx';
import style from './search.module.scss';


const h2Data = [
  {
    classes: style.h2,
    title: 'Sdaem.by - у нас живут'
  },
  {
    classes: clsx(style.h2, style.color),
    title: 'ваши объявления'
  },
];

const divDataTitle = [
  {
    classes: style['span-title'],
  }
];

const divDataTitleBase = [
  {
    classes: style['span-title__base'], 
  }
]
const divDataBody = [
  {
    classes: style['span-body'],
  }
];

const linksDataTmp = (props: any) => {
  return([ 
    {
      classes: clsx(style.a, style.item1, {[style.active]: props === 'item1'}),
      title: 'Квартиры на сутки',
      url: 'sdaem/',
    },
    {
      classes: clsx(style.a, style.item2, {[style.active]: props === 'item2'}),
      title: 'Коттеджи и усадьбы',
      url: 'sdaem/error',
    },
    {
      classes: clsx(style.a, style.item3, {[style.active]: props === 'item3'}),
      title: 'Бани и сауны',
      url: 'sdaem/error',
    },
    {
      classes: clsx(style.a, style.item4, {[style.active]: props === 'item4'}),
      title: 'Авто напрокат',
      url: 'sdaem/error',
    }
  ])
};

export { h2Data, divDataTitle, divDataBody, linksDataTmp, divDataTitleBase };