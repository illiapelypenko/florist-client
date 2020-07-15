import React, { useEffect } from "react";
import { getItems, getTypes, getContacts } from "../redux/actions";
import { State } from "../redux/types";
import Header from "./Header/Header";
import FilterPanel from "./SidePanels/FilterPanel";
import OrderPanel from "./SidePanels/OrderPanel";
import Flowers from "./Flowers/Flowers";
import Footer from "./Footer/Footer";
import "../stylesheets/main.scss";
import Navbar from "./Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import BasketIcon from "./Basket/BasketIcon";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  const items = useSelector((state: State) => state.items);
  const basket = useSelector((state: State) => state.basket);

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
        <div className='main'>
          <Switch>
            <Route exact path='/'>
              <FilterPanel />
              <Flowers items={items} />
              <BasketIcon />
            </Route>
            <Route exact path='/basket'>
              <OrderPanel />
              <Flowers items={basket} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
