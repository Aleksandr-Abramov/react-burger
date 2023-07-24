import React from "react";
import styles from "./order.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { getIngridients } from "../../services/store/BurgerIngredientsReducer/selectors";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { addFeedOrder } from "../../services/store/popupFeedOrderReducer/actions";
import { useDispatch } from "react-redux";


const Order = ({ data }) => {
  const location = useLocation();
  const ingredients = useSelector(getIngridients);
  const dispatch = useDispatch()
  // console.log(data);
  let a = {};
  let imageArr = [];
  let generalPriceList = 0;
  data.ingredients.forEach((element) => {
    a[element] = (a[element] || 0) + 1;
  });

  ingredients.forEach((item) => {
    if (data.ingredients.includes(item._id)) {
      let obj = {};
      obj.image = item.image_mobile;
      obj.name = item.name;
      obj.price = item.price;
      obj._id = item._id;
      for (let key in a) {
        if (key === item._id) {
          obj.numberOfComponents = a[key];
        }
      }
      imageArr.push(obj);
    }
  });
  imageArr.forEach((item) => {
    generalPriceList += item.price * item.numberOfComponents;
  });

  const orderDetailsPopup = {
    ...data,
    generalPriceList,
    ingredientsData: imageArr,
  };
  const handlerModalOpen = (item) => {
    dispatch(addFeedOrder(item));
    
  }

  return (
    <Link
      to={`/feed/${data._id}`}
      state={{ background: location, order: orderDetailsPopup }}
      className={styles.orderContainer}
      
    >
      <div onClick={() =>handlerModalOpen(orderDetailsPopup)}>

      
      <h3 className={`text text_type_digits-default mb-6 ${styles.dateH3}`}>
        {`#${data.number}`}
        <span className="text text_type_main-default text_color_inactive">
          {<FormattedDate date={new Date(data.createdAt)} />}
        </span>
      </h3>
      <h2 className="text text_type_main-medium mb-6">{data.name}</h2>
      <div className={styles.imageContainer}>
        <div className={styles.imageContainer2}>
          {imageArr.slice(0, 5).map((item) => {
            return (
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                key={item._id}
                className={styles.img}
              ></div>
            );
          })}
        </div>
        <span className={`text text_type_digits-default ${styles.digitsSpan}`}>
          {`${generalPriceList}`} <CurrencyIcon type="primary" />
        </span>
      </div>
      </div>
    </Link>
  );
};
export { Order };
