import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Country from './components/Country/Country';

function App() {
    const [countries, setCountries] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((res) => res.json())
            .then((data) => setCountries(data))
            .catch((err) => console.log(err));
    }, []);

    const handleAddCountry = (country) => {
        const newCart = [...cart, country];
        setCart(newCart);
    };

    return (
        <div>
            <div className="App">
                <h1>Countries: {countries.length}</h1>
                <h4>Country Added: {cart.length}</h4>
                <Cart cart={cart} />
            </div>
            <div className="show-country">
                {countries.map((country) => (
                    <Country country={country} handleAddCountry={handleAddCountry} />
                ))}
            </div>
        </div>
    );
}

export default App;
