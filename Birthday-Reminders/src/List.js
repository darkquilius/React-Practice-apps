import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((person) => (
        <article className="person">
        <img src={person.image}></img>
        <div>
        <h3>{person.name}</h3>
        <h5>{person.age}</h5>
        </div>
        </article>
      ))
    }
    </>
  );
};

export default List;
