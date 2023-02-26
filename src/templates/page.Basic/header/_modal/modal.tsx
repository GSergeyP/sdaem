import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cityData } from '../../../../redux/pageSlice';
import ModalData from '../../../../components/modal.Data';
import cities from '../../../../json/cities.json'
import { classesData, icon} from './modal.Const';
import { RootState } from '../../../../redux/store';

const Modal = () => {
  const dispatch = useDispatch();

  const ID = useSelector((state: RootState) => state.page.id);

  const [active, setActive] = useState(false),
        [cityAsk, setCityAsk ] = useState('Квартиры на сутки');

  const classes = classesData(active);
  
  const isToggleOpen = () => {
    setActive(true);
  }
  ////////////////////////////////////////////////

  const content = useMemo(() => {
    
    const isToggleClose = (id: number, city: string, cityOther: string) => {
      setActive(false);
      localStorage.setItem('city', JSON.stringify([{id: id, city: city, cityOther: cityOther}]));
      setCityAsk(`Квартиры в ${cityOther}`);
      dispatch(cityData([{id: id, city: city}]));
    }

    return cities.map((item: {[key: string]: any}) => ({ 
      title: `Квартиры в ${item.cityOther}`, 
      onClick: isToggleClose.bind(this, item.id, item.city, item.cityOther)
    }));
  }, [dispatch]);
  /////////////////////////////////////////////////

  useEffect(() => {
    const city: string | null = localStorage.getItem('city');

    if((ID && city) || city) {
      let data = JSON.parse(city);
      setCityAsk(`Квартиры в ${data[0].cityOther}`);
      dispatch(cityData([{id: data[0].id, city: data[0].city}]));  
    } 
  },[ID, cityAsk, dispatch]);

  return  <ModalData
            activation={cityAsk}
            classes={classes}
            content={content}
            onClick={isToggleOpen} 
            icon={icon}
            position ='right'    
          /> 
}

export default Modal;