
import clsx from 'clsx';
import Card from './___card/card';
import Icon from '../../../../../components/icon';
import Tags from '../../../../../components/tags';
import { h2Data, pData, buttonData, cardClassesVar1, cardClassesVar2, cardClassesVar3, cardDataVar1, cardDataVar2, cardDataVar3, cardIconVar1, cardIconVar2, spanData } from './promo.Const';
import style from './promo.module.scss';

const Promo = (props: {[key: string]: any}) => {
  return(
    <div className={style.container}>
      <Icon icon='points' classes={clsx(style.icon, style.item1)} />
      <Tags type='h2' data={h2Data} />
      <Tags type='p' data={pData} />
      <Tags type='button' data={buttonData} onClick={props.onClick} />
      <div className={style.grid}>
        <Card 
          classes={cardClassesVar1} 
          content={cardDataVar1}
          icon={cardIconVar1}
        />
        <Card 
          classes={cardClassesVar2} 
          content={cardDataVar2}
          icon={cardIconVar2}
        />
        <Card 
          classes={cardClassesVar3} 
          content={cardDataVar3}
        />
      </div>
      <Icon icon='points' classes={clsx(style.icon, style.item2)} />
      <Tags type='span' data={spanData} />
    </div>
  )
}

export default Promo;