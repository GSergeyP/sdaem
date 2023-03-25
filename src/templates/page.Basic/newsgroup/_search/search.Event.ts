const SearchEvent = (keyword: string, 
  newsList: Array<{
                    id: number,
                    img: string,
                    title: string,
                    msg: string,
                    date: string
                  }>) => {

let newsListKeysName: string[] = ['title', 'msg'], 

resultRelevance: Array<{
                id: number,
                relevance: number,
              }> = [],
newsListSearch: Array<{}> = [],
keywordArray: string[] = [],
relevance: number = 0,
value: string,
indexFirst: number,
indexSecond: number,
result: number;

keyword = keyword.toLowerCase();
newsList.map((content: {[key: string]: any}) => {
  newsListKeysName.map((key: string) => {
    keywordArray = keyword.split(' ');                          // Разделение предложения на отдельные слова
    keywordArray.map((keywordItem) => {
      value = content[key];
      value = value.toLowerCase(); 
      indexFirst = value.indexOf(keywordItem);                  // Получение индекса первого совпадения ключевого слова
      indexSecond = value.indexOf(keywordItem, indexFirst + 1); // Получение индекса дополнительного совпадения ключевого слова

      (indexFirst === 0) ? (result = 3) :                       // Высочайшая релевантность
      (indexSecond !== -1) ? (result = 2) :                     // Средняя релевантность
      (indexFirst !== -1) ? (result = 1) : (result = 0);        // Низкая релевантность/Нет совпадений
      relevance += relevance + result;
      return relevance;
    });
    return relevance;
  });
  (relevance !== 0) && resultRelevance.push({id: content.id, relevance: relevance});
    relevance = 0;
    return resultRelevance;
  });
  resultRelevance.sort((a, b) => {                                  // Сортировка по релевантности
    return b.relevance - a.relevance;
  });
  resultRelevance.map((key) => {                                    // Создание массива для вывода
    newsList.map((content) => {
      if(content.id === key.id) newsListSearch.push(content);
      return newsListSearch;
      });
    return newsListSearch;
    });
  return newsListSearch;
}

export default SearchEvent;