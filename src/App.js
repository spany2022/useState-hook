import {useState} from 'react'
import './App.css';

const App = () => {
  const [answer, setAnswer] = useState("Guess Which React Hook is used here?");
  let clickForAnswer = () =>{
    setAnswer("useState");
  }
  return (
    <div>
      <h1>{answer}</h1>
      <button className="btn" onClick={clickForAnswer}>Click me to know the answer</button>
    </div>
  )
}

export default App
