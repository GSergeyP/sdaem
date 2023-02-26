import { useState, memo } from 'react';
import clsx from 'clsx';
import Modal from './_modal/modal';
import Img from '../img';
import Icon from '../icon';
import Tags from '../tags';
import cities from '../../json/cities.json';
import style from './card.Rooms.Vertical.module.scss';

const city = (props: number) => {
  const cityCurrent = cities.filter((item: {[key: string]: any}) => item.id === Number(props)); 
  return cityCurrent[0].city;
};

const CardRoomsVertical = (props: {data: object[]}) => {

  const [modal, setModal] = useState<{[key: string]: any}>({data: null, id: null, show: false});

//////////////////////////////
  const handleclickOpen = (data: object, id: string) => {
    setModal(() => ({data: data, id: id, show: true}));
  }

  const handleclickClose = () => {
    setModal(() => ({data: null, id: null, show: false}));
  }
//////////////////////////////

  return(
    <>
      { 
      props.data.map((item: {[key: string]: any}, index: number) => (
        <div key={index} className={style.card}>
          <Tags type='div' data={[{classes: style.head}]}>
            <Img data={[{classes: style.img, src: item.img, alt: 'SDAEM.BY'}]} />
          </Tags>
          <Tags type='div' data={[{classes: style.header}]}>
            <Tags 
              type='span' 
              data={[{classes: style.price, title: `${item.price} BYN`}]}
            >
              <Tags type='span' data={[{classes: style['price-item'], title: 'за сутки'}]} />
            </Tags>
            <Tags 
              type='span' 
              data={[{
                classes: style.beds, 
                title: `${item.beds[0].bed + item.beds[0].bedAdditional} (${item.beds[0].bed}+${item.beds[0].bedAdditional})`,
                icon: {
                  icon: 'user',
                  classes: style['beds-icon'],
                },
                position: 'left',
              }]} 
            />
            <Tags type='span' data={[{classes: style.room, title: `${item.room} комн.`}]} />
            <Tags type='span' data={[{classes: style.square, title: `${item.square} м²`}]} />
          </Tags>
          <Tags type='div' data={[{classes: style.body}]}>
            <Tags 
              type='h3' 
              data={[{
                classes: style['h3-top'], 
                title: `${city(item.id)}, ${item.address[0].streetType}. ${item.address[0].streetName}, д. ${item.address[0].houseNumber}`,
                icon: {
                  icon: 'sign',
                  classes: style['h3-top__icon'],
                },
                position: 'left',
              }]}
            />
            <h3 className={style['h3-bottom']}>
              {
              (item.address[0].metro !== 'нет') &&
              (<>
                <Icon icon='metro' classes={clsx(style['h3-bottom__icon'], style.item1)} />
                {item.address[0].metro} &nbsp;&nbsp;&nbsp;
              </>)
              }
              <Icon icon='point' classes={clsx(style['h3-bottom__icon'], style.item2)} />
              {item.address[0].district}
            </h3>
            <Tags 
              type='p' 
              data={[{
                classes: style.p, 
                title: (item.msg.length > 175 ) ? (item.msg.substring(0, 175) + '...') : (item.msg)
              }]} 
            />
          </Tags>
          <Tags type='div' data={[{classes: style.footer}]}>
            <Tags 
              type='button' 
              data={[{
                id: `id${item.id_room}cardRooms`,
                classes: clsx(style.button, style.item1), 
                title: 'Контакты',
                icon:{
                  icon: 'cellphone',
                  classes: style['button-icon'],
                },
                position: 'left',
                onClick: handleclickOpen.bind(this, item, `id${item.id_room}cardRooms`), 
              },
              {
                classes: clsx(style.button, style.item2), 
                title: 'Подробнее',
              }]}
            />
          </Tags>
          {(modal.show && modal.data.id_room === item.id_room) && <Modal data={modal} onClick={handleclickClose} />}
        </div>
      ))
      }
      
    </>
  )
};

export default memo(CardRoomsVertical);