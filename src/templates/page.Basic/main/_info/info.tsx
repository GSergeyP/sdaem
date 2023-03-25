import Tags from '../../../../components/tags';
import Icon from '../../../../components/icon';
import Rooms from './__rooms/rooms';
import Link from './__link/link';
import Other from './__other/other';
import { house, bathhouse, car } from './__other/other.Const';
import style from './info.module.scss';

const Info = () => {
  return(
    <>
      <div className={style.container}>
        <Tags type='div' classes={style['container-top']}>
          <Rooms />
          <Other 
            classes={style['container-top__right']} 
            listing={house} 
            titleH4='СНЯТЬ КОТТЕДЖ НА ПРАЗДНИК'
            titleH2='Коттеджи и усадьбы'
          />
        </Tags>
        <Tags type='div' classes={style['container-bottom']}>
          <Other 
            classes={style['container-bottom__left']} 
            listing={bathhouse}
            titleH4='ПОПАРИТЬСЯ В БАНЕ С ДРУЗЬЯМИ'
            titleH2='Бани и сауны' 
          />
          <Other 
            classes={style['container-bottom__right']} 
            listing={car} 
            titleH4='ЕСЛИ СРОЧНО НУЖНА МАШИНА'
            titleH2='Авто на прокат' 
          />
        </Tags>
        <Tags type='div' classes={style['container-right']}>
          <Link />
        </Tags>
      </div>
      <div className={style['container-footer']}>
        <Icon icon='points' classes={style.icon} />
      </div>
    </>
  )
};

export default Info;