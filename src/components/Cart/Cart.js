import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    const addCart = cart;
    const totalPopulation = addCart.reduce((sum, country) => sum + country.population, 0);
    return (
        <div>
            <h2>This is Cart: {addCart.length}</h2>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;
