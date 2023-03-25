import { memo } from 'react';

export interface attributeTags {
  classes?: string,
  src?: string,             
  alt?: string,            
}

const Img = (props: { 
              data: attributeTags[]; 
            }) => {
  return(
    <>
      {
        props.data.map((content, index) => (
          <img key = {index} 
              className = {content.classes}
              src = {content.src}  
              alt = {content.alt} />
          )
        )
      }
    </>
  )
}

export default memo(Img);