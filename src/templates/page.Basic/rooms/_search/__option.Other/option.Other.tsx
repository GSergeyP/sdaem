import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { useNavigate } from 'react-router-dom';
import Connect from '../../../../../connect/connect';
import Tags from '../../../../../components/tags';
import ModalData from '../../../../../components/modal.Data';
import { URL, bedsClassesData, districtClassesData, metroClassesData, noneClassesData, icon } from './option.Other.Const';
import Checkbox from './___checkbox/checkbox';
import clsx from 'clsx';
import style from './option.Other.module.scss';


const DataPoint = (dataPoint1: string, dataPoint2: string, props: {[key: string]: any}, func: () => void) => {

  const ID = useSelector((state: RootState) => state.page.id);

  const [data, setData] = useState<Array<{}>>();

  const navigate = useNavigate();
  
  //Получение данных//////////////////////////////////
  useEffect(() => {
    Connect(URL)
    .then((resp) => { 
      setData(resp[0].data);
    })
    .catch(() => {setData([])});
  }, []);

  const content = useMemo(() => {

    const handleClick = (data: number | string, dataPoint2: string) => {
      func();

      let dataset: (string | number)[] = [];
      dataset = props.data.data[dataPoint2];
      dataset.push(String(data));

      let CITY, ROOM, PRICEFROM, PRICEBEFORE, BED, DISTRICT, METRO;

      if(dataPoint2 === 'bed') BED = dataset
      else if(props.data.data.bed.length > 0) BED = props.data.data.bed
      else BED = '&';
      if(dataPoint2 === 'district') DISTRICT = dataset
      else if(props.data.data.district.length > 0) DISTRICT = props.data.data.district
      else DISTRICT = '&';
      if(dataPoint2 === 'metro') METRO = dataset
      else if(props.data.data.metro.length > 0) METRO = props.data.data.metro
      else METRO = '&';
 
      (props.data.data.id) ? CITY = props.data.data.id : CITY = '&';
      (props.data.data.rooms.length > 0) ? ROOM = props.data.data.rooms : ROOM = '&';
      (props.data.data.priceFrom) ? PRICEFROM = props.data.data.priceFrom : PRICEFROM = '&';
      (props.data.data.priceBefore) ? PRICEBEFORE = props.data.data.priceBefore : PRICEBEFORE = '&';

      navigate(`../../../sdaem/rooms/${CITY}/${ROOM}/${PRICEFROM}/${PRICEBEFORE}/${BED}/${DISTRICT}/${METRO}`)
    }
    //////////////////////////////////////////////////

    let dataFull: any[]  = [],
        dataSameTypeAllTmp = [],
        dataSameTypeAll = [],
        dataSameTypeUniqueTmp: string[] = [],
        dataSameTypeUnique: string[] = [],
        toRemove: any[] = [];
        
    if(data) {

      toRemove = props.data.data[dataPoint2];

      if(ID) dataFull = data.filter((item: any) => item.id === Number(ID));  ////////////////////////////////
      else dataFull = data;

      dataSameTypeAllTmp = dataFull.map((item:any) => item[dataPoint1][0]);
      dataSameTypeAll = dataSameTypeAllTmp.map((item:any) => item[dataPoint2]);
      dataSameTypeUniqueTmp = Array.from(new Set(dataSameTypeAll));

      dataSameTypeUnique = dataSameTypeUniqueTmp.map(String).filter((item) => !toRemove.includes(String(item)));
      dataSameTypeUnique.sort();
    }

    return dataSameTypeUnique.map((item: any) => ({                                             ////////////////////////////// 
      title: item, 
      onClick: handleClick.bind(this, item, dataPoint2)
    }));
  }, [ID, data, props.data, dataPoint1, dataPoint2, func, navigate]);
  return content;
}
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

  const OptionOther = (props: {data: {[key: string]: string}, sendToParent: any}) => {    /////////////////////////

  const ID = useSelector((state: RootState) => state.page.id);

  const [bedsActive, setBedsActive] = useState<boolean>(false),
        [districtActive, setDistrictActive] = useState<boolean>(false),
        [metroActive, setMetroActive] = useState<boolean>(false),
        [checked, setChecked] = useState<Array<{}>>([]);


  const bedsClasses = bedsClassesData(bedsActive),
        districtClasses = districtClassesData(districtActive),
        metroClasses = metroClassesData(metroActive);   
  ////////////////////////////////////

  const bedsCallback = () => {
    setBedsActive(false)
  };

  const districtCallback = () => {
    setDistrictActive(false)
  };

  const metroCallback = () => {
    setMetroActive(false)
  };

  useEffect(() => {
    props.sendToParent(checked);
  }, [props, checked]);

  return(
    <div className={style.container}>
      <Tags type='div' data={[{classes: style['block-h4']}]}>
        <Tags type='h4' data={[{classes: clsx(style.h4, style.item1), title: 'Спальные места'}]} />
        <Tags type='h4' data={[{classes: clsx(style.h4, style.item2, {[style.active]: !ID}), title: 'Район'}]} />
        <Tags type='h4' data={[{classes: clsx(style.h4, style.item3, {[style.active]: Number(ID) !== 5}), title: 'Метро'}]} />
      </Tags>
      <Tags type='div' data={[{classes: style['block-button']}]}>
        <ModalData 
          activation='Выберите'
          classes={bedsClasses}
          content={DataPoint('beds', 'bed', props, bedsCallback)}
          icon={icon}
          position='right'
          onClick={() => setBedsActive(true)}
        />
        <ModalData 
          activation='Выберите'
          classes={(ID) ? districtClasses : noneClassesData}
          content={DataPoint('address', 'district', props, districtCallback)}
          icon={icon}
          position='right'
          onClick={() => setDistrictActive(true)}
        />
        <ModalData 
          activation='Выберите'
          classes={(Number(ID) === 5) ? metroClasses : noneClassesData}
          content={DataPoint('address', 'metro', props, metroCallback)}
          icon={icon}
          position='right'
          onClick={() => setMetroActive(true)}
        />
        <Checkbox sendToParent={setChecked} />
      </Tags>
    </div>
  )
};

export default OptionOther;