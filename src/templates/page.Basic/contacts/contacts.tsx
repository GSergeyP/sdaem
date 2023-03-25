import { useState } from 'react';
import { Context, defaultState } from './_context/context';
import Info from './_info/info';
import Form from './_form/form';
import Network from './_network/network';
import Modal from './_modal/modal';
import style from './contacts.module.scss';

const Contacts = () => {
  const [contextState, setContextState] = useState(defaultState.contextState),
        [data, setData] = useState(defaultState.data);

  return(
    <>
      <Context.Provider value = {{data, setData, contextState, setContextState}}>
        <section className={style.block}>
          <Info />
          <Form />
          <Network />
        </section>
        {(contextState) && <Modal />}
      </Context.Provider>
    </>
  )
}

export default Contacts;