import { useEffect, useRef } from 'react';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { login, pageBasic, pageRegister } from '../../redux/pageSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
import Tags from '../../components/tags';
import { h2Data, pData, buttonData, labelData, spanData, divData } from './app.Const';
import Icon from '../../components/icon';
import Error from './_error/error';
import clsx from 'clsx';
import style from './app.module.scss';

interface Inputs  {
  login: string,
  password: string,
};

const App = () => {

  const error = useSelector((state: RootState) => state.page.error),
        dispatch = useDispatch(),
        ref = useRef(null);

  const { 
    register, 
    handleSubmit,
    resetField,
    setError,
    formState: { errors }

  } = useForm<Inputs>({defaultValues: {login: '', password: ''}}), 

  onSubmit: SubmitHandler<Inputs> = (data) => dispatch(login(data));

  useEffect(() => {
    
    if(error) {
      resetField('login');
      resetField('password');
      setError('login', {type: 'required', message: '' });
      setError('password', {type: 'required', message: '' });
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
  }, [error, errors, setError, resetField, dispatch])

  return (
    <main className={style.block} ref={ref}>
      <Tags type='section' data={divData}>
        <Tags type='h2' data={h2Data} />
        <Tags type='p' data={pData} />
        <Tags type='button' data={buttonData} />
        <Tags type='button' 
              classes={clsx(style.button, style.bottom)} 
              title='Создайте акканут' 
              onClick={() => dispatch(pageRegister())}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type='checkbox' id='checkbox' className={style.checkbox} />
          <Tags type='label' data={labelData} />
          <br />

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

          <input type='password' 
                className={style.input}
                {...register('password', { 
                  required: true, 
                  pattern: /^[0-9A-Z!@#$%^&*]{5,20}$/i,
                  validate: value => !!value.trim(),
                })}
                placeholder='Пароль'
                autoComplete='new-password'
                style = {{borderColor: (errors.password) && '#EB5757'}}
          />
          <Icon icon='password' classes={style.icon} />
          {(errors.password) && <Icon icon='exclamation' classes={style['icon-error']} />}

          <Tags type='span' data={spanData}>
            {(errors.login || errors.password) && <Error />}
            <input type='submit' id={style.button} value='Войти' />
          </Tags>
        </form>
      </Tags>
    </main>
  ); 
}

export default App;
