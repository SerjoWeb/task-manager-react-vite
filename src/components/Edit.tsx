import Input from "./Input";
import Header from "./Header";

import { useState, useEffect } from "react";
import { ToDoTask, toDoStore } from "../store/todoStore";

const ListHeader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <p className="text-xl font-semibold text-white text-shadow-md shadow-black">Edit Task</p>
    </div>
  );
};

const Edit = () => {
  const { editingTask, setEditingTask, editTask, removeTask } = toDoStore();

  const [newTaskName, setNewTaskName] = useState<string>(editingTask ? editingTask.name : "");

  const onEditTaskHandler = (): void => {
    if (editingTask) {
      const updatedTask: ToDoTask = {
        ...editingTask,
        name: newTaskName
      };
  
      editTask(updatedTask);
      setEditingTask(undefined);
      setNewTaskName("");
    }
  };

  const onRemoveTaskHandler = (): void => {
    if (editingTask) {
      removeTask(editingTask);
      setEditingTask(undefined);
      setNewTaskName("");
    }
  }; 

  useEffect(() => {
    if (editingTask) {
      setNewTaskName(editingTask.name);
    }
  }, [editingTask]);

  return (
    <div className="flex flex-col h-full">
      <Header body={<ListHeader />} />

      <div className="w-full flex-1 flex flex-col p-5">
        <div className="flex-1">
          <Input
            placeholder="Enter task desc"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
        </div>

        <div className="flex gap-x-2">
          <button
            type="button"
            className="border border-red-border bg-red flex justify-center items-center h-[61px] rounded-md w-full max-w-[121px] disabled:opacity-75"
            disabled={!editingTask}
            onClick={onRemoveTaskHandler}
          >
            <span className="text-lg text-white text-shadow-md shadow-black">Delete</span>
          </button>

          <button
            type="button"
            className="border bg-blue-button border-blue-dark flex justify-center items-center h-[61px] w-full rounded-md disabled:opacity-75"
            disabled={!editingTask || newTaskName === ""}
            onClick={onEditTaskHandler}
          >
            <span className="text-lg text-white text-shadow-md shadow-black">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
