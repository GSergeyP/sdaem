import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { roomsData } from '../../../../redux/pageSlice';
import clsx from 'clsx';
import Connect from '../../../../connect/connect';
import Tags from '../../../../components/tags';
import { URL, pageSize, h3Data, metroClassesData, metroIcon, districtClassesData, districtIcon, linksData } from './rooms.Const';
import ModalData from '../../../../components/modal.Data';
import CardRoomsVertical from '../../../../components/card.Rooms.Vertical/card.Rooms.Vertical';
import Icon from '../../../../components/icon';
import Links from '../../../../components/links';
import cities from '../../../../json/cities.json';
import style from './rooms.module.scss';


const CITY = (props: number) => {
  const cityCurrent = cities.filter((item: {[key: string]: any}) => item.id === Number(props)); 
  return cityCurrent[0].cityOther2;
};

const Rooms = () => {
  const ID = useSelector((state: RootState) => state.page.id);

  const dispatch = useDispatch();

  const [data, setData] = useState<object[]>([]),
        [dataReception, setDataReception] = useState<object[]>([]),
        [city, setCity] = useState<number | null>(ID),
        [currentPage, setCurrentPage] = useState<number>(1),
        [cityTitle, setCityTitle] = useState<string>('Беларуси'),
        [districtActive, setDistrictActive] = useState<boolean>(false),
        [districtTitle, setDistrictTitle] = useState<string>('Район'),
        [metroActive, setMetroActive] = useState<boolean>(false),
        [metroTitle, setMetroTitle] = useState<string>('Метро'),
        [length, setLength] = useState<number>(),
        [hidePrev, setHidePrev] = useState<boolean>(true),
        [hideNext, setHideNext] = useState<boolean>(true);

  const districtClasses = districtClassesData(districtActive);
  const metroClasses = metroClassesData(metroActive);
  
  useEffect(() => {
    setCity(ID);
  }, [ID]);

  useEffect(() => {

    if(ID) setCity(ID);

    if(!city) { 
      Connect(URL)
        .then((resp) => { 
          //Сортировка случайным образом
          for(let i = resp[0].data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() *(i + 1));
            const dataTmp = resp[0].data[i];
            resp[0].data[i] = resp[0].data[j];
            resp[0].data[j] = dataTmp
          }
          setDataReception(resp[0].data);
          setData(resp[0].data);
        })
      .catch(() => {setData([])});
    }
    else {
      Connect(URL)
      .then((resp) => { 
        const dataCurrent = resp[0].data.filter((item: {[key: string]: any}) => item.id === Number(city));
        setDataReception(dataCurrent);
        setData(dataCurrent);
      })
      .catch(() => {setData([])});
    }
  
    let CITYTITLE: {[key: string]: any} = [];
    if(city) {
      CITYTITLE = cities.filter((item: {[key: string]: any}) => item.id === Number(city));
      setCityTitle(CITYTITLE[0].cityOther);
      setDistrictTitle('Район');
      setMetroTitle('Метро');
      setCurrentPage(1);
    }
  }, [city]);

//Сортировка по районам//////////////////////////////////////////////////
  const isToggleDistrictOpen = () => {
    setDistrictActive(true);
  }

  const district = useMemo(() => {
    const isToggleDistrictClose = (props: string) => {
      setDistrictTitle(props);
      setDistrictActive(false);
      const dataCurrent: Array<{}> = dataReception.filter((item: {[key: string]: any}) => item.address[0].district === props);
      setData(dataCurrent);
      setCurrentPage(1);
      setMetroTitle('Метро');
    }

    let districtRentalsAll = [],
        districtAddress = [],
        districtAll = [],
        district = [];

    if(city) districtRentalsAll = dataReception.filter((item: {[key: string]: any}) => item.id === Number(city))
    else districtRentalsAll = dataReception;

    districtAddress = districtRentalsAll.map((item: {[key: string]: any}) => item.address[0]);
    districtAll = districtAddress.map((item: {[key: string]: any}) => item.district);
    district = Array.from(new Set(districtAll));
 
    return district.map((item: string) => ({
      title: item, 
      onClick: isToggleDistrictClose.bind(this, item),
    }));
  }, [city, dataReception]);
