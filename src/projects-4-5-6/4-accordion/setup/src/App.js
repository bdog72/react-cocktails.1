//
//

import React, { useState } from 'react';
import './index.scss';

import data from './data';
import SingleQuestion from './Question';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [questions, setQuestions] = useState(data);

  // console.log(questions);

  // const bozo = data.map((q) => {
  //   return q.title;
  // });

  // console.log(bozo);

  return (
    <div className='app__accordion--main-container'>
      <main>
        <div className='container'>
          <h3>Questions and answers about logging</h3>
          <section className='info'>
            {questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />;
            })}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
