import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
// import { clearIngredient } from "../../services/actions/IngredientDetails";
// import { useEffect } from "react";
// import { getIngredientsData } from "../../utils/api";
import { fetchIngredients } from "../../services/actions/asyncActions";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const {isLoading, error, ingredients} = useSelector((state) => state.BurgerIngredientsReducer)
  const dasda = useSelector((state) => state.BurgerIngredientsReducer.ingredients)
  // console.log(dasda);
  // const params = useParams();
  // console.log(params);
  // const dispatch = useDispatch();
  const [ingredientsData, setIngredientsData] = useState([]);
  
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchIngredients());
    setIngredientsData(dasda)
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
    }

  };

  return (
    
    <>
    {isLoading && <h1>Загрузка...</h1>}
    {!isLoading && error && <h1>{error}</h1>}
    {ingredientsData && 
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
            element={<IngredientDetails ingredientsData={ingredientsData}/>}
          />
        </Route>
      </Routes>
      }
      {background && (
        <Routes>
          <Route
            path="/ingredients/:ingredientId"
            element={
              <Modal handlerModelClose={handlerModelClose}>
                <IngredientDetails ingredientsData={ingredientsData}/>
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
