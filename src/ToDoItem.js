import React from "react";
import "./ToDoItem.css";
import { CgCheckO, CgTrash } from "react-icons/cg";

function ToDoItem({todo}) {
    return (    
        <li className="ToDoItem">
            <span><CgCheckO/></span>
            <p>{todo.text}</p>
            <span><CgTrash/></span>
        </li>
    );
  }

  export {ToDoItem};