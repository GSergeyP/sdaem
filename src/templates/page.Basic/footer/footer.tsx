import { useMemo } from 'react';
import clsx from 'clsx';
import Img from '../../../components/img';
import Links from '../../../components/links';
import Tags from '../../../components/tags';
import { imgDataInfo, ulDataInfo , liDataInfo , linkDataNav1, h4DataLink, linkDataNav2, spanDataNetwork, linkDataNetwork, imgDataPay } from './footer.Const';
import cities from '../../../json/cities.json';
import style from './footer.module.scss'

const Footer = () => {

  const linkDataLink = useMemo(() => {
    return cities.map((item: {[key: string]: any}) => ({    ///////////////////////////////////////////////////////////////// 
      classes: clsx(style['link-a'], { [style.left]: item.id % 2 === 0 }, { [style.right]: item.id % 2 !== 0 }),
      title: `Квартиры в ${item.cityOther}`, 
      url: `redirect/${item.id}`,
    }));
  }, []);

  return(
    <footer className={style.block}>
      <div className={style.info}>
        <Img data={imgDataInfo} />
        <Tags type='ul' data={ulDataInfo }>
          <Tags type='li' data={liDataInfo } />
        </Tags>
      </div>
      <div className={style.nav1}>
        <nav className={style['nav1-nav']}>
          <Links data={linkDataNav1} />
        </nav>
      </div>
      <div className={style.link}>
        <Tags type='h4' data={h4DataLink} />
        <Links data={linkDataLink} />
      </div>
      <div className={style.nav2}>
        <nav className={style['nav2-nav']}>
          <Links data={linkDataNav2} />
        </nav>
      </div>
      <div className={style.network}>
        <Tags type='span' data={spanDataNetwork}>
          <Links data={linkDataNetwork} />
        </Tags>
      </div>
      <div className={style.pay}>
        <Img data={imgDataPay} />
      </div>
    </footer>
  )
}

export default Footer;