import Edit from "./Edit";
import List from "./List";

const Todo = () => {
  return (
    <div className="shadow-md bg-gray flex h-full relative overflow-hidden">
      <div className="w-[414px] h-full relative overflow-hidden z-10 shadow-lg"><List /></div>
      <div className="w-[635px] h-full relative overflow-hidden z-0"><Edit /></div>
    </div>
  );
};

export default Todo;
