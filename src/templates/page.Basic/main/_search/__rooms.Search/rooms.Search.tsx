import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import ModalData from '../../../../../components/modal.Data';
import Connect from '../../../../../connect/connect';
import Tags from '../../../../../components/tags';
import Links from '../../../../../components/links';
import { cityClassesData, roomClassesData, icon, URL, spanData, spanDataTitle, linksData, buttonData } from './rooms.Search.Const';
import cities from '../../../../../json/cities.json';
import style from './rooms.Search.module.scss';

const RoomsSearch = () => {
  const navigate = useNavigate();
  
  const ID = useSelector((state: RootState) => state.page.id),
        CITYTITLE = useSelector((state: RootState) => state.page.cityTitle);

  const [cityActive, setCityActive] = useState<boolean>(false),
        [roomActive, setRoomActive] = useState<boolean>(false),
        [city, setCity] = useState<number | ''>(''),
        [room, setRoom] = useState<number | ''>(''),
        [cityTitle, setCityTitle] = useState<string>('Выберите'),
        [apartmentRentalsAll, setApartmentRentalsAll] = useState<Array<{}>>(),
        [priceFrom, setPriceFrom] = useState<number | ''>(''),
        [priceBefore, setPriceBefore] = useState<number | ''>('');

 const cityClasses = cityClassesData(cityActive),
       roomClasses = roomClassesData(roomActive);
  
 useEffect(() => {
  if(ID && CITYTITLE) {
    setCity(ID);
    setCityTitle(CITYTITLE);
    setRoom('');
  }

  /////////////////////////
  Connect(URL)
  .then((resp) => { 
    setApartmentRentalsAll(resp[0].data);
  })
  .catch((err) => {if(err) navigate('/error');});
}, [ID, CITYTITLE, navigate]);

  const isToggleCityOpen = () => {
    setCityActive(true);
  }
  const isToggleCityClose = (id: number, city: string) => {
    setCityActive(false);
    setCity(id);
    setCityTitle(city);
    setRoom('');
  }

  ////////////////////////////////////
  const isToggleRoomOpen = () => {
    setRoomActive(true);
  }
  const isToggleRoomClose = (room: number) => {
    setRoomActive(false);
    setRoom(room);
  }

  const citiesAll = useMemo(() => {
    return cities.map((item: any) => ({                                                             ////////////////////////// 
      title: item.city, 
      onClick: isToggleCityClose.bind(this, item.id, item.city)
    }));
  }, []);

  const roomsAll = useMemo(() => {
    let apartmentRentals = [],
        apartmentsAll = [],
        roomsAll: string[] = [];

    if(apartmentRentalsAll) {
      if(city) apartmentRentals = apartmentRentalsAll.filter((item: any) => item.id === Number(city));  ////////////////////////////////
      else apartmentRentals = apartmentRentalsAll;
      
      apartmentsAll = apartmentRentals.map((item:any) => item.room);
      roomsAll = [...new Set(apartmentsAll.join())];
      roomsAll.splice(roomsAll.indexOf(','), 1);
      roomsAll.sort();
    }

    return roomsAll.map((item: any) => ({                                                               ////////////////////////////// 
      title: item, 
      onClick: isToggleRoomClose.bind(this, item)
    }));

  }, [city, apartmentRentalsAll]);

  ////////////////////////////////////
  const handleChangeFrom = (e: any) => {
    const result = e.target.value.replace(/\D/g, '').slice(0,3);
    setPriceFrom(result);
  }
  const handleChangeBefore = (e: any) => {
    const result = e.target.value.replace(/\D/g, '').slice(0,3);
    setPriceBefore(result);
  }
  ////////////////////////////////////
  const handleClick = () => {
    let CITY, ROOM, PRICEFROM, PRICEBEFORE;
    (city) ? CITY = city : CITY = '&';
    (room) ? ROOM = `${room}` : ROOM = '&';
    (priceFrom) ? PRICEFROM = priceFrom : PRICEFROM = '&';
    (priceBefore) ? PRICEBEFORE = priceBefore : PRICEBEFORE = '&';
    navigate(`rooms/${CITY}/${ROOM}/${PRICEFROM}/${PRICEBEFORE}`);
  }
  return(
    <>
      <div className={style.div}>
        <Tags type='span' data={spanData} /> 
      </div>
      <div>
        <Tags type='span' data={spanDataTitle} />
      </div>
      <div>
        <ModalData 
          activation={cityTitle}
          classes={cityClasses}
          content={citiesAll}
          icon={icon}
          position='right'
          onClick={isToggleCityOpen}
        />
        <ModalData 
          activation={(room) ? room : 'Выберите'}
          classes={roomClasses}
          content={roomsAll}
          icon={icon}
          position='right'
          onClick={isToggleRoomOpen}
        />
        <input 
          type='text'
          className={clsx(style.input, style.item1)}
          placeholder='От'
          value={priceFrom}
          onChange={handleChangeFrom}
        />
        <input 
          type='text'
          className={clsx(style.input, style.item2)}
          placeholder='До'
          value={priceBefore}
          onChange={handleChangeBefore}
        />
        <Tags type='h4' data={[{classes: style.h4, title: '-'}]} />
        <Links data={linksData} />
        <Tags type='button' data={buttonData} onClick={handleClick} />
      </div>
    </>
  )
}

export default RoomsSearch;