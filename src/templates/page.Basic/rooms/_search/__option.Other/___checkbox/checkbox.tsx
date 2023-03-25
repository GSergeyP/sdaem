import { useEffect, useState } from 'react';
import { checkboxData } from './checkbox.Const';
import style from './checkbox.module.scss';


interface property {
  gasStove: boolean,
  oven: boolean,
  coffeeMaker: boolean,
  microwave: boolean,
  dishes: boolean,
  dishwasher: boolean,
  fridge: boolean,
  playground: boolean,
  school: boolean,
  kindergarten: boolean,
  shop: boolean,
  cafe: boolean,
  [key: string]: any
}

const Checkbox = (props: any) => {  ///////////////////////////////////////
  const [checked, setChecked] = useState<property>({
                                                    gasStove: false,
                                                    oven: false,
                                                    coffeeMaker: false,
                                                    microwave: false,
                                                    dishes: false,
                                                    dishwasher: false,
                                                    fridge: false,
                                                    playground: false,
                                                    school: false,
                                                    kindergarten: false,
                                                    shop: false,
                                                    cafe: false
                                                  });
  useEffect(() => {
    props.sendToParent(checked)
  }, [props, checked]);
  
  return(
    <span className={style['span-checkbox']}>
      {
        checkboxData.map((item: {[key: string]: any }, index: number) => (
          <label key={index} htmlFor={item.id} className={style.label}>
            <input
              type='checkbox'
              className={style.checkbox}
              id={item.id}
              value={checked[item.id]}
              onChange={() => setChecked((prevState) => ({...prevState, [item.id]: !checked[item.id]}))}
            />
            <span>{item.title}</span>
          </label>
        ))
      }
    </span>
  )
};

export default Checkbox;