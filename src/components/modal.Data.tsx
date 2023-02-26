import { memo } from 'react';
import Icon from './icon';
import { icon } from './icon';

type optionPosition = 'left' | 'right';
interface classes {
  span?: string,
  ul?: string,
  li?: string,
  [key: string]: any,               
}
interface content {
  title?: string,
  onClick?: (e: any) => void;      
  [key: string]: any,
}
interface modalBlock {
  activation?: number | string | null,
  classes: classes,
  content: content,
  icon?: icon,
  position?: optionPosition;
  onClick?: (e: any) => void;
}

const ModalData = (props: modalBlock) => {
  return(
    <>
      <span 
        className={props.classes[0].span} 
        onClick={props.onClick}
      >
        {(props.position === 'right') && props.activation}
        {
        (props.icon) && 
          props.icon.map((item: icon, index: number) => (
            <Icon 
              key={index} 
              icon={item.icon} 
              classes={item.classes} />
          ))
        }
        {(props.position === 'left' || props.position === undefined) && props.activation}
      </span>
      {
      (props.classes[0].ul) &&
        <ul className={props.classes[0].ul}>
          {
          props.content.map((item: content, index: number) => (
            <li 
              key={index} 
              className={props.classes[0].li}
              onClick={item.onClick}
              >
                {item.title}
            </li>
            ))
          }
        </ul>
      }
    </>
  )
}

export default memo(ModalData);