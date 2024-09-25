import React, { useState } from "react";

function ToDoItem(props) {
  return (
    <div onClick={updateStyle}>
      <li>{props.item}</li>
    </div>
  );
}

export default ToDoItem;
