import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Connect from '../../../connect/connect';
import { URL, pageSize } from './newsgroup.Const';
import Breadcrumb from '../../../components/breadcrumb/breadcrumb';
import Search from './_search/search';
import CardNews from '../../../components/card.News/card.News';
import Pagination from '../../../components/pagination/pagination';
import style from './newsgroup.module.scss';


const Newsgroup = () => {
  const newsListSearch = (newsListSearch: any) => {
    if(newsListSearch === null || newsListSearch.length === 0) {
      setNewsList([]);
      setMessage([<span key={'err'} className={style.err}>Измените критерии поиска</span>]);
    }
    else {
      setNewsList(newsListSearch);
      setCurrentPage(1);
      setMessage('');
    }
  }

  const [currentPage, setCurrentPage] = useState<number>(1),
        [newsList, setNewsList] = useState([]),
        [newsListCopy, setNewsListCopy] = useState([]),
        [message, setMessage] = useState<any>();

  const navigate = useNavigate(); // Для перенаправления

  useEffect(() => {
    Connect(URL)
      .then((resp) => { 
        setNewsList(resp[0].data); 
        setNewsListCopy(resp[0].data); 
      })
      .catch((err) => {if(err) navigate('/noLink');});
  }, [navigate]);

  const listCurrentData = useMemo(() => {
    
    const firstPageIndex = (currentPage - 1) * pageSize, 
          lastPageIndex = firstPageIndex + pageSize; 
    return newsList.slice(firstPageIndex, lastPageIndex);
  }, [newsList, currentPage]);

  
  return(
    <section className={style.block}>
      <div>
        <div className={style.breadcrumb}>
          <Breadcrumb data='Новости' />
        </div>
        <Search getData = {newsListSearch} newsList = {newsListCopy} />
      </div>
      <div className={style.card_News}>
        {
          (message) ? message : <CardNews listCurrentData={listCurrentData} />
        }
      </div>
      {
      (newsList.length > 0) &&
        <div className={style.pagination}>
        <Pagination
                currentPage={currentPage} 
                totalCount={newsList.length} 
                pageSize={pageSize}
                onClick = {(page: number) =>{ setCurrentPage(page); }}
              /> 
        </div>
      }
    </section>
  )
}

export default Newsgroup;