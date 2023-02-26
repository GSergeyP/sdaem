import { useState } from 'react';
import Promo from './__promo/promo';
import MapData from '../../../../components/map.Data/map.Data';

const Map = () => {
  const [map, setMap] = useState<boolean>(true);

  const handleclickOpen = () => {
    setMap(false)
  }
  const handleclickClose = () => {
    setMap(true)
  }

  return(
    <>
      {
      (map) ? 
        <Promo onClick={handleclickOpen} /> : 
        <MapData onClick={handleclickClose} />
      }
    </>
  )
};

export default Map;