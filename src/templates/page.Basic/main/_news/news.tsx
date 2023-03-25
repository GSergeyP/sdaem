import { Children, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import List from './_list/list';
import Tags from '../../../../components/tags';
import Img from '../../../../components/img';
import { h2Data, h4Data, pData, imgData } from './news.Const';
import Icon from '../../../../components/icon';
import cities from '../../../../json/cities.json';
import style from './news.module.scss';

const News = () => {
  
  const ID = useSelector((state: RootState) => state.page.id);

  const [city, setCity] = useState<string>('Беларуси');

  useEffect(() => {
    if(ID) {
      const cityTmp = cities.filter((item: {[key: string]: any}) => item.id === Number(ID));
      setCity(cityTmp[0].cityOther);
    }
    else setCity('Беларуси');
  }, [ID]);

  const pDATA = pData.map((items: {[key: string]: any}) => (
    {
      classes: items.classes, 
      title: Children.toArray(!Array.isArray(items.title) ? 
        items.title : 
        (items.title.map((item: number, i: number) => (i%2!== 0) ? 
        [<>&nbsp;<strong>{item}</strong>&nbsp;</>] :
          item)
        ))    
    }
  ))

  return(
    <>
      <div className={style.info}>
        <Tags type='h2' data={h2Data}>&nbsp;{city}</Tags>
        <Img data={imgData} />
        <Tags type='h4' data={h4Data}>&nbsp;{city}?</Tags>
        <Tags type='p' data={pDATA} />
        <Icon icon='points' classes={style.icon} />
      </div>
      <div className={style.list}>
        <List />
      </div>
    </>
  )
};

export default News;