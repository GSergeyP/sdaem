import clsx from 'clsx';
import style from './promo.module.scss';

const h2Data = [
  {
    classes: style.h2,
    title: 'Поиск квартир на карте',
  }
];

const pData = [
  {
    classes: style.p,
    title: 'Ищите квартиры на сутки в центре города, возле парка или в живописном районе',
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
/////////////////////////////////////////////////

const cardClassesVar1 = [
  {
    div: clsx(style.card, style.item1),
    span: style['card-span'], 
    h2: clsx(style['card-h2'], style.item1),
    p:  clsx(style['card-p'], style.item1),
    links: clsx(style['card-a'], style.item1),
  }
];

const cardClassesVar2 = [
  {
    div: clsx(style.card, style.item1),
    span: style['card-span'], 
    h2: clsx(style['card-h2'], style.item2),
    p: clsx(style['card-p'], style.item2),
    links: clsx(style['card-a'], style.item2), 
  }
];

const cardClassesVar3 = [
  {
    div: clsx(style.card, style.item2),
    span: style['card-span'], 
    h2: clsx(style['card-h2'], style.item3),
    p: clsx(style['card-p'], style.item3),
    links: clsx(style['card-a'], style.item3), 
  }
];

const cardDataVar1 = [
  {
    titleH2: 'Начните привлекать клиентов бесплатно!',
    titleP: [ 'Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно', 
              'бесплатно создавать и публиковать', 
              'объявления на сайте.'
            ],
    titleLinks: '+  Разместить объявление',
    url: 'nolink', 
  }
];

const cardDataVar2 = [
  {
    titleH2: 'Поднимайте объявления',
    titleP: [ 'Вы в любое время можете', 
              'поднимать', 
              'объявления',
              'вверх первой страницы',
              'каталога, они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.'
            ],
    titleLinks: 'Узнать стоимость услуги',
    url: 'nolink', 
        icon: {
      icon: 'mark',
      classes: clsx(style['card-a__icon'], style.item1)
    },
    position: 'right',
  }
];
 
const cardDataVar3 = [
  {
    titleH2: 'Приоритет Gold',
    titleP: [ 'Приоритетное размещение', 
              'Gold', 
              'позволяет',
              'закрепить ваше объявление',
              'в верхней части каталога!',
              '&',
              'Gold объявления',
              'перемещаются каждые 5',
              'мин на 1 позицию, что делает размещение одинаковым для всех.'
            ],
    titleLinks: 'Еще о тарифе Gold',
    url: 'nolink', 
        icon: {
      icon: 'mark',
      classes: clsx(style['card-a__icon'], style.item2)
    },
    position: 'right',
  }
];
 
const cardIconVar1 = [
  {
    icon: 'saving',
    classes: clsx(style['card-icon'], style.item1),
  }
];

const cardIconVar2 = [
  {
    icon: 'lift',
    classes: clsx(style['card-icon'], style.item2),
  }
];
/////////////////////////////////////////////////

const spanData = [
  {
    classes: style.span,
    title: 'ЧТО ТАКОЕ SDAEM.BY'
  }
];

export { h2Data, pData, buttonData, cardClassesVar1, cardClassesVar2, cardClassesVar3, cardDataVar1, cardDataVar2, cardDataVar3, cardIconVar1, cardIconVar2, spanData }