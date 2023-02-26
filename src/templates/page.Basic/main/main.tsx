import Search from './_search/search';
import Info from './_info/info';
import Rooms from './_rooms/rooms';
import Map from './_map/map';
import News from './_news/news';
import style from './main.module.scss';

const Main = () => {
  return(
    <>
      <section className={style.search}><Search /></section>
      <section className={style.info}><Info /></section>
      <section className={style.rooms}><Rooms /></section>
      <section className={style.map} id='map'><Map /></section>
      <section className={style.news}><News /></section>
    </>
  )
};

export default Main;