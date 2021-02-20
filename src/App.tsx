import React, { useRef } from 'react';
import './App.scss';



function App() {
  const myFood = useRef();

  return (

    <div className="App">


      <div className='main'>

        <div className="stage">
          <div className='snake'></div>
          <div className='food'></div>
        </div>
        <div className="score-panel">
          <div>SCORE:<span>1</span></div>
          <div>LEVEL:<span>3</span></div>
        </div>
      </div>
    </div>
  );
}

export default App;
