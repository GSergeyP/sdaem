import { Children } from 'react';
import Tags from '../../../../../../components/tags';
import Links from '../../../../../../components/links';
import Icon from '../../../../../../components/icon';
import { icon } from '../../../../../../components/icon';

type optionPosition = 'left' | 'right';
interface classes {
  div?: string,
  span?: string,
  h2?: string,
  p?: string,
  links?: string,  
  [key: string]: any,              ////////////////////////////////////   
}
interface content {
  titleH2?: string,
  titleP?: string[],
  titleLinks?: string,
  url?: string,
  icon?: icon,
  position?: optionPosition;
  [key: string]: any,              ////////////////////////////////////
}
interface cardBlock {
  classes: classes,
  content: content,
  icon?: icon,
}

const Card = (props: cardBlock) => {

  const msg = Children.toArray(props.content[0].titleP.map((item: string[] | string, index: number) => (
    (item === '&') ? <><br /><br /></> : 
    (index%2!== 0) ? <> <strong>{item}</strong>&nbsp; </> : 
    <>{item}&nbsp;</>)        
  ));

  return(
    <div className={props.classes[0].div}>
      {
      (props.icon) && 
        <Tags type='span' data={[{classes: props.classes[0].span}]}>
          <Icon icon={props.icon[0].icon} classes={props.icon[0].classes} />
        </Tags>
      }
      <Tags type='h2' data={[{classes: props.classes[0].h2, title: props.content[0].titleH2}]} />
      <Tags type='p' data={[{classes: props.classes[0].p, title: msg}]} />
      <Links 
        data={[{
          classes: props.classes[0].links, 
          title: props.content[0].titleLinks, 
          url: props.content[0].url,
          icon: props.content[0].icon,
          position: props.content[0].position,
        }]} 
      />
    </div>
  )
};

export default Card;