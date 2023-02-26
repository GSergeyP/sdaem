import { memo } from 'react';
import Icon from './icon';
import { icon } from './icon';

type optionTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p' | 'button' | 'ul' | 'li' | 'label' | 'section';
type optionPosition = 'left' | 'right';

export interface attributeTags {
  id?: string,
  classes?: string,
  title?: string,
  htmlFor?: string,
  icon?: icon,
  position?: optionPosition;
  onClick?: (e: any) => void;
  [key: string]: any;
}

export interface tag {
  data?: attributeTags;
  children?: React.ReactNode;
  classes?: string,
  htmlFor?: string,
  title?: string,
  icon?: icon,
  position?: optionPosition;
  onClick?: (e: any) => void;
  type: optionTag;               
}

const Tags = ({
                type = 'h1',
                classes,
                htmlFor,
                data,
                title,
                icon,
                position,
                children,
                onClick,
              }: tag): JSX.Element => {

  const Tag = `${type}` as keyof JSX.IntrinsicElements;

  return (
    <>
      {
        (data) ?
        data.map((item: attributeTags, index: number) => (              
          <Tag 
            key={index} 
            id={item.id}
            className={(classes) ? (classes) : (item.classes) && (item.classes)}
            htmlFor={(htmlFor) ? (htmlFor) : (item.htmlFor) && (item.htmlFor)}
            onClick={(onClick) ? (onClick) : (item.onClick) && (item.onClick)}
          >
            {
            (icon && position === 'left') ? 
              <Icon icon={icon.icon} classes={icon.classes} /> :
              (item.icon && item.position === 'left') && 
                <Icon icon={item.icon.icon} classes={item.icon.classes} />
            }
            {title}
            {item.title}
            {children}
            {
            (icon && position === 'right') ? 
              <Icon icon={icon.icon} classes={icon.classes} /> :
              (item.icon && item.position === 'right') &&
              <Icon icon={item.icon.icon} classes={item.icon.classes} /> 
            }
          </Tag>           
        )) :
        <Tag className = {classes} onClick = {onClick}>
          {title || children}
        </Tag>
      }
    </>
  );
};

export default memo(Tags);