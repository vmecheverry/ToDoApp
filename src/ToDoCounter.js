import React from "react";
import "./ToDoCounter.css"

function ToDoCounter({completado,total, name}) {
  return (    
      <p className="ToDoCounter">{name}, Has completado {completado} de {total}</p>
  );
}

export {ToDoCounter};
