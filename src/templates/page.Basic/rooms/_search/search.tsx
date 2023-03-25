import { useContext, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { redirectState } from '../../../../redux/pageSlice';
import { Context } from '../_context/context';
import { useNavigate } from 'react-router-dom';
import OptionOther from './__option.Other/option.Other';
import ModalData from '../../../../components/modal.Data';
import Connect from '../../../../connect/connect';
import Tags from '../../../../components/tags';
import { URL, classesData, icon } from './search.Const';
import clsx from 'clsx';
import style from './search.module.scss';



const Search = (props: {[key: string]: any}) => {

  const dispatch = useDispatch();
  const REDIRECT = useSelector((state: RootState) => state.page.redirect);

  const { setDataRoomCard } = useContext(Context);

  const navigate = useNavigate();

  const [roomActive, setRoomActive] = useState<boolean>(false),
        [data, setData] = useState<Array<{}>>(),
        [priceFrom, setPriceFrom] = useState<number | ''>(''),
        [priceBefore, setPriceBefore] = useState<number | ''>(''),
        [optionOther, setOptionOther] = useState<boolean>(false),
        [checked, setChecked] = useState<Array<{}>>([]);

  const classes = classesData(roomActive);

  //Добавление комнат//////////////////////////////////
  useEffect(() => {
    Connect(URL)
    .then((resp) => { 
      setData(resp[0].data);
    })
    .catch(() => {setData([])});

    if(REDIRECT) {
      setOptionOther(true);
      dispatch(redirectState(false));
    }
  }, [REDIRECT, dispatch]);
  ////////////////////////////////////

  const isToggleRoomOpen = () => {
    setRoomActive(true);
  }
 ////////////////////////////////////

  const roomsAll = useMemo(() => {

    const isToggleRoomClose = (room: number) => {
      setRoomActive(false);
  
      let rooms = props.data.rooms;
      rooms.push(String(room))
  
      let CITY, ROOM, PRICEFROM, PRICEBEFORE, BED, DISTRICT, METRO;

      (props.data.id) ? CITY = props.data.id : CITY = '&';
      (props.data.rooms) ? ROOM = rooms : ROOM = '&';
      (props.data.priceFrom) ? PRICEFROM = props.data.priceFrom : PRICEFROM = '&';
      (props.data.priceBefore) ? PRICEBEFORE = props.data.priceBefore : PRICEBEFORE = '&';
      (props.data.bed.length > 0) ? BED = props.data.bed : BED = '&';
      (props.data.district.length > 0) ? DISTRICT = props.data.district : DISTRICT = '&';
      (props.data.metro.length > 0) ? METRO = props.data.metro : METRO = '&';

      navigate(`/rooms/${CITY}/${ROOM}/${PRICEFROM}/${PRICEBEFORE}/${BED}/${DISTRICT}/${METRO}`);
    }
    ////////////////////////////////////
    let apartmentRentals = [],
        apartmentsAll = [],
        roomsAllTmp: string[] = [],
        roomsAll: string[] = [],
        toRemove: number[] = []; 

    if(data) {
      toRemove = props.data.rooms.map(Number);
  
      if(props.data.id) apartmentRentals = data.filter((item: {[key: string]: any}) => item.id === Number(props.data.id));
      else apartmentRentals = data;
      
      apartmentsAll = apartmentRentals.map((item: {[key: string]: any}) => item.room);
      roomsAllTmp = Array.from(new Set(apartmentsAll));
      roomsAll = roomsAllTmp.filter((item) => !toRemove.includes(Number(item)));
      roomsAll.sort();
    }

    return roomsAll.map((item: any) => ({
      title: item, 
      onClick: isToggleRoomClose.bind(this, item)
    }));

  }, [props.data, data, navigate]);

  //Установление цены//////////////////////////////////
  const handleChangeFrom = (e: {[key: string]: any}) => {
    const result = e.target.value.replace(/\D/g, '').slice(0,3);
    setPriceFrom(result);
  }
  const handleChangeBefore = (e: {[key: string]: any}) => {
    const result = e.target.value.replace(/\D/g, '').slice(0,3);
    setPriceBefore(result);
  }

  //Открытие дополнительных опций//////////////////////////////////
  const handleClickOptionOther = () => {
    setOptionOther(true);
  }

  //Очистка//////////////////////////////////
  const handleClickClear = () => {
    let CITY;
    (props.data.id) ? CITY = props.data.id : CITY = '&';
    navigate(`/rooms/${CITY}`);
    navigate(0);
 }

  //Отправка данных
  const handleClickOk = () => {
    let objClone = Object.assign({}, props.data);

    if(Number(priceFrom) && Number(priceBefore) && Number(priceFrom) > Number(priceBefore)) {
      objClone.priceMin = priceBefore;
      objClone.priceMax = priceFrom;
    }
    else if(Number(priceFrom) && Number(priceBefore) && Number(priceFrom) < Number(priceBefore)) {
      objClone.priceMin = priceFrom;
      objClone.priceMax = priceBefore;
    }
    else if(Number(priceFrom) && Number(priceBefore) && Number(priceFrom) === Number(priceBefore)) {
      objClone.priceMax = null;
      objClone.priceMin = null;
    }
    else if(Number(priceFrom) || Number(priceBefore)) {
      let priceMin = Number(objClone.priceMin),
          priceMax = Number(objClone.priceMax);
          
      if(Number(priceFrom)) {
        if(priceMin > 0 && priceMax > 0) {
          if(Number(priceFrom) > priceMax) {
            objClone.priceMax = priceFrom;
            objClone.priceMin = priceMax;
          }
          else if(Number(priceFrom) === priceMax) {
            objClone.priceMax = null;
            objClone.priceMin = null;
          }
          else if(Number(priceFrom) < priceMax) objClone.priceMin = priceFrom;
        }
        else if(priceMin === 0 && priceMax > 0) {
          if(Number(priceFrom) > priceMax) {
            objClone.priceMax = priceFrom;
            objClone.priceMin = priceMax;
          }
          else if(Number(priceFrom) === priceMax) {
            objClone.priceMax = null;
            objClone.priceMin = null;
          }
          else if(Number(priceFrom) < priceMax) objClone.priceMin = priceFrom;
        }
        else if(priceMin > 0 && priceMax === 0) objClone.priceMin = priceFrom;
        else if(priceMin === 0 && priceMax === 0) objClone.priceMin = priceFrom;
      }
      else if(Number(priceBefore)) {
        if(priceMin > 0 && priceMax > 0) {
          if(Number(priceBefore) < priceMin) {
            objClone.priceMax = priceMin;
            objClone.priceMin = priceBefore;
          }
          else if(Number(priceBefore) === priceMin) {
            objClone.priceMax = null;
            objClone.priceMin = null;
          }
          else if(Number(priceBefore) > priceMin) objClone.priceMax = priceBefore;
        }
        else if(priceMin > 0 && priceMax === 0) {
          if(Number(priceBefore) < priceMin) {
            objClone.priceMax = priceMin;
            objClone.priceMin = priceBefore;
          }
          else if(Number(priceBefore) === priceMin) {
            objClone.priceMax = null;
            objClone.priceMin = null;
          }
          else if(Number(priceBefore) > priceMin) objClone.priceMax = priceBefore;
        }
        else if(priceMin === 0 && priceMax > 0) objClone.priceMax = priceBefore;
        else if(priceMin === 0 && priceMax === 0) objClone.priceMax = priceBefore;
      }
    }
    /////////////////////////////////////////////
    let CITY, ROOM, PRICEFROM, PRICEBEFORE, BED, DISTRICT, METRO;

    (objClone.id) ? CITY = objClone.id : CITY = '&';
    (objClone.rooms.length > 0) ? ROOM = objClone.rooms : ROOM = '&';
    (objClone.priceMin) ? PRICEFROM = objClone.priceMin : PRICEFROM = '&';
    (objClone.priceMax) ? PRICEBEFORE = objClone.priceMax : PRICEBEFORE = '&';
    (objClone.bed.length > 0) ? BED = objClone.bed : BED = '&';
    (objClone.district.length > 0) ? DISTRICT = objClone.district : DISTRICT = '&';
    (objClone.metro.length > 0) ?  METRO = objClone.metro : METRO = '&';

    navigate(`/rooms/${CITY}/${ROOM}/${PRICEFROM}/${PRICEBEFORE}/${BED}/${DISTRICT}/${METRO}`)

    setPriceFrom('');
    setPriceBefore('');

    objClone = Object.assign(objClone, {checked: checked}); //Объединение объектов

    setDataRoomCard(objClone);
    setOptionOther(false);

    props.sendToParent(true);
  }

  return(
    <>
      <div className={style.container}>
        <div className={style['block-room']}>
          <Tags type='h4' data={[{classes: style.h4, title: 'Комнаты'}]} />
          <ModalData 
            activation='Выберите'
            classes={classes}
            content={roomsAll}
            icon={icon}
            position='right'
            onClick={isToggleRoomOpen}
          />
        </div>
        <div className={style['block-price']}>
          <Tags 
            type='h4' 
            data={[
              {classes: style.h4, title: 'Цена за сутки (BYN)'},
              {classes: clsx(style.h4, style.item1), title: '-'},
            ]} 
          />
          <input 
            type='text'
            className={clsx(style.input, style.item1)}
            placeholder={(props.data.priceMin) ? props.data.priceMin : 'От'}
            value={priceFrom}
            onChange={handleChangeFrom}
          />
          <input 
            type='text'
            className={clsx(style.input, style.item2)}
            placeholder={(props.data.priceMax) ? props.data.priceMax : 'До'}
            value={priceBefore}
            onChange={handleChangeBefore}
          />
        </div>
        <div className={clsx(style['block-option'], (optionOther) && style.item1)}>
          <Tags 
            type='h4' 
            data={[{
              classes: style.h4, 
              title: 'Больше опций',
              icon: {
                icon: 'setup',
                classes: style['h4-icon']
              },
              position: 'right',
            }]} 
            onClick={handleClickOptionOther}
          />
        </div>
        <div className={style['block-button']}>
          <Tags 
            type='button' 
            data={[{
              classes: style['button-clear'],
              title: 'Очистить',
            }]} 
            onClick={handleClickClear}
          />
          <Tags 
            type='button' 
            data={[{
              classes: style['button-ok'],
              title: 'Показать объекты',
              icon: {
                icon: 'mark',
                classes: style['button-ok__icon']
              },
              position: 'right',
            }]} 
            onClick={handleClickOk}
          />
        </div>
      </div>
      {(optionOther) && <OptionOther data={props} sendToParent={setChecked} />}
    </>
  )
};

export default Search;