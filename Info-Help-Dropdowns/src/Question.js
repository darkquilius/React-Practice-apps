import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info}) => {

  const [openToggle, setOpenToggle] = useState(false);

  const changeOpenToggle = () => {
    setOpenToggle(!openToggle)
  }

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn"  onClick={() => changeOpenToggle()}>
          {openToggle? <AiOutlineMinus />: <AiOutlinePlus />}
        </button>
      </header>
      {openToggle? <p>{info}</p>: <div></div>}
    </article>
  )
};

export default Question;
