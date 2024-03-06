import { NewButton } from "./new-button";
import { List } from "./list";

const Sidebar = () => {
  return (
    <div className="fixed flex flex-col left-0 z-[1] bg-blue-950 h-full w-[60px] p-3 gap-y-4 text-white">
      <List/>
      <NewButton/>
    </div>
  );
};

export default Sidebar;
