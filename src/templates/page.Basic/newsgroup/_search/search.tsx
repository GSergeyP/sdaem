
import { useState } from 'react';
import SearchEvent from './search.Event';
import Tags from '../../../../components/tags';
import { buttonData } from './search.Const';
import style from './search.module.scss';

const Search = (props: {[key: string]: any}) => {
  const [keywordInput, setKeywordInput] = useState<string>('');

  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    const newsList: Array<{
                              id: number,
                              img: string,
                              title: string,
                              msg: string,
                              date: string
                            }> = props.newsList;

    let newsListSearch;

    (keywordInput) ? ( newsListSearch = SearchEvent(keywordInput, newsList)) : (newsListSearch = null);

    props.getData(newsListSearch);
    setKeywordInput('');
    return newsListSearch;
  }

  return(
    <form className={style.form}>
      <input 
        type='text' 
        className={style.input} 
        placeholder='Поиск по статьям'
        value = {keywordInput} 
        onChange = {(e: any) => setKeywordInput(e.target.value)} 
      />
      <Tags 
        type='button' 
        data={buttonData}
        onClick = {handleClick} 
      />
    </form>
  )
}

export default Search;