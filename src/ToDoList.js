import React from "react";
import "./ToDoList.css"

function ToDoList(props){
    return <ul type="none" className="ToDoList">{props.children}</ul>;
}

export {ToDoList};