import nav from '../json/nav.json';
import { attributeTags } from '../components/links';

const navData = (min: number, max: number, classes: string, icon: attributeTags) => {  /////////////////////////////
  const NAV = nav.slice(min)
  const filtering = (id: number) => {
    return icon.filter((item: attributeTags) => (item.id === id))
  }
  
  let content: object[] = [];
  NAV.map((item: attributeTags) => 
    (min <= max) && 
    (
      (filtering(item.id).length > 0) ? content.push({
        id: item.id, 
        title: item.title, 
        url: item.url, 
        classes: classes, 
        icon: filtering(item.id)[0],
        position: filtering(item.id)[0].position,
      }) :
      content.push({id: item.id, title: item.title, url: item.url, classes: classes}), 
      min++
    ))
return content;
}

export { navData };