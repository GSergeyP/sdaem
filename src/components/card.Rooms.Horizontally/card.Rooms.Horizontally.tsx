import { memo, useState } from 'react';
import Modal from './_modal/modal';
import Img from '../img';
//import Icon from '../icon';
import Tags from '../tags';
import cities from '../../json/cities.json';
import clsx from 'clsx';
import style from './card.Rooms.Horizontally.module.scss';

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
          <Tags type='div' data={[{classes: style.left}]}>
            <Img data={[{classes: style.img, src: item.img, alt: 'SDAEM.BY'}]} />
          </Tags>
          <Tags type='div' data={[{classes: style.right}]}>
            <Tags type='h3' data={[{classes: style.h3, title:`${item.room}-комн. апартаменты - ${item.address[0].district}`}]} />
            <Tags 
              type='h4' 
              data={[{
                classes: style.h4,
                title: `${city(item.id)}, ${item.address[0].streetType}. ${item.address[0].streetName}, д. ${item.address[0].houseNumber}`,
                icon: {
                  icon: 'sign',
                  classes: style['h4-icon'],
                },
                position: 'left',
              }]}
            />
            <Tags type='span' data={[{classes: style.price, title: `${item.price} BYN`}]}>
              <Tags type='span' data={[{classes: style['price-item'], title: 'за сутки'}]} />
            </Tags>
            <Tags type='div' data={[{classes: style.info}]}>
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
              {
              (item.id === 5) && 
                <Tags 
                  type='span' 
                  data={[{
                    classes: style.metro, 
                    title: item.address[0].metro,
                    icon: {
                      icon: 'metro',
                      classes: style['metro-icon'],
                    },
                    position: 'left',
                  }]} 
                />
              }
              <Tags type='span' data={[{classes: style.district, title: 'район:'}]} >
                <span>&nbsp;{item.address[0].district}</span>
              </Tags>
            </Tags>
            <Tags 
              type='p' 
              data={[{
                classes: style.p, 
                title: (item.msg.length > 175 ) ? (item.msg.substring(0, 175) + '...') : (item.msg)
              }]} 
            />
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
          </Tags>
          {(modal.show && modal.data.id_room === item.id_room) && <Modal data={modal} onClick={handleclickClose} />}
        </div>
      ))
      }    
    </>
  )
};

export default memo(CardRoomsVertical);