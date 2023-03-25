import { useEffect, useState } from 'react';
import Tags from '../../../../../components/tags';
import Links from '../../../../../components/links';
import cities from '../../../../../json/cities.json';
import Connect from '../../../../../connect/connect';
import { URL, h2Data, linkDataTop, linkDataBottom } from './link.Const';
import clsx from 'clsx';
import style from './link.module.scss'


const Total = (props: {[key: string]: any}) => {
  const [data, setData] = useState<Array<{}> | null>();

  useEffect(() => {
    Connect(props.url)
    .then((resp) => { 
      setData(resp[0].data);
    })
    .catch(() => {setData(null)});
  }, [props.url])

  const total = data?.filter((item: {[key: string]: any}) => item.id === Number(props.id));

  return(
    <Tags type='span' classes={style.span}>
      {(total) ? total.length : 0}
    </Tags>
  )
}
const Link = () => {
  const [linkShow, setLinkShow] = useState<boolean>(false);

  const handleClick = () => {
    setLinkShow(linkShow => !linkShow);
  }

  return(
  <>
    <Tags type='h2' data={h2Data} />
      {
      cities.map((item: {[key: string]: any}, index: number) => (
        <Tags 
          type='div' 
          key={index}
          classes={clsx(style.div, style.item1)}
        >
          <Links 
            data={[{
              classes: clsx(style.a, style.item1),
              title: 'Квартиры в ' + item.cityOther,
              url: 'sdaem/rooms/'+item.id
            }]} 
          />
          <Total id={item.id} url={URL} />
        </Tags>
        ))
      }
      <div className={clsx(style.div, style.item3)}>
        <Links data={linkDataBottom} />
      </div>
      {
      linkDataTop.map((item: any, index: number) => (   
        <Tags 
          type='div' 
          key={index}
          classes={clsx(style.div, style.item2, {[style.hide]: (index >= 4 && !linkShow) })}
        >
          <Links 
            data={[{
              classes: clsx(style.a, style.item2),
              title: item.title,
              url: 'nolink'
            }]} 
          />
          <Total  id='id' url='URL' />
        </Tags>
       ))
      }
      <Tags 
        type='button' 
        data={[{ 
          classes: style.button,
          title: (linkShow) ? 'Скрыть' : 'Еще',
          icon: { icon: 'mark', classes: clsx(style.icon, {[style.rotate]:linkShow === true }) },
          position:'right'
        }]}
        onClick={handleClick} />
    </>
  )
}

export default Link;