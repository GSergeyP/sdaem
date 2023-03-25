import clsx from 'clsx';
import Tags from '../../../components/tags';
import Icon from '../../../components/icon';
import Links from '../../../components/links';
import { h1Data, pData, linksData } from './error.Const';
import style from './error.module.scss';


const Error = () => {
  return(
    <section className={style.block}>
      <Tags type='h1' data={h1Data} />
      <Tags type='p' data={pData} />
      <Icon icon='error' classes={style.error} />
      <Icon icon='points' classes={clsx(style.points, style.left)} />
      <Icon icon='points' classes={clsx(style.points, style.right)} />
      <Links data = {linksData} />
    </section>
  )
}

export default Error;