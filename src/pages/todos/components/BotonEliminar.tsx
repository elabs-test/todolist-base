import { TrashSimple } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../../redux/slices/todoSlice";

interface Props {
  id: number;
}

function BotonEliminar({ id }: Props) {
  const dispatch = useDispatch()

    const handleRemoveItem = () => {
    dispatch(removeTodo(id))
  };

  return (
    <button
      data-testId="botonEliminar"
      onClick={handleRemoveItem}
      className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:bg-red"
    >
      <TrashSimple size={23} />
    </button>
  );
}

export default BotonEliminar;
