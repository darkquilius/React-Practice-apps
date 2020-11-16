import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if(newIndex > people.length -1){
        return 0}
      else{ return newIndex}
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if(newIndex < 0){
        return people.length - 1}
      else{return newIndex}
    })
  }

  const surpriseMe = () => {
    let random = Math.floor(Math.random() * 4)
    if(random === index){
      if(random === 3){
        random = 0
      }
      else{random = index + 1}
    }
    setIndex(random)
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} className="person-img"></img>
        <span className="quote-icon"><FaQuoteRight /></span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => prevPerson()}>
          <FaChevronLeft className="prev-btn"/>
        </button>
        <button className="prev-btn" onClick={() => nextPerson()}>
         <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => surpriseMe()}>Surprise Me!!</button>
    </article>
  )
};

export default Review;
