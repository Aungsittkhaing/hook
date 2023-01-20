import { useState, memo } from "react"

const Counter = ({data}) => {
const [count, setCount] = useState(0);

const handleAdd = () => {
    //unsafe state change
    // setCount(count + 1);

    //safe state change
    // setCount((preCount)=>{
    //     console.log(preCount);
    //     return preCount+1;
    // });

    setCount(pre => pre + 1);
}

const handleRemove = () => {
    setCount(pre => pre - 1);
}
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleAdd}>Add
        </button>
        <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default memo(Counter)