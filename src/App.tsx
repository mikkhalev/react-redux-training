import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

function App() {

    const dispatch = useDispatch()
    const num:number = useSelector((state:any) => state.counter.num)
    const count:number = useSelector((state:any) => state.counter.input)
    const text:string = useSelector((state:any) => state.text.text)
    const setIncrement = (count:number) => {
        dispatch({type: "PLUS", payload: count})
    }
    const setDecrement = (count:number) => {
        dispatch({type: "MINUS", payload: count})
    }
  return (
    <div className="App">
      <h1>
          {num}
      </h1>
      <button onClick={() => setIncrement(count)}>
          PLUS
      </button>
      <button onClick={() => setDecrement(count)}>
          MINUS
      </button>
      <input value={count} onChange={(e) => dispatch({type: "SET_VALUE", payload: Number(e.target.value)})}/>
        <h1>
            {text}
        </h1>
        <input type="text" value={text} onChange={(e) => dispatch({type: "SET_TEXT", payload: e.target.value})}/>
    </div>
  );
}

export default App;
