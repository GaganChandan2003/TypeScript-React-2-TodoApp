import React,{useState} from 'react'


interface IInput{
    onClick:(value:string)=>void;
}
const TodoInput = ({onClick}:IInput) => {
    const [text, settext] = useState("");
    const chageHandler:React.ChangeEventHandler<HTMLInputElement>=(e)=>
    {
        settext(e.target.value)
    }
    const handleAdd:React.MouseEventHandler<HTMLButtonElement>=()=>
    {
        onClick(text);
    }
    
  return (
    <div>
        <input type={text} value={text} onChange={chageHandler} />
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput