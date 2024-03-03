// Imports de bibliotecas
import { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from "axios";

// Import de CSS
import '../styles/Inputs.css'

const Local = ({ nameCountry, nameState, nameCity, form, setForm }) => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    // Aplica estilo para os Select de react-select
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
        // Iria ter todos os países com todos os estados e cidades, porém, não me passaram a chave API a tempo...
        setCountries([{value: "BR", label: "Brasil"}]);
    }, []);

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);

        setForm({
            ...form,
            country: selectedOption.label
        })

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

        setForm({
            ...form,
            state: selectedOption.label
        })

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

        setForm({
            ...form,
            city: selectedOption.label
        })
    };

    return (
        <div className="input-container">
            <div className="local-itens">
                <label>País:</label>
                <Select
                    styles= {customStyles}
                    name={nameCountry}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    options={countries}
                    required
                />
            </div>
            <div className="local-itens">
                <label>Estado:</label>
                <Select
                    styles= {customStyles}
                    name={nameState}
                    value={selectedState}
                    onChange={handleStateChange}
                    options={states}
                    required
                />
            </div>
            <div className="local-itens">
                <label>Cidade:</label>
                <Select
                    styles= {customStyles}
                    name={nameCity}
                    value={selectedCity}
                    onChange={handleCityChange}
                    options={cities}
                    required
                />
            </div>
        </div>
    )
}

export default Local;