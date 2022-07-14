import React from 'react'
import { ITodos } from './Todos'
const TodoItem = ({id,status,title}:ITodos) => {
  return (
    <div style={{border:"1px solid black",width:"20%",margin:"auto",display:'flex',justifyContent:'space-between',padding:'10px',marginTop:'10px'}}>
        <span>{id}</span>
        <span>{title}</span>
        <span>{status}</span>
    </div>
  )
}

export default TodoItem