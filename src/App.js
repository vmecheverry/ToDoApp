import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import {Box} from './Box';
import {ToDoList } from './ToDoList';
import { ToDoItem } from "./ToDoItem";

function App() {

  const todos =[
    {text: "Tarea1", completed:false},
    {text: "Tarea2", completed:false},
    {text: "Tarea3", completed:false},
    {text: "Tarea4", completed:false},
    {text: "Tarea5", completed:false},
    {text: "Tarea6", completed:false},
    {text: "Tarea7", completed:false},
    {text: "Tarea8", completed:false},
    {text: "Tarea9", completed:false},
    {text: "Tarea10", completed:false},
  ];

const completado =5;
const total =10;
const name = "Marcela";

const [search, setSearch]=React.useState('');



  return (
    <React.Fragment>
      <ToDoCounter completado={completado} total={total} name={name}/>
      <ToDoSearch search={search} setSearch={setSearch}/>
      <ToDoList>
        {todos.map(todo=>{
            return <ToDoItem todo = {todo} key={todo.text}/>
        })}

      </ToDoList>
      <Box search={search}/>
    </React.Fragment>
  );
}

export default App;
