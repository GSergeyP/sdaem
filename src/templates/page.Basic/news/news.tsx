import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { URL, newsgroupPage } from './news.Const';
import Connect from '../../../connect/connect';
import NewsHeader from './_news.Header/news.Header';
import NewsBody from './_news.Body/news.Body';
import CardNews from '../../../components/card.News/card.News';
import style from './news.module.scss';

const News = () => {

  let { ID } = useParams();
  const [newsgroup, setNewsgroup] = useState<any>([]),
        [newsHeader, setNewsHeader] = useState<object>([]),
        [newsBody, setNewsBody] = useState<object[]>([]);
      
const navigate = useNavigate(); // Для перенаправления

  useEffect(() => {

    let newsgroup: Array<{}> = [],
        news: Array<{}> = [],
        newsBody: {[key: string]: any};
    
    setNewsHeader([]);
    setNewsgroup([]);
    
    Connect(URL)
      .then((resp) => {

        for(let i = 0; i < newsgroupPage; i++) {
          let idRandom = Math.floor(Math.random() * (resp[0].data.length - 1));

          (resp[0].data[idRandom].id !== Number(ID)) ? newsgroup.push(resp[0].data[idRandom]) : i--;
        }
        
        setNewsgroup(newsgroup);

        resp.map((data) => { 
          const dataCarent = data.data.filter((item: {[key: string]: any}) => item.id === Number(ID));
          news.push(dataCarent);
          return news;
        })
        
        setNewsHeader(news[0]);

      newsBody = news[1];
      (newsBody.length > 0) ? setNewsBody(newsBody[0].msg) : setNewsBody([{title: 'Извините, ведутся технические работы'}]);

      })
      .catch((err) => {if(err) navigate('/noLink');});
  }, [ID, navigate])

  return(
    <section className={style.block}>
      <div className={style.news}>
        <NewsHeader newsHeader={newsHeader} />
        <NewsBody newsHeader={newsHeader} newsBody={newsBody} />
      </div>
      <div className={style.newsgroup}>
        <h2 className={style['newsgroup-h2']}>Читайте также</h2>
        <div className={style['newsgroup-item']}>
          <CardNews listCurrentData={newsgroup} />
        </div>
      </div>
    </section>
  )
};

export default News;