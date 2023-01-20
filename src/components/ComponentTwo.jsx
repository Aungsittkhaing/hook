import { useEffect } from "react";

const ComponentTwo = () => {
  return (
    useEffect(()=>{
        console.log("I am mounted component two");
        return()=>{
            console.log("I am unmounted component two");
        }
    })
  )
}

export default ComponentTwo