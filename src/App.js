import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';

function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((res) => res.json())
            .then((data) => setCountries(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="App">
            <h1>Countries: {countries.length}</h1>
            {countries.map((country) => (
                <Country name={country.name} />
            ))}
        </div>
    );
}

export default App;
