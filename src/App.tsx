import React from "react";
import "./App.css";
import AppHeader from "./components/app-header/AppHeader";
import BurgerIngredients from "./components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "./components/burger-constructor/BurgerConstructor";

function App() {
  return (
    <div className="App">
      <header className="header">
        <AppHeader />
      </header>
      <div className="wrapper">
        <main className="main">
          <BurgerIngredients/>
          <BurgerConstructor/>
        </main>
      </div>
    </div>
  );
}

export default App;
