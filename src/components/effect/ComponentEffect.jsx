import { useEffect } from "react"
import { useState } from "react";
import ComponentTwo from "../ComponentTwo";

const ComponentEffect = () => {
    const[count, setCount] = useState(0);
    const[toggle, setToggle] = useState(true);

    const handleClick = () => {
        setCount(pre => pre + 1);
    }
    const handleToggle = () => {
        setToggle(pre => !pre);
    }

    //mounted => componentsMounted
    useEffect(()=>{
        // console.log("you mounted");
    });
    //update
    useEffect(()=>{
        // console.log("update", count);
    });
    //components will update when value was change
    useEffect(()=>{
        // console.log("toggle was changes");
    },[toggle]);
  return (
    <div>
        <p>{count}</p>
        {toggle && <h1>Hello React</h1>}
        {toggle && <ComponentTwo/>}
        <button onClick={handleClick}>Click</button>
        <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}

export default ComponentEffect