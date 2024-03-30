import type { ToDoTask } from "../store/todoStore";

import { FC } from "react";
import { FaCheck } from "react-icons/fa6";
import { toDoStore } from "../store/todoStore";

import cn from "../utils/cn";

interface TaskProps {
  task: ToDoTask;
}

const Task: FC<TaskProps> = ({ task }) => {
  const { editTask, setEditingTask } = toDoStore();
  
  const onToggleTaskHandler = (value: boolean): void => {
    const updatedTask: ToDoTask = {
      ...task,
      finished: value
    };

    editTask(updatedTask);
  };

  const onSetEditTaskHandler = (): void => {
    setEditingTask(task);
  };

  return (
    <div className="bg-white rounded-md p-5 shadow-md flex items-center gap-x-4">
      <button
        type="button"
        className={cn(
          "h-[32px] w-[32px] rounded-full border flex justify-center items-center",
          !task.finished ? "border-blue-dark bg-white" : "border-green-border bg-green-bg"
        )}
        onClick={() => onToggleTaskHandler(!task.finished)}
      >
        {task.finished && (
          <FaCheck className="fill-green-border" />
        )}
      </button>

      <p className={cn(
        "text-xl",
        !task.finished ? "text-blue-dark" : "text-gray-text line-through"
      )}>
        {task.name}
      </p>

      <button
        type="button"
        className="border border-blue-dark bg-white flex justify-center items-center h-[45px] w-[51px] ml-auto rounded-md"
        onClick={onSetEditTaskHandler}
      >
        <span className="text-blue-dark text-xl">
          Edit
        </span>
      </button>
    </div>
  );
};

export default Task;
