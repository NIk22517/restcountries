import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import GlobalStyle from "./globalStyle";
import axios from "axios";
import NavBar from "./components/NavBar";
import ShowCountries from "./components/ShowCountries";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesDetails from "./components/CountriesDetails";
import RegionDetails from "./components/RegionDetails";


const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchItems();
  }, [items]);

  const fetchItems = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setItems(response.data);
    setLoading(false);
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      {/* <SubRegion />
      <SearchContry input={input} setInput={setInput} /> */}
      <Routes>
        <Route
          path='/'
          element={
            loading ? <Loader /> : <ShowCountries items={items} />
          }
        ></Route>

        <Route path='/name/:name' element={<CountriesDetails />} />

        <Route path='/region/:region' element={<RegionDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
