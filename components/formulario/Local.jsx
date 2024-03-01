import { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from "axios";

import '../styles/Inputs.css'

const Local = () => {
    const configCountry = {
        method: 'get',
        url: 'https://api.countrystatecity.in/v1/countries',
        headers: {
            'X-CSCAPI-KEY': 'API_KEY'
        }
    };

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const customStyles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            border: '1px solid #949494',
            borderRadius: '2px',
            color: '#949494',
            cursor: 'pointer',
            gap: '10px',
            fontSize: '16px'
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
        })
    }

    useEffect(() => {
        // Fetch lista de países da API REST Countries
        axios(configCountry).then(response => {
            const countryOptions = response.data.map(country => ({
                value: country.iso2,
                label: country.name
            }));

            setCountries(countryOptions);
        })
        .catch(error => {
            console.error('Erro ao buscar países:', error);
        });
    }, []);

    const handleCountryChange = (selectedOption) => {
        
        setSelectedCountry(selectedOption);
        // Lógica adicional conforme necessário

        // Exemplo de como obter estados/cidades de um país específico
        axios.get(`https://api.countrystatecity.in/v1/countries/${selectedOption.value}/states`)
            .then(response => {
                const stateOptions = response.data.states.map(state => ({
                    value: state.id,
                    label: state.name
                }));
            setStates(stateOptions);

            console.log(stateOption.value);
        })
        .catch(error => {
            console.error('Erro ao buscar estados:', error);
        });
    };

    const handleStateChange = (selectedOption) => {
        setSelectedState(selectedOption);
        // Lógica adicional conforme necessário

        // Exemplo de como obter cidades de um estado específico
        axios.get(`https://api.example.com/cities?stateCode=${selectedOption.value}`)
            .then(response => {
                const cityOptions = response.data.cities.map(city => ({
                    value: city.id,
                    label: city.name
                }));
            setCities(cityOptions);
        })
        .catch(error => {
            console.error('Erro ao buscar cidades:', error);
        });
    };

    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption);
        // Lógica adicional conforme necessário
    };

    return (
        <div className="input-container">
            <div className="local-itens">
                <label htmlFor="">País:</label>
                <Select
                    styles= {customStyles}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    options={countries}
                />
            </div>
            <div className="local-itens">
                <label htmlFor="">Estado:</label>
                <Select
                    styles= {customStyles}
                    value={selectedState}
                    onChange={handleStateChange}
                    options={states}
                />
            </div>
            <div className="local-itens">
                <label htmlFor="">Cidade:</label>
                <Select
                    styles= {customStyles}
                    value={selectedCity}
                    onChange={handleCityChange}
                    options={cities}
                />
            </div>
        </div>
    )
}

export default Local;