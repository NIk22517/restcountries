import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SubRegion = () => {
  const [region, setRegion] = useState([]);
  const [regionLists, setRegionLists] = useState("");
  const regionList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];




  useEffect(() => {
    fetchRegion();
  }, []);

  const fetchRegion = async () => {
    const res = await axios.get(
      `https://restcountries.com/v3.1/region/${regionLists}`
    );
    setRegion(res.data);
  };

  const handleOption = (e) => {
    setRegionLists(e.target.value);
  };
  return (
    <>
      <select onChange={handleOption}>
          <option value=''>All</option>
        {regionList.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default SubRegion;
