import React from 'react';
import './PopCard.css';

const PopCard = ({ large_image, text }) =>{
  return(
    <div className="card">
      <div className="cardheader">
        <img alt='missing' src={`${large_image}`}/> 
      </div>
      <div className="content">
        <div dangerouslySetInnerHTML={{__html: text}} />
      </div>
    </div>
  );
}

export default PopCard