import { attributeTags } from '../../../../components/tags';
import Img from '../../../../components/img';
import Tags from '../../../../components/tags';
import Icon from '../../../../components/icon';
import style from './news.Body.module.scss';

const NewsBody = (props: attributeTags) => {
  return(
    <div className={style.newsBody}>
      <Icon icon='points' classes={style.icon} />
      {
        props.newsHeader.map((item: attributeTags, index: number) => (
          <Img key={index} data={[{classes: style.img, src: item.img, alt: 'SDAEM.BY'}]} />
        ))
      }
      {
        props.newsBody.map((item: attributeTags, index: number) => (
          <Tags type='p' key={index} data={[{classes: style.p, title: item.title}]} />
        ))
      }
    </div>
  )
};

export default NewsBody;