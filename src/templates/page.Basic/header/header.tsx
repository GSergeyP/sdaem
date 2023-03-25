import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pageBasic, pageLogin } from '../../../redux/pageSlice';
import Img from '../../../components/img';
import Links from '../../../components/links';
import Tags from '../../../components/tags';
import { navDataTop, linkDataTop, navDataBottom, linkDataBottom, imgDataBottom, buttonDataOpen, buttonDataClose } from './header.Const';
import Modal from './_modal/modal';
import style from './header.module.scss';


const ButtonOpen = (props: {[key: string]: any}) => {
  return(
    <Tags type='button' data={buttonDataOpen} onClick={props.onClick} />
  )
}

const ButtonClose = (props: {[key: string]: any}) => {
  const LOCALSTORAGE: string | null = localStorage.getItem('sessionID');
  
  let data: {[key: string]: any} = [];
  if(LOCALSTORAGE) data = JSON.parse(LOCALSTORAGE);

  return(
    <Tags type='button' data={buttonDataClose} onClick={props.onClick}>
      {(data) && <Img data={[{classes: style.img, src: data[0].url, alt: 'SDAEM.BY'}]} />}
      {(data) && data[0].name}
    </Tags>
  )
}

const Header = () => {
  
  const dispatch = useDispatch(),
        [authorization, setAuthorization] = useState<boolean>(false),
        LOCALSTORAGE: string | null = localStorage.getItem('sessionID');

  
  useEffect(() => {
    (LOCALSTORAGE) ? setAuthorization(true) : setAuthorization(false) 
  }, [LOCALSTORAGE])
  
  const buttonClose = () => {
    dispatch(pageBasic());
    setAuthorization(false);
  }

  const buttonOpen = () => {
    dispatch(pageLogin());
    setAuthorization(true);
  }

  return(
    <header className={style.block}>
      <div className={style.top}>
        <nav className={style['top-nav']}><Links data={navDataTop} /></nav>
        <Links data={linkDataTop} />
        {(authorization) ? <ButtonClose onClick={buttonClose}/> : <ButtonOpen onClick={buttonOpen}/>}
      </div>
      <div className={style.bottom}>
        <Img data={imgDataBottom} />
        <nav className={style['bottom-nav']}><Links data={navDataBottom} /></nav>
        <Links data={linkDataBottom} />
        <Modal />
      </div>
    </header>
  )
}

export default Header;