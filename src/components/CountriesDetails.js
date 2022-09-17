import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Loader from "./Loader";

const CountriesDetails = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const name = useParams();

  const lowerCase = name.name.toLowerCase();

  useEffect(() => {
    fetchItems();
  }, [items]);

  const fetchItems = async () => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/alpha/${lowerCase}`
    );
    setItems(response.data);
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Details>
          {items.map((item, index) => {
            return (
              <div key={index} className='detail-card'>
                <div className='country-img'>
                  <img src={item.flags.svg} alt='' />
                </div>
                <div className='details'>
                  <div className='detail-left'>
                    <h1>{item.name.common}</h1>
                    <p>
                      <strong>Native Name</strong>{" "}
                      {
                        item.name.nativeName[
                          Object.keys(item.name.nativeName)[0]
                        ].official
                      }
                    </p>
                    <p>
                      <strong>Population</strong> {item.population}
                    </p>
                    <p>
                      <strong>Region</strong> {item.region}{" "}
                    </p>
                    <p>
                      <strong>Sub Region</strong> {item.subregion}
                    </p>
                    <p>
                      <strong>Capital</strong> {item.capital}
                    </p>
                  </div>
                  <div className='detail-right'>
                    <p>
                      <strong>Currencies</strong>{" "}
                      {
                        item.name.nativeName[
                          Object.keys(item.name.nativeName)[0]
                        ].official
                      }
                    </p>
                    <p>
                      <strong>Top Level Domain</strong> {item.tld}
                    </p>
                    <p>
                      <strong>Languages</strong>{" "}
                      {item.languages[Object.keys(item.languages)[0]]},
                      {item.languages[Object.keys(item.languages)[1]]}
                    </p>
                  </div>
                  {/* <strong>Border Countries</strong>
              {item.borders.map((border) => {
                return <p>{border}</p>;
              })} */}
                </div>
              </div>
            );
          })}
        </Details>
      )}
    </>
  );
};

export default CountriesDetails;

const Details = styled.div`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  img {
    width: 450px;
    height: 250px;
  }
  .detail-card {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    box-shadow: 0 0 10px 0;
    padding: 2rem;
    border-radius: 20px;
  }
  .details {
    display: flex;
    margin: 0rem 5rem;
  }
  .detail-left {
    margin-right: 3rem;
  }
  strong {
    font-size: 20px;
  }
  p {
    margin: 0.5rem 0rem;
  }
  @media (max-width: 676px) {
    width: 100%;
    justify-content: center;
    .detail-card {
      width: 80%;
      box-shadow: 0 0 10px 0;
      border-radius: 20px;
    }
    img {
      width: 250px;
      height: 250px;
    }
    .detail-left {
      margin: 0;
    }
    .detail-right {
      margin-right: 1rem;
    }
    .details {
      width: 100%;
      display: flex;
      margin: 2rem 0;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      align-items: center;
    }
    .country-img {
      width: 100%;
      justify-content: center;
      display: flex;
    }
  }
`;
