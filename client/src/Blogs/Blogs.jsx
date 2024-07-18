import React, { useContext, useEffect, useState } from 'react'
import Card from '../component/Card/Card'
import './Blogs.css'
import { StoreContext } from '../Context/contextProvider'
import CardComponent from '../component/CardComponent/CardComponent'

const Blogs = () => {
  const {allPost , findAllPost , setLogindata} = useContext(StoreContext);
  const [categorys , setCategorys] = useState("All");

  useEffect(()=>{
    findAllPost();
  },[])
  return (
    <div>
      <div className="category-btns">
        <button onClick={() => setCategorys("All")}>All</button>
        {
          allPost.slice().reverse().map((post, index) => {
          return ( <div key={index}>
                    <button onClick={() => setCategorys(post.category)}>{post.category}</button>
                  </div>
                )
          })
        }
      </div>
      <div className="cards fedIn">
        <Card categorys={categorys}/>
      </div>
    </div>
  )
}

export default Blogs