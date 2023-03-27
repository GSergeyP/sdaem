import { memo } from 'react';
import Img from '../img';
import Tags from '../tags';
import Links from '../links';
import style from './card.News.module.scss';

export interface listCurrentData {
  id: number,
  img: string,
  title: string,
  msg: string,
  date: string,
  [key: string]: any
}

const CardNews = (props: {listCurrentData: listCurrentData[]} ) => {
  return(
    <>
      {
        (props.listCurrentData.length > 0) && ( 
          props.listCurrentData.map((item: listCurrentData, index: number) => (
            <div key={index} className={style.card}>
              <Img data={[{classes: style.img, src: item.img, alt: 'SDAEM.BY'}]} />
              <Tags type='h3' data={[{classes: style.h3, title: item.title}]} />
              <Tags 
                type='p' 
                data={[{
                  classes: style.p, 
                  title: (item.msg.length > 240 ) ? (item.msg.substring(0, 240) + '...') : (item.msg)
                }]} 
              />
              <Tags type='div' data={[{classes: style['card-bottom']}]}>
                <Tags type='span' data={[{classes: style['card-bottom__span'], title: item.date}]} />
                <Links data={[{classes: style['card-bottom__a'], title: 'Читать', url: `sdaem/news/${item.id}`}]} />
              </Tags>
            </div>
          ))
        )
      }
    </>
  )
}

export default memo(CardNews);