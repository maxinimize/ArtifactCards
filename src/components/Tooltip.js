import React from 'react';
import Popup from 'reactjs-popup';
import Popcard from './PopCard';

const Tooltip = ({ children, large_image, text }) => {
  return (
    <Popup trigger={children} position='right center' on='hover'
      contentStyle={{ height: '510px', backgroundColor: '#FFC107'}}>
      <Popcard large_image={large_image} text={text} /> 
    </Popup>
  );
}

export default Tooltip
