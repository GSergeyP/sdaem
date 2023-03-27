import style from './breadcrumb.module.scss';

const divData = [
  {
    classes: style.div,
  }
];
///////////////////////

const h2Data = [
  {
    classes: style.h2,
  }
];
///////////////////////

const linkDataMain = [
  {
    url: 'sdaem/', 
    icon: {
      icon: 'house', 
      classes: style.house
    }, 
    position: 'left' 
  }
];
///////////////////////

const linkDataLink = style.a; 
///////////////////////

const spanData = [
  {
    classes: style.span, 
    icon: {
      icon:'point', 
      classes: style.point
    }, 
    position: 'left'
  }
];

export { divData, h2Data, linkDataMain, linkDataLink, spanData };

