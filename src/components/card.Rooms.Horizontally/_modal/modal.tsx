import { memo, useEffect } from 'react';
import Img from '../../img';
import Links from '../../links';
import Tags from '../../tags';
import { imgData, h4Data, h2Data, h3Data, spanData, linksData } from './modal.Const';
import style from './modal.module.scss';

const Modal = (props: {[key: string]: any}) => {

  useEffect(() => {
  // Вызов addEventListener для закрытия модалки
    const handleClick = (event: {[key: string]: any}) => {
      (event.target.id !== props.data.id) && props.onClick();
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [props]); 

  return(
    <div className={style.block}>
      <Img data={imgData} />
      <Tags type='h4' data={h4Data} />
      <Tags type='h2' data={h2Data} />
      <Tags type='h3' data={h3Data} />
      <Tags type='span' data={spanData}>
        <Links data={linksData} />
      </Tags>
    </div>
  )
};

export default memo(Modal);