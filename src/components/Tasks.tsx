import React from "react";

import { toDoStore } from "../store/todoStore";
import Task from "./Task";

const Tasks = () => {
  const { tasks } = toDoStore();
  
  return (
    <div className="h-full flex flex-col gap-y-4 p-4">
      {!tasks.length ? (
        <p>There are no available tasks yet!</p>
      ) : (
        <React.Fragment>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </React.Fragment>
      )}
    </div>
  );
};

export default Tasks;
