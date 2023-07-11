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
import {
  getIngridients,
  getIsLoading,
  getIngredientsError,
} from "../../services/store/BurgerIngredientsReducer/selectors";
import { ProfileForm } from "../profile-form/ProfileForm";
import { isUserChecked } from "../../services/store/authReducer/actions";
import ProtectedRouteElement from "../protected-route-element/ProtectedRouteElement";
import { BASE_URL, fetchWithRefresh, GET_HEADERS } from "../../utils/api";
import { USER_LOGIN_AUTHORIZATION } from "../../services/store/authReducer/reducer";
import { THandlerModelClose } from "../../utils/typeScript";
import { Feed } from "../pages/feed/Feed";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const error = useSelector(getIngredientsError);
  const isLoading = useSelector(getIsLoading);
  const ingredientsData = useSelector(getIngridients);

  const dispatch = useDispatch();

//   React.useEffect(() => {

// const  ws = new WebSocket(`wss://norma.nomoreparties.space/orders/all`);
// ws.onopen = (event) => {
//     console.log("Соединение установлено")
// } 
// ws.onmessage = (event: MessageEvent) => {
//   console.log(JSON.parse(event.data))
// } 
//   },[])

  React.useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      dispatch(isUserChecked(true));
      fetchWithRefresh(`${BASE_URL}/auth/user`, GET_HEADERS)
        .then((res) => {
          dispatch({
            type: USER_LOGIN_AUTHORIZATION,
            payload: res.user,
          });
        })
        .catch((res) => console.log(res));
    } else {
      dispatch(isUserChecked(false));
    }
    dispatch(fetchIngredients() as unknown as any);
  }, [dispatch]);

  const background = location.state && location.state.background;

  const handlerModelClose = (e:THandlerModelClose) => {
    
    e.stopPropagation();
    if (
      e.target.dataset.overlay === "overlay" ||
      e.currentTarget.type === "button"
    ) {
      if(background.pathname === "/feed") {
        navigate("feed");
      }
      if(background.pathname === "/") {
        navigate("/");
      }
      
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
          <Route index element={<ProtectedRouteElement element={<Home />} />} />
          <Route
            path="login"
            element={<ProtectedRouteElement element={<Login />} />}
          />
          <Route
            path="register"
            element={<ProtectedRouteElement element={<Register />} />}
          />
          <Route
            path="forgot-password"
            element={<ProtectedRouteElement element={<ForgotPassword />} />}
          />
          <Route
            path="reset-password"
            element={<ProtectedRouteElement element={<ResetPassword />} />}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                element={<Profile />}
              />
            }
          >
            <Route index element={<ProfileForm />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          <Route
            path="feed"
            element={<ProtectedRouteElement element={<Feed />} />}
          />
          <Route
            path="feed/3"
            element={<ProtectedRouteElement element={<Modal handlerModelClose={handlerModelClose}>
            
          </Modal>} />}
          />
          <Route
            path="/ingredients/:ingredientId"
            element={<IngredientDetails ingredientsData={ingredientsData} />}
          />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route
            path="/ingredients/:ingredientId"
            element={
              <Modal handlerModelClose={handlerModelClose}>
                <IngredientDetails ingredientsData={ingredientsData} />
              </Modal>
            }
          />
           <Route
            path="/feed/3"
            element={
              <Modal handlerModelClose={handlerModelClose}>
          
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
