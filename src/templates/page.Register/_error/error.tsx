import Tags from '../../../components/tags';
import style from './error.module.scss';

const Error = () => {
  return (
    <>
      <Tags 
        type='span' 
        data={[{
          classes: style.span, 
          title: 'Ошибка ввода',
          icon: {icon: 'exclamation', classes: style.icon},
        position: 'right'
        }]}
       />
      <br />
    </>
  )
}

export default Error;
