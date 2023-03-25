import { useState } from 'react';
import ModalData from '../../../../components/modal.Data';
import Links from '../../../../components/links';
import { classesData, icon, linksData } from './control.Panel.Const';
import Tags from '../../../../components/tags';
import clsx from 'clsx';
import style from './control.Panel.module.scss';


const ControlPanel = (props: {[key: string]: any}) => {

  const [sortingActive, setSortingActive] = useState<boolean>(false);

  const classes = classesData(sortingActive);
  
  const isToggleSortingOpen = () => {
    setSortingActive(true);
  }
  const isToggleSortingClose = () => {
    setSortingActive(false);
  }

  return(
    <div className={style.div}>
      <ModalData 
        activation='По умолчанию'
        classes={classes}
        content={[
          {
            title: 'Сорт. вар - 1', onClick: isToggleSortingClose
          }, 
          {
            title: 'Сорт. вар - 2', onClick: isToggleSortingClose
          }
        ]}
        icon={icon}
        position='right'
        onClick={isToggleSortingOpen}
      />
      <Tags 
        type='span'
        data={[{
          classes: clsx(style['span-list'], {[style.active]: !props.toChild[0].selection}),
          title: 'Список',
          icon: {
            icon: 'hamburger',
            classes: clsx(style['span-icon'], {[style.active]: !props.toChild[0].selection}),
          },
          position: 'left',
        }]}
        onClick={() => {props.sendToParent[1].setSelection(false); props.sendToParent[0].setIsParentDataPagination(true);}}
      />
      <Tags 
        type='span'
        data={[{
          classes: clsx(style['span-tile'], {[style.active]: props.toChild[0].selection}),
          title: 'Плитки',
          icon: {
            icon: 'tiles',
            classes: clsx(style['span-icon'], {[style.active]: props.toChild[0].selection}),
          },
          position: 'left',
        }]}
        onClick={() => {props.sendToParent[1].setSelection(true); props.sendToParent[0].setIsParentDataPagination(true);}}
      />
      <Links data={linksData} />
      <Tags type='h4' data={[{classes: style.h4, title: `Найдено ${props.toChild[1].total.length}`}]} />
    </div>
  )
};

export default ControlPanel;