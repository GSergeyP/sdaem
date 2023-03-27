
import { useEffect, useState } from 'react';
import Connect from '../../../../../connect/connect';
import { URL } from './list.Const';
import Links from '../../../../../components/links';
import style from './list.module.scss';


const List = () => {
  const [data, setData] = useState<Array<{}>>([]);

  useEffect(() => {
    Connect(URL)
    .then((resp) => { 
      setData(resp[0].data.slice(0, 5));
    })
  .catch(() => {setData([])});
  },[])
  return(
    <>
      <h2 className={style.h2}>Новости</h2>
      <ul className={style.ul}>
        {    
        data.map((item: {[key: string]: any}, index: number) => (
          <li key={index} className={style.li}>
            <Links data={[{classes: style.a, url: `sdaem/news/${item.id}`}]}>
              {item.title}
              <br />
              <span className={style.span}>{item.date}</span>
            </Links>
          </li>
        ))
        }
        <li className={style['li-other']}>
          <Links 
            data={[{
              classes: style['a-other'], 
              url: 'sdaem/newsgroup', 
              title: 'Посмотреть все',
              icon: {
                icon: 'mark',
                classes: style.icon
              },
              position: 'right',
            }]} />
        </li>
      </ul>
    </>
  )
};

export default List;