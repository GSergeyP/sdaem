import Tags from '../../../../components/tags';
import Links from '../../../../components/links';
import { divData, linksData } from './network.Const';

const Network = () => {
  return(
    <Tags type='div' data={divData}>
      <Links data={linksData} />
    </Tags>
  )
};

export default Network;