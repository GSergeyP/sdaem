import clsx from 'clsx';
import style from './app.module.scss';

const h2Data = [
  {
    classes: style.h2, 
    title: 'Регистрация',
  }
];

const pData = [
  {
    classes: clsx(style.p, style.head), 
    title: 'Пользователь обязуется:',
  },
  {
    classes: clsx(style.p, style.top), 
    title: 'предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;',
    icon: {
      icon: 'point',
      classes: style['p-icon'],
    },
    position: 'left',
  },
  {
    classes: clsx(style.p, style.top), 
    title: 'добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.',
    icon: {
      icon: 'point',
      classes: style['p-icon'],
    },
    position: 'left',
  },
  {
    classes: clsx(style.p, style.bottom), 
    title: 'Уже есть аккаунт?',
  }
];

const imgData = [
  {
    classes: style.img,
    src: require('./../../common/img/general/recaptcha.png'),
    alt: 'SDAEM.BY'
  }
];

const divData = [
  {
    id: 'form',
    classes: style.form,
  }
];

const buttonData = [
  {
    classes: style.button, 
    title: 'Войдите',
  }
]

export { h2Data, pData, imgData, divData, buttonData };

   
   