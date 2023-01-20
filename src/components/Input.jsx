import { useRef, useState } from "react"

const Input = () => {
    const inputRef = useRef();

    //usestate
    const [text, setText] = useState("");

    //button
    const handleBtn = () => {
        // console.log(inputRef.current.value);
        console.log(text);
    }
    //onchange at input
    const handleChange = (e) =>{
        setText(e.target.value);
    }
  return (
    <div>
        <input value={text} onChange={handleChange} type="text" ref={inputRef}/>
        <button onClick={handleBtn}>Click</button>
    </div>
  )
}

export default Input