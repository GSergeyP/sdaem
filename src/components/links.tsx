import { memo } from 'react';
import { Link } from 'react-router-dom';
import Icon from './icon';
import { icon } from './icon';

type optionPosition = 'left' | 'right';

export interface attributeTags {
  classes?: string,
  title?: string,
  url?: string,             
  icon?: icon,
  position?: optionPosition,
  [key: string]: any,
}

const Links = (props: {
                data: attributeTags;
                title?: string;
                classes?: string,
                url?: string;
                active?: string;
                children?: React.ReactNode;
                onClick?: (e: any) => void; 
              }) => {
  return(
    <>
      {
        props.data.map((item: attributeTags | any, index: number) => (
         ( /^#/.test(item.url)) ? 
          <a 
            key={index} href={item.url} 
            className={item.classes}
          >
            {(item.position === 'right') && item.title}
            {(item.icon) && <Icon icon={item.icon.icon} classes={item.icon.classes} />}
            {(item.position === 'left' || item.position === undefined) && item.title} 
            {props.title}
            {props.children}
          </a> :
          <Link 
            key={index}
            to={`/${(props.url) ? (props.url) : (item.url) && (item.url)}`} 
            className={ (props.classes) ? (props.classes) : (item.classes) && item.classes }
            onClick={props.onClick}
          >
            {(item.position === 'right') && item.title}
            {(item.icon) && <Icon icon={item.icon.icon} classes={item.icon.classes} />}
            {(item.position === 'left' || item.position === undefined) && item.title} 
            {props.title}
            {props.children}
          </Link>
        ))
      }
    </>
  )
}

export default memo(Links);