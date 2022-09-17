import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ShowCountries = ({ items, input, color }) => {
  
  return (
    <CountriesCard>
      {items.map((item, index) => {
        return (
          <Link key={index} to={"/name/" + item.cca3.toLowerCase()}>
            <div key={index} className='card'>
              <div className='countries-flag'>
                <img src={item.flags.svg} alt='' />
              </div>
              <div className='details'>
                <h1>{item.name.common}</h1>
                <p>
                  <strong>Population</strong> {item.population}
                </p>
                <p>
                  <strong>Region</strong> {item.region}
                </p>
                <p>
                  <strong>Capital</strong> {item.capital}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </CountriesCard>
  );
};

export default ShowCountries;

const CountriesCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  gap: 3rem;
  margin: 5rem 2rem;
  .card {
    width: 100%;
    height: 100%;
    box-shadow: 10px 10px 10px 10px;
    border-radius: 10px;
    padding-bottom: 0.5rem;
  }

  img {
    width: 310px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  .details {
    margin: 2rem 0rem 5rem 3rem;
  }
  .details h1 {
    margin-bottom: 1rem;
  }
  .details p {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 1302px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 882px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 676px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
