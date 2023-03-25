import style from './promo.module.scss';

const h2Data = [
  {
    classes: style.h2,
    title: 'Показать найденные квартиры на карте',
  }
];

const pData = [
  {
    classes: style.p,
    title: 'Ищите новостройки рядом с работой, парком или родственниками',
  }
];

const buttonData = [
  {
    classes: style.button,
    title: 'Открыть карту',
    icon: {
      icon: 'sign',
      classes: style['button-icon']
    },
    position: 'left'
  }
];

export { h2Data, pData, buttonData }