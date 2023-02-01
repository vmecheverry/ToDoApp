import React from "react";
import './ToDoSearch.css'

function ToDoSearch({search, setSearch}) {

  
  const onChangeValueSearch = (event) =>{
    setSearch(event.target.value);
  }

  return (    
      <input className="ToDoSearch" placeholder="Cebolla" onChange={onChangeValueSearch} value={search}></input>
  );
}

export {ToDoSearch};
