import { memo } from 'react';
import Tags from '../tags';
import Links from '../links';
import { spanData, linksData } from './networks.Const';

const Networks = () => {
  return (
    <Tags type='span' data={spanData}>
      <Links data={linksData} />
    </Tags>
  )
};

export default memo(Networks);