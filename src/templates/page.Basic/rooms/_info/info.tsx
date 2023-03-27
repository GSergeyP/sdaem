import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../../components/breadcrumb/breadcrumb';
import Icon from '../../../../components/icon';
import cities from '../../../../json/cities.json';
import style from './info.module.scss';

const Info = (props: {[key: string]: any}) => {

  const navigate = useNavigate();

  const data = cities.filter((item: {[key: string]: any}) => item.id === Number(props.data.id));
  
  const handleClick = (dataPoint: string, index: number) => {
    
   props.data[dataPoint].splice(index, 1);

    let CITY, ROOM, PRICEFROM, PRICEBEFORE, BED, DISTRICT, METRO;

    (props.data.id !== null) ? CITY = props.data.id : CITY = '&';
    (props.data.rooms.length > 0) ? ROOM = props.data.rooms : ROOM = '&';
    (props.data.priceFrom) ? PRICEFROM = props.data.priceFrom : PRICEFROM = '&';
    (props.data.priceBefore) ? PRICEBEFORE = props.data.priceBefore : PRICEBEFORE = '&';
    (props.data.bed.length > 0) ? BED = props.data.bed : BED = '&';
    (props.data.district.length > 0 ) ? DISTRICT = props.data.district : DISTRICT = '&';
    (props.data.metro.length > 0) ? METRO = props.data.metro : METRO = '&';

    navigate(`../../../../../../../../../sdaem/rooms/${CITY}/${ROOM}/${PRICEFROM}/${PRICEBEFORE}/${BED}/${DISTRICT}/${METRO}`);
  }

  return(
    <div className={style.div}>
      <span className={style.breadcrumb}>
        <Breadcrumb data={`Аренда квартир на сутки в ${(data[0]?.cityOther) ? data[0]?.cityOther : 'Беларуси'}`} />
      </span>
      <div className={style.labelstock}>
        {
        (props.data.rooms.length > 0) &&
          props.data.rooms.map((item: string, index: number) => (
            <span key={index} className={style.label} onClick={handleClick.bind(this, 'rooms', index)}>
              {item} -комнатные
              <Icon icon='cross' classes={style.icon} />
            </span>
          ))
        }
        {
        (props.data.bed.length > 0) &&
          props.data.bed.map((item: string, index: number) => (
            <span key={index} className={style.label} onClick={handleClick.bind(this, 'bed', index)}>
              {item} -спальное место
              <Icon icon='cross' classes={style.icon} />
            </span>
          ))
        }
        {
        (props.data.district.length > 0) &&
          props.data.district.map((item: string, index: number) => (
            <span key={index} className={style.label} onClick={handleClick.bind(this, 'district', index)}>
              {item} -p.
              <Icon icon='cross' classes={style.icon} />
            </span>
          ))
        }
        {
        (props.data.metro.length > 0) &&
          props.data.metro.map((item: string, index: number) => (
            <span key={index} className={style.label} onClick={handleClick.bind(this, 'metro', index)}>
              {item} -м.
              <Icon icon='cross' classes={style.icon} />
            </span>
          ))
        }
      </div>
    </div>
  )
}

export default Info;