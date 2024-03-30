import { create } from "zustand";

export interface ToDoTask {
  id: number;
  name: string;
  finished: boolean;
}

export interface ToDoStoreProps {
  tasks: ToDoTask[];
  editingTask: ToDoTask | undefined;
  setEditingTask: (task: ToDoTask | undefined) => void;
  addTask: (task: ToDoTask) => void;
  editTask: (task: ToDoTask) => void;
  removeTask: (task: ToDoTask) => void;
}

export const toDoStore = create<ToDoStoreProps>()((set) => ({
  tasks: [],
  editingTask: undefined,
  setEditingTask: (task: ToDoTask | undefined) => set(() => ({ editingTask: task })),
  addTask: (task: ToDoTask) => set((store) => ({ tasks: [...store.tasks, task] })),
  editTask: (task: ToDoTask) => set((state) => ({
    tasks: state.tasks.map((statetask) => {
      if (statetask.id === task.id) {
        statetask = { ...statetask, ...task };
      }

      return statetask;
    })
  })),
  removeTask: (task: ToDoTask) => set((state) => ({
    tasks: state.tasks.filter((statetask) => statetask.id !== task.id)
  }))
}));
