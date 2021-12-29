import './ClickCounter.css';
import { useState } from 'react';

function ClickCounter({ text }) {
  const [clickCount, setClickCount] = useState(0)

  const addOne = () => {
    setClickCount(clickCount + 1)
  }
  return (
    <button onClick={() => addOne()}>
      {text}: {clickCount}
    </button>
  )
}

export default ClickCounter
