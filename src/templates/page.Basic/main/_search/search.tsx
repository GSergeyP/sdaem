import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Links from '../../../../components/links';
import Tags from '../../../../components/tags';
import { h2Data, divDataTitle, divDataBody, linksDataTmp, divDataTitleBase } from './search.Const';
import style from './search.module.scss'

const Saerch = () => {
  const [activeState, setActiveState] = useState<string>('item1');
 
  const handleClick = (props: {[key: string]: any}) => {
    let classes = props.currentTarget.className;
    const item = classes.split(' ')
    
    if(item[1] === style.item1) setActiveState('item1');
    else if(item[1] === style.item2) setActiveState('item2');
    else if(item[1] === style.item3) setActiveState('item3');
    else setActiveState('item4');
  }

  const linksData = linksDataTmp(activeState);

  return(
    <>
      <div className={style.header}>
        <Tags type='h2' data={h2Data} />
      </div>
      <div className={style.body}>
        <Tags type='div' data={divDataTitleBase} />
        <Tags type='div' data={divDataTitle}>
          <Links data={linksData} onClick={handleClick} />
        </Tags>
        <Tags type='div' data={divDataBody}>
          <Outlet />
        </Tags>
      </div>
    </>
  )
}

export default Saerch;