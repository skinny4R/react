import React from "react";
import Task from "../Task/Task";
import {useSelector} from "react-redux"
import "./ListTask.css"
const ListTask = () => {
  const data = useSelector((state)=>state.tasks)
  console.log(data)
  return (
    <div>
      {data.tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      
    </div>
  );
};

export default ListTask;