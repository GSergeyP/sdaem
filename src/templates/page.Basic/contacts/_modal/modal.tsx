import { useContext, useState } from 'react';
import { Context } from '../_context/context';
import Tags from '../../../../components/tags';
import { h2Data, pData, buttonData } from './modal.Const';
import clsx from 'clsx';
import style from './modal.module.scss';

const Modal = () => {

  const { setContextState } = useContext(Context);
  const [close, setClose] = useState<Boolean>(false);

  const handleclick = () => {
    setClose(true);
    setTimeout(() => {
      setClose(false);
      setContextState(false);
    }, 1000);
  }

  return(
    <section className={clsx(style.block, {[style.close]: close})}>
      <div className={clsx(style.div, {[style.close]: close})}>
        <Tags type='h2' data={h2Data} />
        <Tags type='p' data={pData} />
        <Tags type='button' data={buttonData} onClick={handleclick} />
      </div>
    </section>
  )
};

export default Modal;