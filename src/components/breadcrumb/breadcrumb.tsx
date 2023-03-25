import { memo } from 'react';
import Links from '../links';
import Tags from '../tags';
import { divData, h2Data, linkDataMain, linkDataLink, spanData } from './breadcrumb.Const';

const Breadcrumb = (props: {linkData?: object, data?: string}) => {
  return(
    <>
      <Tags type='div' data={divData}>
        <Links data={linkDataMain} />
        {(props.linkData) && <Links data={props.linkData} classes={linkDataLink} />}
        <Tags type='span' data={spanData} title={props.data} />
      </Tags>
      <Tags type='h2' data={h2Data} title={props.data} />
    </>
  )
}

export default memo(Breadcrumb);