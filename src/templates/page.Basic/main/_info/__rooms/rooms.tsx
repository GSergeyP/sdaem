import Tags from '../../../../../components/tags';
import Links from '../../../../../components/links';
import { divData, h4Data, h2Data, spanData, linksData } from './rooms.Const';
import { attributeTags } from '../../../../../components/links';
import cities from '../../../../../json/cities.json';                         ////////////////////////////////////

const Rooms = () => {
  return(
    <Tags type='div' data={divData}>
      <Tags type='h4' data={h4Data} />
      <Tags type='h2' data={h2Data} />
      <Tags type='span' data={spanData}>
        {
          cities.map((item: attributeTags, index: number) => (
            <Links 
              key={index} 
              data={linksData}
              title={item.city}
              url={`rooms/${item.id}`} />
          ))
        }
      </Tags>
    </Tags>  
  )

}
export default Rooms;