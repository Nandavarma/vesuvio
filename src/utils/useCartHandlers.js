import { useDispatch } from "react-redux";
import appStore from "./Redux utils/appStore";
import { addItem, decreaseItem, clearItems } from "./Redux utils/cartSlice";
const useCartHandlers = () => {
  const dispatch = useDispatch(appStore);

  const handleIncreament = (id, item) => {
    dispatch(addItem({ id, item }));
  };
  const handleDecreament = (id) => {
    dispatch(decreaseItem({ id }));
  };
  const handleClearCart = () => {
    dispatch(clearItems());
  };
  return { handleIncreament, handleDecreament, handleClearCart };
};
export default useCartHandlers;
