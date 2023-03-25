import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageBasic, pageLogin, registers } from '../../redux/pageSlice';
import { RootState } from '../../redux/store';
import { useForm, SubmitHandler } from 'react-hook-form';
import Img from '../../components/img';
import Tags from '../../components/tags';
import { h2Data, pData, imgData, divData, buttonData } from './app.Const';
import Icon from '../../components/icon';
import Error from './_error/error';
import Modal from './_modal/modal';
import style from './app.module.scss';

type Inputs = {
  login: string,
  mail: string,
  password: string,
  passwordCopy: string,
};

const App = () => {

  const error = useSelector((state: RootState) => state.page.error),
        modal = useSelector((state: RootState) => state.page.modal),
        dispatch = useDispatch(),
        ref = useRef(null),
        [modalOpen, setModalOpen] = useState(false);


  const { 
    register, 
    handleSubmit, 
    getValues,
    resetField,
    setError,
    formState: { errors } 
  } = useForm<Inputs>({defaultValues: {login: '', mail: '', password: ''}}),
  
  onSubmit: SubmitHandler<Inputs> = (data) => dispatch(registers(data));

  useEffect(() =>{

    (modal) && setModalOpen(true);

    if(error) {
      resetField('login');
      resetField('mail');
      resetField('password');
      resetField('passwordCopy');
      setError('login', {type: 'required', message: '' });
      setError('mail', {type: 'required', message: '' });
      setError('password', {type: 'required', message: '' });
      setError('passwordCopy', {type: 'required', message: '' });
    }

    // Вызов addEventListener для закрытия авторизации 
    // по клику за пределами формы
    const handleClick = (event: {[key: string]: any}) => {
      let target = event.target;

      (!target.closest('#form')) && dispatch(pageBasic());
    };

    const element: any = ref.current;
    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
  };
  /////////////////////////////////////////////
  }, [error, errors, setError, resetField, dispatch, modal])

  const modalClose = () => { /////////////////////////////////////////////
    
    setModalOpen(false);
    dispatch(pageBasic());
  }

  if(modalOpen) return(<Modal onClick = {modalClose} />)
  else return(
    <main className={style.block} ref={ref}>
      <Tags type='section' data={divData}>
        <Tags type='h2' data={h2Data} />
        <Tags type='p' data={pData} />
        <Tags type='button' data={buttonData} onClick = {() => dispatch(pageLogin())} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type='text' 
                className={style.input}
                {...register('login', { 
                  required: true,
                  validate: value => !!value.trim(),
                  pattern: /^[A-Z]{3,15}$/i,
                })} 

                placeholder='Логин'
                autoComplete='off'
                style={{borderColor: (errors.login) && '#EB5757'}}
          />
          <Icon icon='user' classes={style.icon} />
          {(errors.login) && <Icon icon='exclamation' classes={style['icon-error']} />}
          <br />

            <input type='text'
                  className={style.input}  
                  {...register('mail', {
                    required: true,
                    validate: value => !!value.trim(),
                    pattern: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i,
                    maxLength: 30,
                  })} 
                  placeholder='Введите'
                  autoComplete='off'
                  style={{borderColor: (errors.mail) && '#EB5757'}}
            />
            <Icon icon='mail' classes={style.icon} />
            {(errors.mail) && <Icon icon='exclamation' classes={style['icon-error']} />}
            <br />

          <input type='password' 
                className={style.input}
                {...register('password', { 
                  required: true, 
                  pattern: /^[0-9A-Z!@#$%^&*]{5,20}$/i,
                  validate: value => !!value.trim(),
                })}
                placeholder='Пароль'
                autoComplete='new-password'
                style={{borderColor: (errors.password) && '#EB5757'}}
          />
          <Icon icon='password' classes={style.icon} />
          {(errors.password) && <Icon icon='exclamation' classes={style['icon-error']} />}
          <br />

          <input type='password' 
                className={style.input}
                {...register('passwordCopy', { 
                  required: true, 
                  validate: value => value === getValues('password')      
                })}
                placeholder='Повторите пароль'
                autoComplete='new-password'
                style={{borderColor: (errors.passwordCopy) && '#EB5757'}}
          />
          <Icon icon='password' classes={style.icon} />
          {(errors.passwordCopy) && <Icon icon = 'exclamation' classes={style['icon-error']} />}  
          <br />  
          <Img data={imgData} />
          <br />
          {(errors.login || errors.mail || errors.password || errors.passwordCopy) && <><Error /> <br/></>}
          <input type='submit' id={style.button} value='Зарегистрироваться'/>
        </form>
      </Tags>
    </main>
  )
}

export default App;