import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Icon from '../../../../../components/icon';
import Tags from '../../../../../components/tags';
import { URL } from './other.Const';  /////////////////////////////////////////////
import style from './other.module.scss';

const Other = (props: {[key: string]: any}) => {        /////////////////////////////////////////////
  const listing = props.listing,
        classes = props.classes,
        titleH4 = props.titleH4,
        titleH2 = props.titleH2;


  const [flipping, setFlippid] = useState<string>(listing[0]),
        [hidePrev, setHidePrev] = useState<boolean>(true),
        [hideNext, setHideNext] = useState<boolean>(true),
        [count, setCount] = useState<number>(0);

  useEffect(() => {
    if(count <= 0) setHidePrev(false)
    else setHidePrev(true);

    if(count >= listing.length - 1) setHideNext(false)
    else setHideNext(true);

  }, [count, listing.length])

  const handleClickPrev = () => {
    setCount(count - 1);
    setFlippid(listing[count - 1]);
  }
  const handleClickNext = () => {
    setCount(count + 1);
    setFlippid(listing[count + 1]);
  }
  return(
    <div 
      className={classes}
      style={{ backgroundImage: `url('${URL + flipping}')`}}
    >
      <Tags type='h4' classes={style.h4} title={titleH4} />
      <Tags type='h2' classes={style.h2} title={titleH2} />
      {
      (hidePrev) &&
        <Icon 
          icon='arrowСircle' 
          classes={clsx(style.icon, style.item1)} 
          onClick={handleClickPrev} 
        />
      }
      {
      (hideNext) && 
        <Icon 
          icon='arrowСircle' 
          classes={clsx(style.icon, style.item2)} 
          onClick={handleClickNext} 
        />
      }
    </div>
  )
}

export default Other;