//Сортировка по метро//////////////////////////////////////////////////

const isToggleMetroOpen = () => {
  setMetroActive(true);
}

const metro = useMemo(() => {
  const isToggleMetroClose = (props: string) => {
    setMetroTitle(props);
    setMetroActive(false);
    const dataCurrent: Array<{}> = dataReception.filter((item: {[key: string]: any}) => item.address[0].metro === props);
    setData(dataCurrent);
    setCurrentPage(1);
    setDistrictTitle('Район');
  }

  let metroRentalsAll = [],
      metroAddress = [],
      metroAll = [],
      metro = [];

  if(city) metroRentalsAll = dataReception.filter((item: {[key: string]: any}) => item.id === Number(city))
  else metroRentalsAll = dataReception;

  metroAddress = metroRentalsAll.map((item: {[key: string]: any}) => item.address[0]);
  metroAll = metroAddress.map((items: {[key: string]: any}) => items.metro);
  metro = Array.from(new Set(metroAll));

  return metro.map((item: string) => ({
    title: item, 
    onClick: isToggleMetroClose.bind(this, item),
  }));

}, [city, dataReception])

//Формирование списка карт//////////////////////////////////////////////////

const listCurrentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize, 
          lastPageIndex = firstPageIndex + pageSize;     
    return data.slice(firstPageIndex, lastPageIndex);
}, [data, currentPage]);
//Листание карт//////////////////////////////////////////////////

useEffect(() => {
  if(currentPage <= 1) setHidePrev(false)
  else setHidePrev(true);

  if(currentPage >= data.length / pageSize) setHideNext(false)
  else setHideNext(true);

  setLength(data.length);
  dispatch(roomsData(data));

}, [currentPage, data.length, data, dispatch]);

const handleClickPrev = () => {
  setCurrentPage(currentPage - 1);
}
const handleClickNext = () => {
  setCurrentPage(currentPage + 1);
}
////////////////////////////////////////////////////
  return (
    <>
      <div className={style.header}>
        <Tags type='h3' data={h3Data} />
        <Tags 
          type='h2' 
          data={[{
            classes: style.h2, 
            title: `Аренда квартир в ${cityTitle}` 
          }]} 
        />
        {
        (ID === 5) && 
          <ModalData 
            activation={metroTitle}
            classes={metroClasses}
            content={metro}
            icon={metroIcon}
            position='left'
            onClick={isToggleMetroOpen}
          />
        }
        {
        (ID) && 
          <ModalData 
            activation={districtTitle}
            classes={districtClasses}
            content={district}
            icon={districtIcon}
            position='right'
            onClick={isToggleDistrictOpen}
          />
        }
      </div>
      <div className={style.body}>
        <CardRoomsVertical data={listCurrentData} />
      </div>
      <div className={style.footer}>
        {
        (hidePrev) &&
          <Icon 
            icon='arrowСircle' 
            classes={clsx(style['footer-icon'], style.item1)} 
            onClick={handleClickPrev} 
          />
        }
        {
        (hideNext) && 
          <Icon 
            icon='arrowСircle' 
            classes={clsx(style['footer-icon'], style.item2)} 
            onClick={handleClickNext} 
          />
        }
        <Tags type='span' data={[{classes: style.span}]}>
          <Tags type='h1' data={[{classes: style.h1, title: length}]}>
            <Tags type='span' data={[{classes: style['span-h1'], title: '+'}]} />
          </Tags>
          <Tags 
            type='h4' 
            data={[{
              classes: style.h4, 
              title: `Предложений по ${(ID) ? CITY(ID) : 'Беларуси'}`
            }]} 
          />
        </Tags>
        <Links data={linksData} />
      </div>
    </>
  );
}

export default Rooms;