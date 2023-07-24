import React from "react";
import styles from "./feed.module.css";
import { Order } from "../../order/Order";
import { useSelector } from "react-redux";
import {
  getWsAllIngridients,
  getWsAllIngridientsTotal,
  getWsAllIngridientsTotalToday,
} from "../../../services/store/wsOrdersAll/selectors";
import { websocketConnect } from "../../../services/store/wsOrdersAll/actions";
import { useDispatch } from "react-redux";
import { WEBSOCKET_CLOSE } from "../../../services/store/wsOrdersAll/reducer2";

const Feed = () => {
  const dispatch = useDispatch();
  React.useEffect(()=> {
    dispatch(websocketConnect("wss://norma.nomoreparties.space/orders/all"));
    return () => {
      dispatch({ type: WEBSOCKET_CLOSE})
    }
  },[dispatch])

  const getIngredients = useSelector(getWsAllIngridients);
  const getIngredientsTotal = useSelector(getWsAllIngridientsTotal);
  const getIngredientsTotalToday = useSelector(getWsAllIngridientsTotalToday);

  // let a = {};
  // let imageArr = [];
  // let generalPriceList = 0;
  // getIngredients.forEach((element) => {


  //     a[element] = (a[element] || 0) + 1;
 

  // });
  // console.log(a);

  // getIngredients.forEach((item) => {
  //   if (data.ingredients.includes(item._id)) {
  //     let obj = {};
  //     obj.image = item.image_mobile;
  //     obj.name = item.name;
  //     obj.price = item.price;
  //     obj._id = item._id;
  //     for (let key in a) {
  //       if (key === item._id) {
  //         obj.numberOfComponents = a[key];
  //       }
  //     }
  //     imageArr.push(obj);
  //   }
  // });
  // imageArr.forEach((item) => {
  //   generalPriceList += item.price * item.numberOfComponents;
  // });

  // const orderDetailsPopup = {
  //   ...data,
  //   generalPriceList,
  //   ingredientsData: imageArr,
  // };


  const done = getIngredients.filter((item) => {
    return item.status === "done";
  });
  const notDone = getIngredients.filter((item) => {
    return !item.status === "done";
  });

  return (
    <div className={styles.wrapper}>
      <main className={styles.feedMain}>
        <h1 className={`text text_type_main-large mt-10 mb-5 ${styles.title}`}>
          Лента заказов
        </h1>
        <section className={`custom-scroll ${styles.feedInfoSectionLeft}`}>
          {getIngredients.slice(0, 10).map((item) => {
            return <Order key={item._id} data={item} />;
          })}
        </section>
        <section className={styles.feedInfoSectionRight}>
          <div className={styles.ulContainer}>
            <h3
              className={`text text_type_main-medium mb-4 ${styles.ulToWorkTitle}`}
            >
              В работе:
            </h3>

            <div className={styles.leftDiv}>
              <ul className={`text text_type_digits-default ${styles.readu}`}>
                {done.map((item, index) => {
                  return (
                    index < 10 && (
                      <li className={styles.readuLI} key={item._id}>
                        {item.number}
                      </li>
                    )
                  );
                })}
              </ul>
              <ul className={`text text_type_digits-default ${styles.readu}`}>
                {done.map((item, index) => {
                  return (
                    index > 9 &&
                    index < 20 && (
                      <li className={styles.readuLI} key={item._id}>
                        {item.number}
                      </li>
                    )
                  );
                })}
              </ul>
              <ul className={`text text_type_digits-default ${styles.readu}`}>
                {done.map((item, index) => {
                  return (
                    index > 19 &&
                    index < 30 && (
                      <li className={styles.readuLI} key={item._id}>
                        {item.number}
                      </li>
                    )
                  );
                })}
              </ul>
              <ul className={`text text_type_digits-default ${styles.readu}`}>
                {done.map((item, index) => {
                  return (
                    index > 29 &&
                    index < 40 && (
                      <li className={styles.readuLI} key={item._id}>
                        {item.number}
                      </li>
                    )
                  );
                })}
              </ul>
              <ul className={`text text_type_digits-default ${styles.readu}`}>
                {done.map((item, index) => {
                  return (
                    index > 39 &&
                    index < 50 && (
                      <li className={styles.readuLI} key={item._id}>
                        {item.number}
                      </li>
                    )
                  );
                })}
              </ul>
            </div>

            <h3
              className={`text text_type_main-medium mb-4 ${styles.ulReaduTitle}`}
            >
              Готовы:
            </h3>
            <div className={styles.rightDiv}>
              <ul className={`text text_type_digits-default ${styles.toWork}`}>
                {notDone.map((item, index) => {
                  return (
                    index < 10 && (
                      <li className={styles.readuLI} key={item._id}>
                        {item.number}
                      </li>
                    )
                  );
                })}
              </ul>
              <ul className={`text text_type_digits-default ${styles.toWork}`}>
                {notDone.map((item, index) => {
                  return (
                    index < 10 && (
                      <li className={styles.readuLI} key={item._id}>
                        {item.number}
                      </li>
                    )
                  );
                })}
              </ul>
              <ul className={`text text_type_digits-default ${styles.toWork}`}>
                {notDone.map((item, index) => {
                  return (
                    index < 10 && (
                      <li className={styles.readuLI} key={item._id}>
                        {item.number}
                      </li>
                    )
                  );
                })}
              </ul>
              <ul className={`text text_type_digits-default ${styles.toWork}`}>
                {notDone.map((item, index) => {
                  return (
                    index < 10 && (
                      <li className={styles.readuLI} key={item._id}>
                        {item.number}
                      </li>
                    )
                  );
                })}
              </ul>
              <ul className={`text text_type_digits-default ${styles.toWork}`}>
                {notDone.map((item, index) => {
                  return (
                    index < 10 && (
                      <li className={styles.readuLI} key={item._id}>
                        {item.number}
                      </li>
                    )
                  );
                })}
              </ul>
            </div>
          </div>
          <h3 className="text text_type_main-medium">
            Выполнено за все время:
          </h3>
          <span
            className={`text text_type_digits-large mb-15 ${styles.bigDigits}`}
          >
            {getIngredientsTotal}
          </span>
          <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
          <span className={`text text_type_digits-large ${styles.bigDigits}`}>
            {getIngredientsTotalToday}
          </span>
          {/* </div> */}
        </section>
      </main>
    </div>
  );
};

export { Feed };
