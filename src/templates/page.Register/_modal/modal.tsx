import Tags from '../../../components/tags';
import { divData, h2Data, pData, buttonData } from './modal.Const';
import style from './modal.module.scss';

const Modal = (props: {[key: string]: any}) => {
 
  return(
    <main className={style.block}>
      <Tags type='div' data={divData}>
        <Tags type='h2' data={h2Data} />
        <Tags type='p' data={pData} />
        <Tags type='button' data={buttonData} onClick={props.onClick} />
      </Tags>
    </main>
  )
}

export default Modal;