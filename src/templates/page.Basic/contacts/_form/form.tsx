import { useContext, useEffect } from 'react';
import { Context, attributeData } from '../_context/context';
import { useForm, SubmitHandler } from 'react-hook-form';
import Icon from '../../../../components/icon';
import Error from './__error/error';
import clsx from 'clsx';
import style from './form.module.scss';


const Form = () => {

  const { setData, contextState, setContextState } = useContext(Context);

  const { 
    register, 
    handleSubmit,
    reset,
    formState: { errors } 
  } = useForm<attributeData>({
    defaultValues: {
      user: '', 
      mail: '', 
      msg: '',
    }
  }),

  onSubmit: SubmitHandler<attributeData> = (data) =>  {setData(data); setContextState(true);}
 
  useEffect(() => {
    (!contextState) && reset();
  }, [contextState, reset])

  return(
    <div>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={clsx(style.label, style.user)}>Ваше имя
          <input type='text'
            className={clsx(style.input, style.user)} 
              {...register('user', {
                required: true,
                validate: value => !!value?.trim(),
                pattern: /^[A-ZА-ЯЁ]{3,17}$/i,
              })} 
              placeholder='Введите'
              autoComplete='off'
              style={{borderColor: (errors.user) && '#EB5757'}}
          />
          <Icon icon='user' classes={clsx(style.icon, style.user)} />
          {(errors.user) && <Icon icon='exclamation' classes={clsx(style['icon-error'], style.user)} />}
        </label>

        <label className={clsx(style.label, style.mail)}>Ваша электронная почта
          <input type='text'
                className={clsx(style.input, style.mail)}  
                {...register('mail', {
                  required: true,
                  validate: value => !!value?.trim(),
                  pattern: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i,
                  maxLength: 30,
                })} 
                placeholder='Введите'
                autoComplete='off'
                style={{borderColor: (errors.mail) && '#EB5757'}}
          />
          <Icon icon='mail' classes={clsx(style.icon, style.mail)} />
          {(errors.mail) && <Icon icon = 'exclamation' classes={clsx(style['icon-error'], style.mail)} />}
        </label>

        <label className={clsx(style.label, style.msg)}>Ваше сообщение
          <textarea className={clsx(style.textarea, style.msg)}
            {...register('msg', {
              required: true,
              validate: value => !!value?.trim(),
              maxLength: 1000,
            })}
            placeholder='Сообщение'
            autoComplete='off'
            style = {{borderColor: (errors.msg) && '#EB5757'}}
          />
        </label>
        {(errors.user || errors.mail || errors.msg) && <Error />}

        <input type='submit' className={style.button} value='Отправить'/>
      </form>
    </div>
  )
};

export default Form;