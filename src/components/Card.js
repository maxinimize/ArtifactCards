import React from 'react';
import Tooltip from './Tooltip';

const Card = ({ large_image, mini_image, name, text, type, rarity, color, id }) => {

  if (id !== undefined) {
    return (
      <Tooltip large_image={large_image} text={text}>
        <div id={`${color}`} className="card ma4 w5 tc bg-white br2 custom--shadow-2 custom--shadow-hover-8 custom--o-95 z-1">
          <div className="header relative pt3 br2 br--top z-0">
            <div className="photo relative h4 w4 bw2 custom--b--primary bg-center cover" title={name} style={{backgroundImage: 'url("' + mini_image + '")'} }></div>
            <div className="personId absolute top-0 right-0 fw4 o-0">#{id}</div>
            <h2 className="name mt3 mb1 ph3 w-100 flex items-center justify-center" style={{color: `${color}`}}>{name}</h2>
            <div className="title ph3 w-100 flex items-center justify-center">{type}</div>
          </div>

          <div className="main pv2 ph3 flex items-center justify-center">
            {!id ? '' :
              <a href={`https://steamcommunity.com/market/listings/583950/1${id}`} className="w2 h2 ma2" title="Website/Portfolio" target="_blank" rel="noopener noreferrer">
                <svg className="w2 h2" viewBox="0 0 24 24">
                  <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </a>
            }
          </div>

          <div className="footer pv2 ph3 flex items-center justify-center br2 br--bottom"> 
            { rarity } 
          </div>
        </div>
      </Tooltip>
    );
  }

}

export default Card