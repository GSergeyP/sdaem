import Links from '../../../../components/links';
import Tags from '../../../../components/tags';
import { h2Data, pData, ulData, liData, linksData } from './info.Const';

const Info = () => {
  return(
    <div>
      <Tags type='h2' data={h2Data} />
      <Tags type='p' data={pData} />
      <Tags type='ul' data={ulData}>
        <Tags type='li' data={liData} />
      </Tags>
      <Links data={linksData} />
    </div>
  )
}

export default Info;