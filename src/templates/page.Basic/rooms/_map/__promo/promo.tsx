import Tags from '../../../../../components/tags';
import { h2Data, pData, buttonData } from './promo.Const';
import style from './promo.module.scss';

const Promo = (props: {[key: string]: any}) => {
  return(
    <div className={style.container}>
      <Tags type='h2' data={h2Data} />
      <Tags type='p' data={pData} />
      <Tags type='button' data={buttonData} onClick={props.onClick} />
    </div>
  )
}

export default Promo;