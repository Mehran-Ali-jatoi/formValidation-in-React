import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setcount]=useState(1)
  const Addvalue = ()=>{
    console.log(count,Math.random());
    if (count <20) {
      
      setcount(count+ 1 )
    }else{
      return;
    }
  }
  const removevalue =()=>{
    if (count > 0) {
      
      setcount(count - 1 )
    }else {
      return;
    }

  }
  return (
    <>
    <h1>Counter Using react + vite</h1>
    <h2>counter Value : {count}</h2>
    <button onClick={Addvalue}>Add value</button>
    <br />
    <button onClick={removevalue}>remove value {count}</button>
    </>
  )
}

export default App
