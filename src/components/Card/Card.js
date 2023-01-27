import { useState } from 'react'
import './Style.css'

function Card(props) {
  const [counter, setCounter] = useState(0)
  
  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }
  
  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    if(counter == 0){
      setCounter(counter+1)
    }
    setCounter(counter - 1)
  }
  const reset = () => {
    setCounter(0)
  }
  return (
    <div className='card-container'>
        <div className='drink-image-div' style={{backgroundImage: `url(${props.url})`}}>
        </div>
        <div className='card-content'>
            <h2>{props.name}</h2>
            <div>Rs. {props.price}</div>
            <div className='counter-div'>
              <button onClick={handleClick1}>+</button>
              <span>{counter}</span>
              <button onClick={handleClick2}>-</button>
              <button onClick={reset} className='reset-btn'>R</button>
            </div>
        </div>
    </div>
  )
}

export default Card