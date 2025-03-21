import { useState } from 'react'
import Grid from './components/Grid';
import './App.css'

function App() {

  const ledger = Array.from({ length: 90 }, (_, i) => i);
  const [numbers, setNumbers] = useState(Array.from({ length: 90 }, (_, i) => i));
  const [revealedFlags, setRevealedFlags] = useState(Array.from({ length: 90 }, (_, __) => false));
  const [mostRecentNum, setMostRecentNum] = useState(-1);

  const getNextNumber = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    revealedFlags[arr[randomIndex]] = true;
    let result = arr.splice(randomIndex, 1);
    console.log(result);
    setMostRecentNum(result[0] + 1);
    setRevealedFlags(revealedFlags);
    setNumbers(arr);
  }

  const reset = () => {
    setNumbers(ledger);
    setRevealedFlags(Array.from({ length: 90 }, (_, __) => false));
    setMostRecentNum(-1);
  }

  return (
    <div className='max-height'>  
      <span className='header'>
        <button className='hotpink-bg' onClick={reset}>Reset</button>
        {mostRecentNum > 0 && <h2>{mostRecentNum}</h2>}
        <button className='cyan-bg' onClick={() => getNextNumber(numbers)}>Next</button>
      </span> 
      <Grid numbers={ledger} revealedFlags={revealedFlags}></Grid>
    </div>
  )
}

export default App
