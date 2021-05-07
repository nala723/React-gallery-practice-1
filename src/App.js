import {React, useEffect, useState} from "react";
import "./styles.css";

const dummys = [
  { id: '1', imageName: 'img1.jpeg', tag: 'free'},
  { id: '2', imageName: 'img2.jpeg', tag: 'new'},
  { id: '3', imageName: 'img3.jpeg', tag: 'pro'},
  { id: '4', imageName: 'img4.jpeg', tag: 'new'},
  { id: '5', imageName: 'img5.jpeg', tag: 'pro'}
 ]
 
const App = () => {
  const [tag, setTag] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);
//tag로 이미지를 선택, filtered가 필터링하도록
  useEffect(
     () => { 
       tag === 'all' ? setFilteredImages(dummys) : setFilteredImages(dummys.filter((el)=> el.tag === tag))
     },
     [tag]

  )

  
  return (
    <>
     <div className="App" handleSetTag={setTag}>
       <div className="tags">
          <TagButton name="all" handleSetTag={setTag} tagActive={tag==="all" ? true : false}/>
          <TagButton name="new" handleSetTag={setTag} tagActive={tag==="new"? true : false}/>
          <TagButton name="free" handleSetTag={setTag} tagActive={tag==="free"? true : false}/>
          <TagButton name="pro" handleSetTag={setTag} tagActive={tag==="pro"? true : false}/>
       </div> 
         <div className="container">
          {filteredImages.map(image => 
              <div key={image.id} className="image-card">
                <img src={`/dummys/${dummys.imageName}`} alt="" className="image"/>
                {image.imageName + SelectEmj(image)}
                  </div>)
           }
        </div>
     </div>
    </>
  );
};

const TagButton = ({name, handleSetTag, tagActive}) =>{
  return <button className={`tag ${tagActive ? 'active' : null}`} 
         onClick = {()=> handleSetTag(name)}>{name.toUpperCase()}{' '}</button>;
};
const SelectEmj = (image) => {
  if (image.tag === "new"){
    return "😎"
  }
  if (image.tag === "free"){
    return "😘"
  }
  if (image.tag === "pro"){
    return "👏!!"
  };
} 

export default App;
