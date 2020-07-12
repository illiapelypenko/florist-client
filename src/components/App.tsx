import React, { useEffect } from "react";
import { getItems, getTypes, getContacts } from "../redux/actions";
import { State } from "../redux/types";
import Header from "./Header/Header";
import Filter from "./Filter/Filter";
import Flowers from "./Flowers/Flowers";
import Footer from "./Footer/Footer";
import "../stylesheets/main.scss";
import Navbar from "./Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import BasketIcon from "./Basket/BasketIcon";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Basket from "./Basket/Basket";

const App = () => {
  const dispatch = useDispatch();

  const items = useSelector((state: State) => state.items);

  useEffect(() => {
    dispatch(getItems());
    dispatch(getTypes());
    dispatch(getContacts());
  }, []);

  return (
    <Router>
      <div className='app'>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <div className='main'>
              <Filter />
              <Flowers items={items} />
              <BasketIcon />
            </div>
          </Route>
          <Route path='/basket'>
            <Basket />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
