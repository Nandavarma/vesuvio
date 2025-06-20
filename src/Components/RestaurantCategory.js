import { BsCaretDownFill } from "react-icons/bs";
import ItemList from "./ItemList";
const RestaurantCategory = (props) => {
  const { index, title, itemCards, showIndex, handleToggle } = props;
  const isOpen = showIndex === index;
  return (
    <div className="w-full m-auto bg-gray-50 p-4 shadow-xl dark:shadow-gray-100 dark:shadow-md my-3 dark:bg-slate-900">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => {
          handleToggle(index);
        }}
      >
        <span className="font-bold text-xl">
          {title} ({itemCards.length})
        </span>
        <span className="text-xl">
          <BsCaretDownFill />
        </span>
      </div>
      {isOpen && <ItemList data={itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
