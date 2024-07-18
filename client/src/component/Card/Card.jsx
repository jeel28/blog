import React, { useContext, useEffect, useState } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import './Card.css';
import Loading from '../Loading/Loading';
import { StoreContext } from '../../Context/contextProvider';

const Card = ({categorys}) => {
  console.log(categorys);

  const {loading , allPost , findAllPost } = useContext(StoreContext);


  useEffect(() => {
  }, [allPost]);

  useEffect(() => {
  }, [findAllPost])
 
  return (
    <>
      <div className='cards-flex'>
        {loading ? (
          <Loading className="loading"/>
        ) : (
          allPost.slice().reverse().map((post, index) => {
            if(categorys === "All" || categorys === post.category){
              return <div key={index}>
              <CardComponent {...post} />
            </div>
            }
        })
        )}
      </div>
    </>
  );
};

export default Card;
