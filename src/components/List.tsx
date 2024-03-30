import Header from "./Header";
import Input from "./Input";
import Tasks from "./Tasks";
import UpdateSunscription from "./UpdateSunscription";

import { ToDoTask, toDoStore } from "../store/todoStore";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const ListHeader = () => {
  return (
    <div className="w-full h-full flex justify-start items-center">
      <div className="flex gap-x-2">
        <div className="h-[50px] w-[50px]">
          <img
            alt="man"
            src="/man.png"
            height={50}
            width={50}
            loading="eager"
          />
        </div>
        <div>
          <p className="text-xs text-white text-shadow-md shadow-black">Hello, John</p>
          <p className="text-gray text-xl font-extralight text-shadow-md shadow-black">What are your plans<br />for today?</p>
        </div>
      </div>
    </div>
  );
};

const List = () => {
  const { tasks, addTask } = toDoStore();

  const [addNewTask, setAddNewTask] = useState<boolean>(false);
  const [newTaskName, setNewTaskName] = useState<string>("");

  const modalRef = useOutsideClick(() => setAddNewTask(false));

  const onAddNewTaskHandler = (): void => {
    const newTask: ToDoTask = {
      id: tasks[tasks.length - 1] ? tasks[tasks.length - 1].id + 1 : 1,
      name: newTaskName,
      finished: false
    };

    addTask(newTask);
    setNewTaskName("");
    setAddNewTask(false);
  };

  return (
    <div className="flex flex-col h-full shadow-md relative">
      <Header body={<ListHeader />} />
      <UpdateSunscription />

      <div className="w-full flex-1">
        <div className="h-full relative overflow-y-auto max-h-[340px]">
          <Tasks />
        </div>
      </div>

      <div className="w-full flex justify-end items-center p-5">
        <button
          type="button"
          className="h-[60px] w-[60px] flex justify-center items-center bg-blue-button border border-blue-dark rounded-full"
          onClick={() => setAddNewTask(!addNewTask)}
        >
          <FaPlus size={18} className="fill-white text-shadow-md shadow-black" />
        </button>
      </div>

      {addNewTask && (
        <div className="fixed top-0 lef-0 h-full w-full bg-black/75 flex justify-center items-center">
          <div className="bg-white p-5 flex flex-col gap-y-2 rounded-md shadow-lg" ref={modalRef}>
            <Input
              placeholder="Enter task desc"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
            />

            <button
              type="button"
              className="border bg-blue-button border-blue-dark flex justify-center items-center disabled:opacity-75 h-[45px] w-[51px] ml-auto rounded-md"
              onClick={onAddNewTaskHandler}
              disabled={newTaskName === ""}
            >
              <span className="text-lg text-white text-shadow-md shadow-black">
                Add
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
