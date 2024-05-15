import { useState } from "react";
import './counter.css'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(prevCount => prevCount < 100 ? prevCount + 1 : prevCount)
    }

    const decreaseCount = () => {
        setCount(prevCount => prevCount > 0 ? prevCount -1 : prevCount) 
    }
    return (
        <div className="counter-main">
        <h1 className="counter-title">React Counter</h1>
        <h2 className="counter-title">{count}</h2>
        <div className="counter-buttons">
        <button className='incdec-btn' onClick={increaseCount}>Increase<span className="span-btn">+</span></button>
        <button className='incdec-btn' onClick={decreaseCount}>Decrease<span className="span-btn span-decrease">-</span></button>
        </div>
        </div>

    )
}

export default Counter