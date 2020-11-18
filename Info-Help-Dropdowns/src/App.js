import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  // const [index, setIndex] = usestate(0);
  // const {id, title, info} = data[index];

  return (
    <main>
      <div className="container">
          <h3>Q/A about log in?</h3>
        <section className="info">
          {data.map((question) => <SingleQuestion key={question.id} className="question" {...question}/>)}
        </section>
      </div>
    </main>
  )
}

export default App;
