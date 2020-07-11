import React, { useEffect } from "react";
import { getItems, getTypes, getContacts } from "../redux/actions";
import Header from "./Header/Header";
import Filter from "./Filter/Filter";
import Flowers from "./Flowers/Flowers";
import Footer from "./Footer/Footer";
import "../stylesheets/main.scss";
import Navbar from "./Navbar/Navbar";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
    dispatch(getTypes());
    dispatch(getContacts());
  }, []);

  return (
    <div className='app'>
      <Header />
      <Navbar />
      <div className='main'>
        <Filter />
        <Flowers />
      </div>
      <Footer />
    </div>
  );
};

export default App;
