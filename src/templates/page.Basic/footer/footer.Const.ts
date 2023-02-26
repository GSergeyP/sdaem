import clsx from 'clsx';
import { navData } from '../../../components.Event/nav.Data';
import style from './footer.module.scss';

const imgDataInfo = [
  {
    src: require('../../../common/img/general/logo.png'),
    classes: style['info-img'],
    alt: 'SDAEM.BY',
  }
];

const ulDataInfo  = [
  {
    classes: style['info-ul'],
    title: 'СДАЁМ БАЙ',
  }
];

const liDataInfo  = [
  {
    classes: style['info-li'],
    title: 'ИП Шушкевич Андрей Викторович',
  },
  {
    classes: style['info-li'],
    title: 'УНП 192602485 Минским горисполкомом',
  },
  {
    classes: style['info-li'],
    title: '10.02.2016',
  },
  {
    classes: style['info-li'],
    title: '220068, РБ, г. Минск, ул. Осипенко, 21, кв.23',
  },
  {
    classes: style['info-li'],
    title: '+375 29 621 48 33, sdaem@sdaem.by',
  },
  {
    classes: style['info-li'],
    title: 'Режим работы: 08:00-22:00',
  },
];
///////////////////////

const linkDataNav1 = navData(5, 7, style['nav1-nav__item'], []);
///////////////////////

const h4DataLink = [
  {
  classes: style['link-h4'],
  title: 'Квартиры',
  }
];
///////////////////////

const linkDataNav2 = navData(1, 4, style['nav2-nav__item'], []);
///////////////////////

const spanDataNetwork = [
  {
    classes: style['network-span'],
    title: 'Мы в соцсетях',
  }
];

const linkDataNetwork= [
  {
    classes: style['network-span__a'],
    url: 'nolink',
    icon: {
      icon: 'instagram',
      classes: style['network-span__a-icon'],
      position: 'right',
    }
  },
  {
    classes: style['network-span__a'],
    url: 'nolink',
    icon: {
      icon: 'vk',
      classes: style['network-span__a-icon'],
      position: 'left',
    }
  },
  {
    classes: style['network-span__a'],
    url: 'nolink',
    icon: {
      icon: 'facebook1',
      classes:  style['network-span__a-icon'],
      position: 'left',
    }
  },
];
///////////////////////

const imgDataPay = [
  {
    src: require('../../../common/img/pay.System/visa1.png'),
    classes: style['pay-img'],
    alt: 'SDAEM.BY',
  },
  {
    src: require('../../../common/img/pay.System/webpay.png'),
    classes: style['pay-img'],
    alt: 'SDAEM.BY',
  },
  {
    src: require('../../../common/img/pay.System/visa2.png'),
    classes: style['pay-img'],
    alt: 'SDAEM.BY',
  },
  {
    src: require('../../../common/img/pay.System/mastercard.png'),
    classes:  clsx(style['pay-img'], style.mastercard),
    alt: 'SDAEM.BY',
  },  
  {
    src: require('../../../common/img/pay.System/securecode.png'),
    classes: style['pay-img'],
    alt: 'SDAEM.BY',
  },
  {
    src: require('../../../common/img/pay.System/belkart.png'),
    classes: clsx(style['pay-img'], style.belkart),
    alt: 'SDAEM.BY',
  },
];

export { imgDataInfo, ulDataInfo , liDataInfo , linkDataNav1, h4DataLink, linkDataNav2, spanDataNetwork, linkDataNetwork, imgDataPay };