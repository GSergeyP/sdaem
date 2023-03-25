import { useMemo } from 'react';

const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start); 
};

const  PaginationData = ( 
                      totalCount: number,   // Общее количество данных
                      currentPage: number,  // Текущая страница
                      pageSize: number,
                      siblingCount: number,
                      DOTS: string,
                    ) => {

 const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize), // Общее колличество страниц
          totalPageNumbers = siblingCount + 5;                   // Опрдеделение количества выводимых номеров/символов
                                                                 // (siblingCount + firstPage + lastPage + currentPage + 2*DOTS)
    /*
      Если количество страниц меньше, чем номера страниц, которые мы хотим показать в нашем компонент разбивки на 
      страницы, мы возвращаем диапазон [1, totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1),               // Определение индекса страницы с лево от текущей
          rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount); // Определение индекса страницы с право от текущей

    
    // Определение/размещение многоточия слево/право
    
    const shouldShowLeftDots = leftSiblingIndex > 2,
          shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1,             // Номер первой страницы
          lastPageIndex = totalPageCount; // Номер последней страницы

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount,
          leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount,
          rightRange = range(
                          totalPageCount - rightItemCount + 1,
                          totalPageCount
                        );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

  }, [totalCount, currentPage, pageSize, siblingCount, DOTS]);

  return paginationRange;
};

export default PaginationData;