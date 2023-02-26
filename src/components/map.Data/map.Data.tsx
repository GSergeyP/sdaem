import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect, useState } from 'react';
import { Placemark, YMaps, Map } from '@pbe/react-yandex-maps';
import Tags from '../tags';
import { buttonData } from './map.Data.Const';
import cities from '../../json/cities.json';

const MapData = (props: {[key: string]: any}) => {

  const ID = useSelector((state: RootState) => state.page.id),
        DATA = useSelector((state: RootState) => state.page.data);

  const [placeCity, setPlaceCity] = useState({latitude: 53.90, longitude: 27.56}),
        [data, setData] = useState<any>([]),
        [isLoading, setIsLoading] = useState<boolean>(true),
        [zoom, setZoom] = useState<number>(7);

useEffect(() => {
  setData(DATA);
  if(!ID) { 
    setZoom(7);
    setPlaceCity({latitude: 53.90, longitude: 27.56});
  }
  else {
    let CITYTITLE: {[key: string]: any} = [];    
    setZoom(12);
    CITYTITLE = cities.filter((item: {[key: string]: any}) => item.id === Number(ID));
    setPlaceCity({latitude: CITYTITLE[0].latitude, longitude: CITYTITLE[0].longitude})
  }

  setIsLoading(false);
  setTimeout(() => setIsLoading(true), 500);
}, [ID, DATA]);

  return(
    <>
      {
      (isLoading) &&
        <YMaps>
          <Map
            defaultState={{
              center: [placeCity.latitude, placeCity.longitude],
              zoom: zoom,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
            style={{width: '100%', height: '100%', position: 'relative'}}
          >
            {
            data?.map((item: {[key: string]: any}, index: number) => (
              <Placemark
                key={index}
                modules={["geoObject.addon.balloon"]}
                defaultGeometry={[item.address[0].latitude, item.address[0].longitude]}
                properties={{
                  balloonContentHeader: `${item.price} BYN`,
                  balloonContentBody: 
                  `${item.room} комн. - ${item.square} м² на ${item.beds[0].bed + item.beds[0].bedAdditional} чел.`,
                }}
              />
            ))
            }
            <Tags type='button' data={buttonData} onClick={props.onClick} />
          </Map>
        </YMaps>
      }
    </>
  )
};

export default MapData;