import React, { useState } from 'react';

const Tour = (props) => {

  const [showMore, setShowMore] = useState(false)

  return (
    <article className="single-tour">
        <img src={props.image}></img>
        <footer >
          <div className="tour-info">
            <h4>{props.name}</h4>
            <h4 className="tour-price">{props.price}$</h4>
          </div>
          <p>{showMore?`${props.info}  `:`${props.info.substring(0, 200)}...  `} 
            <button onClick={() => {setShowMore(!showMore)}}>{showMore? "Show Less": "Show More"}</button>
          </p>
          <button className="delete-btn" onClick={(e) => {props.removeTour(props.id)}}>Not Interested</button>
        </footer>
    </article>
  )
};

export default Tour;
