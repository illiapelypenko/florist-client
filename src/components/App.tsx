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
import BasketIcon from "./Basket/Basket";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WithSpinner from "./Useful/WithSpinner";

const App = () => {
  const dispatch = useDispatch();

  const items = useSelector((state: State) => state.items);
  const basket = useSelector((state: State) => state.basket);
  const types = useSelector((state: State) => state.types);

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
              <WithSpinner
                data={types}
                Component={FilterPanel}
                renderComponentIf={(types) => types.length > 0}
              />
              <WithSpinner
                data={items}
                Component={Flowers}
                renderComponentIf={(items) => items.length > 0}
              />
              <BasketIcon />
            </Route>
            <Route exact path='/basket'>
              <OrderPanel />
              <Flowers data={basket} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
