import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { changeIngredient, deleteIngredient } from "../../../services/actions/BurgerConstructorReducer";

const DragCard = ({ styles, item, id, index }) => {

    
  const cards = useSelector(
    (state) => state.BurgerConstructorReducer.ingredients
  );
  const dispatch = useDispatch();

  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex];
    const newCards = [...cards];
    newCards.splice(dragIndex, 1);
    newCards.splice(hoverIndex, 0, dragCard);
    console.log(newCards);
    dispatch(changeIngredient(newCards));
  };

  const ref = React.useRef(null);
  const [, refDrop] = useDrop({
    accept: "card",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, refDrag] = useDrag({
    type: "card",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  refDrag(refDrop(ref));

  const handleClose = (item) => {
    console.log(item);
    }

  return (
    <li className={styles} ref={ref} style={{ opacity: opacity }}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        extraClass="noSelect"
        handleClose={() => handleClose(item)}
      />
    </li>
  );
};
export default DragCard;