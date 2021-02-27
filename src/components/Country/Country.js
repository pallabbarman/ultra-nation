import React from 'react';
import './country.css';

const Country = (props) => {
    const { country, handleAddCountry } = props;
    const { name, population, flag } = country;
    const addCountry = handleAddCountry;

    return (
        <div className="country">
            <img src={flag} alt="" />
            <h4>{name}</h4>
            <h5>Population: {population}</h5>
            <button onClick={() => addCountry(country)} type="button">
                Add Country
            </button>
        </div>
    );
};

export default Country;
