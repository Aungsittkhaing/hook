import React, { useState } from 'react'
import './One.css'
const ComponentOne = () => {
    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        setToggle((pre) => !pre);
    }

  return (
    <div>
        <h1 className= {toggle ? 'introText' : 'textColor'}>Hello World</h1>
        <button onClick={handleClick}>Color Change</button>
    </div>
  )
}

export default ComponentOne