import { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from "axios";

import '../styles/Inputs.css'

const Local = () => {
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
        setCountries([{value: "BR", label: "Brasil"}]);
    }, []);

    const handleCountryChange = (selectedOption) => {
        
        setSelectedCountry(selectedOption);

        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
            .then(response => {
                const stateOptions = response.data.map(state => ({
                    value: state.id,
                    label: state.nome
                }));
            setStates(stateOptions);
        })
        .catch(error => {
            console.error('Erro ao buscar estados:', error);
        });
    };

    const handleStateChange = (selectedOption) => {
        setSelectedState(selectedOption);
        console.log(selectedOption)
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedOption.value}/municipios`)
            .then(response => {
                const cityOptions = response.data.map(city => ({
                    value: city.sigla,
                    label: city.nome
                }));
            setCities(cityOptions);
        })
        .catch(error => {
            console.error('Erro ao buscar cidades:', error);
        });
    };

    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption);
    };

    return (
        <div className="input-container">
            <div className="local-itens">
                <label>País:</label>
                <Select
                    styles= {customStyles}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    options={countries}
                />
            </div>
            <div className="local-itens">
                <label>Estado:</label>
                <Select
                    styles= {customStyles}
                    value={selectedState}
                    onChange={handleStateChange}
                    options={states}
                />
            </div>
            <div className="local-itens">
                <label>Cidade:</label>
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