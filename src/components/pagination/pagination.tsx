import { memo } from 'react';
import clsx from 'clsx';
import { siblingCount, DOTS } from './pagination.Const';
import PaginationData from '../../components.Event/pagination.Data';
import Tags from '../tags';
import style from './pagination.module.scss';

type paginationRange =  Array<number | string> | undefined;

interface pagination {
  totalCount: number, 
  currentPage: number, 
  pageSize: number, 
  onClick: (e: any) => void,
}

const Pagination = (props: pagination) => {

  const paginationRange: paginationRange = PaginationData(
                                              props.totalCount, 
                                              props.currentPage, 
                                              props.pageSize, 
                                              siblingCount, 
                                              DOTS
                                            );

  let liData: object[] = [];

  paginationRange?.map((content) => {
    (content === DOTS) ? 
      liData.push({classes: style.li, title: content}) :
      (content === props.currentPage) ? 
      liData.push({classes: clsx(style.li, style.active), title: content, onClick: () => props.onClick(content)}) :
      liData.push({classes: style.li, title: content, onClick: () => props.onClick(content)})
      return liData;
    })

return(
    <Tags type='ul' classes={style.ul}>
      <Tags type='li' data={liData} />
    </Tags> 
  )
}

export default memo(Pagination);