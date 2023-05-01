import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import ForgotPassword from "../pages/forgot-password/ForgotPassword";
import ResetPassword from "../pages/reset-password/ResetPassword";
import Profile from "../pages/profile/Profile";
import Layout from "../Layout/Layout";
import Orders from "../pages/orders/Orders";
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../services/store/asyncActions";
import { clearIngredient } from "../../services/store/IngredientDetailsReducer/actions";
import {
  getIngridients,
  getIsLoading,
  getIngredientsError,
} from "../../services/store/BurgerIngredientsReducer/selectors";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const error = useSelector(getIngredientsError);
  const isLoading = useSelector(getIsLoading);
  const dasda = useSelector(getIngridients);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const background = location.state && location.state.background;
  const handlerModelClose = (e) => {
    e.stopPropagation();
    if (
      e.target.dataset.overlay === "overlay" ||
      e.currentTarget.type === "button" ||
      e.key === "Escape"
    ) {
      navigate("/");
      dispatch(clearIngredient());
    }
  };
  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (!isLoading && error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="profile" element={<Profile />} />
          <Route path="order" element={<Orders />} />
          <Route
            path="/ingredients/:ingredientId"
            element={<IngredientDetails ingredientsData={dasda} />}
          />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route
            path="/ingredients/:ingredientId"
            element={
              <Modal handlerModelClose={handlerModelClose}>
                <IngredientDetails ingredientsData={dasda} />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
