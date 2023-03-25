import { useMemo, useState, useEffect, useContext } from 'react';
import { Context } from '../_context/context';
import { useDispatch, useSelector } from 'react-redux';
import { roomsData } from '../../../../redux/pageSlice';
import { RootState } from '../../../../redux/store';
import Connect from '../../../../connect/connect';
import { URL, pageSizeTile, pageSizeList } from './card.Bord.Const';
import CardRoomsVertical from '../../../../components/card.Rooms.Vertical/card.Rooms.Vertical';
import CardRoomsHorizontally from '../../../../components/card.Rooms.Horizontally/card.Rooms.Horizontally';
import Networks from '../../../../components/networks/networks';
import Pagination from '../../../../components/pagination/pagination';
import style from './card.Bord.module.scss';


const CardBord = (props: {[key: string]: any}) => {

  const dispatch = useDispatch();
  
  const { dataRoomCard } = useContext(Context);

  const ID = useSelector((state: RootState) => state.page.id);

  const [data, setData] = useState<object[]>([]),
        [currentPage, setCurrentPage] = useState<number>(1),
        [pageSizeOption, setPageSizeOption] = useState<boolean>(false),
        [rooms, setRooms] = useState<{[key: string]: any}>([]);

  let pageSize = (pageSizeOption) ? pageSizeList : pageSizeTile;

  useEffect(() => {
  
    if(!ID) { 
      Connect(URL)
        .then((resp) => { 
          //Сортировка случайным образом
          for(let i = resp[0].data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() *(i + 1));
            const dataTmp = resp[0].data[i];
            resp[0].data[i] = resp[0].data[j];
            resp[0].data[j] = dataTmp
          }
          setData(resp[0].data);
        })
      .catch(() => {setData([])});
    }
    else {
      Connect(URL)
      .then((resp) => { 
        const dataCurrent = resp[0].data.filter((item: any) => item.id === Number(ID));      ////////////////////////// 
        setData(dataCurrent);
      })
      .catch(() => {setData([])});
    }
  }, [ID, dataRoomCard])

  const listCurrentData = useMemo(() => {
    let sortRoomTmp = [],
        sortRoom: {[key: string]: any} = [], 
        sortBedsTmp = [],
        sortBeds: {[key: string]: any} = [],
        sortDistrictTmp = [], 
        sortDistrict: {[key: string]: any} = [], 
        sortMetroTmp = [],
        sortMetro: {[key: string]: any} = [],
        sortPriceMin: {[key: string]: any} = [],
        sortPriceMax: {[key: string]: any} = [],
        sortGasStove: {[key: string]: any} = [],
        sortOven: {[key: string]: any} = [],
        sortCoffeeMaker: {[key: string]: any} = [],
        sortMicrowave: {[key: string]: any} = [],
        sortDishes: {[key: string]: any} = [],
        sortDishwasher: {[key: string]: any} = [],
        sortFridge: {[key: string]: any} = [],
        sortPlayground: {[key: string]: any} = [],
        sortSchool: {[key: string]: any} = [],
        sortKindergarten: {[key: string]: any} = [],
        sortShop: {[key: string]: any} = [],
        sortCafe: {[key: string]: any} = [];




    if(dataRoomCard) {
      //Сорт-комнаты///////////////
      if(dataRoomCard.rooms) {
        if(dataRoomCard.rooms.length > 0) {
          dataRoomCard.rooms.map((room: string) => (
            (
              sortRoomTmp = data.filter((item: {[key: string]: any}) => (String(item.room) === room)),
              sortRoom = sortRoom.concat(sortRoomTmp),
              sortRoomTmp = []
            )
          ))
        }
        else sortRoom = data;
      }
      //Сорт-кровати///////////////
      if(dataRoomCard.bed) {
        if(dataRoomCard.bed.length > 0) {
          dataRoomCard.bed.map((bed: string) => (
            (
              sortBedsTmp = sortRoom.filter((items: {[key: string]: any}) => (items.beds.some((item: {[key: string]: string}) => (String(item.bed) === bed)))),
              sortBeds = sortBeds.concat(sortBedsTmp),
              sortBedsTmp = [] 
            )
          ))
        }
        else sortBeds = sortRoom;
      }
      //Сорт-районы///////////////
      if(dataRoomCard.district) {
        if(dataRoomCard.district.length > 0) {
          dataRoomCard.district.map((district: string) => (
            (
              sortDistrictTmp = sortBeds.filter((items: {[key: string]: any}) => (items.address.some((item: {[key: string]: string}) => (String(item.district) === district)))),
              sortDistrict = sortDistrict.concat(sortDistrictTmp),
              sortDistrictTmp = [] 
            )
          ))
        }
        else sortDistrict = sortBeds;
      }
      //Сорт-метро///////////////
      if(dataRoomCard.metro) {
        if(dataRoomCard.metro.length > 0) {
          dataRoomCard.metro.map((metro: string) => (
            (
              sortMetroTmp = sortDistrict.filter((items: {[key: string]: any}) => (items.address.some((item: {[key: string]: string}) => (String(item.metro) === metro)))),
              sortMetro = sortMetro.concat(sortMetroTmp),
              sortMetroTmp = [] 
            )
          ))
        }
        else sortMetro = sortDistrict;
      }
      //Сорт-мин. цена///////////////
      if(Number(dataRoomCard.priceMin) > 0) {
        sortPriceMin = sortMetro.filter((item: {[key: string]: any}) => (Number(item.price) > Number(dataRoomCard.priceMin)))    
      }
      else sortPriceMin = sortMetro;
      //Сорт-макс. цена///////////////
      if(Number(dataRoomCard.priceMax) > 0) {
        sortPriceMax = sortPriceMin.filter((item: {[key: string]: any}) => (Number(item.price) < Number(dataRoomCard.priceMax)))    
      }
      else sortPriceMax = sortPriceMin;
      //Сорт-газ. плита///////////////
      if(dataRoomCard.checked) {
        if(dataRoomCard.checked.gasStove) {
          sortGasStove = sortPriceMax.filter((items: {[key: string]: any}) => (items.property.some((item: {[key: string]: number}) => (Number(item.gasStove) === 1))))
        }
        else sortGasStove = sortPriceMax;
      }
      //Сорт-духовка///////////////
      if(dataRoomCard.checked) {
        if(dataRoomCard.checked.oven) {
          sortOven = sortGasStove.filter((items: {[key: string]: any}) => (items.property.some((item: {[key: string]: number}) => (Number(item.oven) === 1))))
        }
        else sortOven = sortGasStove;
      }
      //Сорт-кофеварка///////////////
      if(dataRoomCard.checked) {
        if(dataRoomCard.checked.coffeeMaker) {
          sortCoffeeMaker = sortOven.filter((items: {[key: string]: any}) => (items.property.some((item: {[key: string]: number}) => (Number(item.coffeeMaker) === 1))))
        }
        else sortCoffeeMaker = sortOven;
      }
      //Сорт-микроволновка///////////////
      if(dataRoomCard.checked) {
        if(dataRoomCard.checked.microwave) {
          sortMicrowave = sortCoffeeMaker.filter((items: {[key: string]: any}) => (items.property.some((item: {[key: string]: number}) => (Number(item.microwave) === 1))))
        }
        else sortMicrowave = sortCoffeeMaker;
      }
      //Сорт-посуда///////////////
      if(dataRoomCard.checked) {
        if(dataRoomCard.checked.dishes) {
          sortDishes = sortMicrowave.filter((items: {[key: string]: any}) => (items.property.some((item: {[key: string]: number}) => (Number(item.dishes) === 1))))
        }
        else sortDishes = sortMicrowave;
      }
      //Сорт-посудомойка///////////////
      if(dataRoomCard.checked) {
        if(dataRoomCard.checked.dishwasher) {
          sortDishwasher = sortDishes.filter((items: {[key: string]: any}) => (items.property.some((item: {[key: string]: number}) => (Number(item.dishwasher) === 1))))
        }
        else sortDishwasher = sortDishes;
      }
      //Сорт-холодильник///////////////
      if(dataRoomCard.checked) {
        if(dataRoomCard.checked.fridge) {
          sortFridge = sortDishwasher.filter((items: {[key: string]: any}) => (items.property.some((item: {[key: string]: number}) => (Number(item.fridge) === 1))))
        }
        else sortFridge = sortDishwasher;
      }
      //Сорт-дет. площадка///////////////
      if(dataRoomCard.checked) {
        if(dataRoomCard.checked.playground) {
          sortPlayground = sortFridge.filter((items: {[key: string]: any}) => (items.property.some((item: {[key: string]: number}) => (Number(item.playground) === 1))))
        }
        else sortPlayground = sortFridge;
      }
      //Сорт-школа///////////////
      if(dataRoomCard.checked) {
        if(dataRoomCard.checked.school) {
          sortSchool = sortPlayground.filter((items: {[key: string]: any}) => (items.property.some((item: {[key: string]: number}) => (Number(item.school) === 1))))
        }
        else sortSchool = sortPlayground;
      }
      //Сорт-дет. сад///////////////
      if(dataRoomCard.checked) {
        if(dataRoomCard.checked.kindergarten) {
          sortKindergarten = sortSchool.filter((items: {[key: string]: any}) => (items.property.some((item: {[key: string]: number}) => (Number(item.kindergarten) === 1))))
        }
        else sortKindergarten = sortSchool;
      }
      //Сорт-магазин///////////////
      if(dataRoomCard.checked) {
        if(dataRoomCard.checked.shop) {
          sortShop = sortKindergarten.filter((items: {[key: string]: any}) => (items.property.some((item: {[key: string]: number}) => (Number(item.shop) === 1))))
        }
        else sortShop = sortKindergarten;
      }
      //Сорт-кафе///////////////
      if(dataRoomCard.checked) {
        if(dataRoomCard.checked.cafe) {
          sortCafe = sortShop.filter((items: {[key: string]: any}) => (items.property.some((item: {[key: string]: number}) => (Number(item.cafe) === 1))))
        }
        else sortCafe = sortShop;
      }
    }
    setRooms(sortCafe);

    //Формирование списка карт//////////////////////////////////////////////////
    const firstPageIndex = (currentPage - 1) * pageSize, 
          lastPageIndex = firstPageIndex + pageSize;     
    return sortCafe.slice(firstPageIndex, lastPageIndex);
  }, [data, dataRoomCard, currentPage, pageSize]);


  //Обнавление стартовой позиции + изменение расположения объявлений
  useEffect(() => {
    if(props.toChild[0].isParentDataPagination) {
      setCurrentPage(1);
      props.sendToParent[0].setIsParentDataPagination(false);
    }

    if(props.toChild[1].selection) setPageSizeOption(false)
    else setPageSizeOption(true);

    props.sendToParent[1].setTotal(rooms);
  }, [props, rooms]);


  useEffect(() => {
    dispatch(roomsData(listCurrentData));
  }, [dispatch, listCurrentData])
  return(
    <>
      <div className={(pageSizeOption) ? style.list : style.tile}>
        {
        (listCurrentData.length === 0) ? 
          <span className={style.err}>Измените критерии поиска</span> :
          (pageSizeOption) ? 
            <CardRoomsHorizontally data={listCurrentData} /> : 
            <CardRoomsVertical data={listCurrentData} />
        }
      </div>
      {
      (rooms.length > 0) &&
        <div className={style.pagination}>
          <Pagination
            currentPage={currentPage} 
            totalCount={rooms.length} 
            pageSize={pageSize}
            onClick = {(page: number) =>{ setCurrentPage(page); }}
          /> 
        </div>
      }
      <div className={style.networks}>
        <Networks />
      </div>
    </>
  )
}

export default CardBord;