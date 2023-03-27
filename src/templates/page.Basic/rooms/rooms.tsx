import { useCallback, useEffect, useState } from 'react';
import { Context, defaultState } from './_context/context';
import { useDispatch, useSelector } from 'react-redux';
import { cityData } from '../../../redux/pageSlice';
import { RootState } from '../../../redux/store';
import { useNavigate, useParams } from 'react-router-dom';
import Info from './_info/info';
import Search from './_search/search';
import ControlPanel from './_control.Panel/control.Panel';
import CardBord from './_card.Board/card.Bord';
import Map from './_map/map';
import cities from '../../../json/cities.json';
import style from './rooms.module.scss';

interface rooms {
  room?: string | null,
  [key: string]: any,              //////////////////////////////////// 
}

interface bed {
  bed?: string | null,
  [key: string]: any,              //////////////////////////////////// 
}

interface district {
  district?: string | null,
  [key: string]: any,              //////////////////////////////////// 
}

interface metro {
  metro?: string | null,
  [key: string]: any,              //////////////////////////////////// 
}

interface property {
  id?: string | null | number,
  rooms?: rooms,
  priceMin?: number | null,
  priceMax?: number | null,
  bed?: bed,
  district?: district,
  metro?: metro,
  checked: Array<{}>,
}

const Rooms = () => {

  const [dataRoomCard, setDataRoomCard] = useState(defaultState.dataRoomCard);

  const dispatch = useDispatch();
  const ID = useSelector((state: RootState) => state.page.id);

  const navigate = useNavigate();
  let { CITY, ROOM, PRICEFROM, PRICEBEFORE, BED, DISTRICT, METRO } = useParams(); 

  const [dataProperty, setDataProperty] = useState<property>({
                                                              id: null, 
                                                              rooms: [], 
                                                              priceMin: null, 
                                                              priceMax: null,
                                                              bed: [],
                                                              district: [],
                                                              metro: [],
                                                              checked: [],
                                                            }),
        [isParentDataPagination, setIsParentDataPagination] = useState<boolean>(false),
        [selection, setSelection] = useState<boolean>(true),
        [total, setTotal] = useState<string>('');

//////////////////////////////////////////////////////////////
  useEffect(() => {
    if(!dataProperty.id && CITY !== '&' && Number(CITY)) {
      const data = cities.filter((item: any) => item.id === Number(CITY));
      dispatch(cityData([{id: CITY, city: data[0].city}]));
      localStorage.setItem('city', JSON.stringify([{id: CITY, city: data[0].city, cityOther: data[0].cityOther}]));  

    }
    else if(ID && Number(ID) !== Number(CITY)) {
      setIsParentDataPagination(true)
      navigate(`../../../../../../../../../sdaem/rooms/${ID}/${ROOM}/${PRICEFROM}/${PRICEBEFORE}/${BED}/${DISTRICT}/${METRO}`);
    }

  ////////////////////////////////////////////////////////////// 
  
    if(CITY !== '&' && CITY !== 'undefined') setDataProperty((prevState) => ({...prevState, id: CITY}));

    if(ROOM !== '&' && ROOM && ROOM !== 'undefined') {
      const room = ROOM.split(',');
      setDataProperty((prevState) => ({...prevState, rooms: room.map((item: any) => (item))}));
    }

    if(PRICEFROM !== '&' && PRICEBEFORE !== '&' && Number(PRICEFROM) > Number(PRICEBEFORE)) {
      setDataProperty((prevState) => ({...prevState, priceMin: Number(PRICEBEFORE), priceMax: Number(PRICEFROM)}));
    }
    else if(PRICEFROM !== '&' && PRICEBEFORE !== '&' && Number(PRICEFROM) < Number(PRICEBEFORE)) {
      setDataProperty((prevState) => ({...prevState, priceMin: Number(PRICEFROM), priceMax: Number(PRICEBEFORE)}));
    }
    else if(PRICEFROM !== '&' && PRICEBEFORE !== '&' && Number(PRICEFROM) === Number(PRICEBEFORE)) {
      setDataProperty((prevState) => ({...prevState, priceMin: null, priceMax: null}));
    }
    else if(PRICEFROM !== '&' && PRICEBEFORE === '&') {
      setDataProperty((prevState) => ({...prevState, priceMax: null, priceMin: Number(PRICEFROM)}));
    }
    else if(PRICEFROM === '&' && PRICEBEFORE !== '&') {
      setDataProperty((prevState) => ({...prevState, priceMin: null, priceMax: Number(PRICEBEFORE)}));
    }
    else if(PRICEFROM === '&' && PRICEBEFORE === '&') {
      setDataProperty((prevState) => ({...prevState, priceMin: null, priceMax: null}));
    }
    if(BED !== '&' && BED && BED !== 'undefined') {
      const bed = BED.split(',');
      setDataProperty((prevState) => ({...prevState, bed: bed.map((item: any) => (item))}));
    }
    if(DISTRICT !== '&' && DISTRICT && DISTRICT !== 'undefined') {
      const district = DISTRICT.split(',');
      setDataProperty((prevState) => ({...prevState, district: district.map((item: any) => (item))}));
    }
    if(METRO !== '&' && METRO && METRO !== 'undefined') {
      const metro = METRO.split(',');
      setDataProperty((prevState) => ({...prevState, metro: metro.map((item: any) => (item))}));
    }
  }, [ID, CITY, ROOM, PRICEFROM, PRICEBEFORE, BED, DISTRICT, METRO, dataProperty.id, navigate, dispatch]);


//Вывод карт при первой загрузке////////////////////////////////////////////////////////////
  const [card, setCard] = useState<boolean | null>(false)

  const cardDataObj: any = Object.assign({}, dataProperty);  
  
  const cardData =useCallback(() => {
    setDataRoomCard(cardDataObj)
  },[cardDataObj]);
  
  useEffect(() => {
    if(card) {
      (dataRoomCard.length === 0) && cardData()
      setCard(null)
    }
    setCard(true)
  }, [dataRoomCard.length, card, cardData]);

  return(
    <>
    <Context.Provider value = {{dataRoomCard, setDataRoomCard}}>
      <section className={style.block}>
        <Info data={dataProperty} />
        <Search data={dataProperty} sendToParent={setIsParentDataPagination} />
        <ControlPanel 
          toChild={[{selection}, {total}]} 
          sendToParent={[{setIsParentDataPagination},{setSelection}]} 
        />
        <CardBord 
          toChild={[{isParentDataPagination}, {selection}]} 
          sendToParent={[{setIsParentDataPagination}, {setTotal}]} 
        />
        <div id='map' className={style.map}>
          <Map />
        </div>  
      </section>
    </Context.Provider>
    </>
  )
}

export default Rooms;


