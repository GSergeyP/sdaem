import { memo } from 'react';
import IconsFile from '../common/svg/icons.svg';

export interface icon {
  icon?: string,
  classes?: string,
  onClick?: () => void,
  [key: string]: any,
}

const Icon = (props: icon) => {
  return(
    <svg className = {props.classes} onClick={props.onClick}>
      <use xlinkHref = {`${IconsFile}#${props.icon}` }></use>
    </svg> 
  )
}

export default memo(Icon);