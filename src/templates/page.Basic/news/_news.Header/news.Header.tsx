import Breadcrumb from '../../../../components/breadcrumb/breadcrumb';
import Networks from '../../../../components/networks/networks';
import { attributeTags } from '../../../../components/tags';
import style from './news.Header.module.scss';

const NewsHeader = (props: attributeTags) => {
  return(
    <div className={style.newsHeader}>
      {
        props.newsHeader.map((item: attributeTags, index: number) => (
          <div key={index} className={style.breadcrumb}>
            <Breadcrumb 
              linkData={[{url: 'newsgroup', title: 'Новости'}]}
              data={item.title} 
            />
            <span className={style.date}>{item.date}</span>  
          </div>
        ))  
      }
      <div className={style.networks}>
        <Networks />
      </div>
    </div>
  )
};

export default NewsHeader;