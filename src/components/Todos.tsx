import React,{useEffect, useState} from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import axios from 'axios';
export interface ITodos{
    id:number;
    title:string;
    status:boolean
  }

const Todos = () => {
  const [todos, settodos] = useState<ITodos[]>([]);
  const handleAdd=(title:string)=>
  {
    const payload={
        title,
        status:false,
        id:todos.length+1
    }
    axios.post("http://localhost:8080/todos",payload)
    .then(getTodos);
  }

  const getTodos=()=>
  {
    axios.get("http://localhost:8080/todos")
    .then(({data}:{data:ITodos[]})=>{settodos(data)});
  }
  useEffect(()=>
  {
    getTodos();
  },[]);
  return (
    <div>
        <h2>Todos</h2>
        <TodoInput onClick={handleAdd}/>
        {
            todos.length&&
            todos.map((el)=>
            (
                <TodoItem key={el.id}{...el}/>
            ))
        }
       
    </div>
  )
}

export default Todos