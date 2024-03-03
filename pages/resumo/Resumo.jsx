"use client";

// Imports de bibliotecas
import { useState, useEffect } from 'react'
import useStore from '../store';
import axios from "axios";

// Import de arquivo
import Dado from './Dado'

// Import de CSS
import '../styles/Resumo.css'

const Resumo = () => {
    // Recupera o objeto form com seus dados de index.jsx através do store.js
    const { form } = useStore();

    // Objeto inicial da previsão do tempo
    const [clima, setClima] = useState({
        dia: '',
        temperatura: '',
        umidade: '',
        clima: '',
    });

    useEffect(() => {
        // Pega os dados da previsão do tempo do próximo dia da API, baseado na cidade informada no formulário
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${form.city}&appid=0a1ad9c402448229fe65a125654233f2`)
        .then(response => {
            const previsoes = response.data.list;
    
            const amanha = new Date();
            amanha.setDate(amanha.getDate() + 1);
            const dataAmanha = amanha.toISOString().split('T')[0];
    
            const previsaoDiaSeguinte = previsoes.find(item => item.dt_txt.includes(dataAmanha));
    
            setClima((estadoAtual) => ({
                ...estadoAtual,
                dia: previsaoDiaSeguinte.dt_txt,
                temperatura: (previsaoDiaSeguinte.main.temp - 273.15).toFixed(2) + '°C',
                umidade: previsaoDiaSeguinte.main.humidity + ' g/m³',
                clima: previsaoDiaSeguinte.weather[0].description.charAt(0).toUpperCase() + previsaoDiaSeguinte.weather[0].description.slice(1),
            }))
        })
    }, [])

    return (
        <div className="box">
            <img src="/logo.svg" alt="" />

            <h1>Registro efetuado com sucesso!</h1>
            <hr />

            <div className="dados">
                <Dado nomeDado={form.nome} tipoDado="Nome:"/>
                <Dado nomeDado={form.email} tipoDado="Email:"/>
                <Dado nomeDado={form.address} tipoDado="Endereço:"/>
                <Dado nomeDado={form.country} tipoDado="País:"/>
                <Dado nomeDado={form.state} tipoDado="Estado:"/>
                <Dado nomeDado={form.city} tipoDado="Cidade:"/>
                <Dado nomeDado={form.cep} tipoDado="CEP:"/>
                <Dado nomeDado={form.message} tipoDado="Mensagem:"/>
            </div>

            <hr />

            <h2>Previsão de tempo de {form.city}</h2>

            <div className="previsaoTempo">

                <Dado nomeDado={clima.dia} tipoDado="Data:"/>
                <Dado nomeDado={clima.temperatura} tipoDado="Temperatura:"/>
                <Dado nomeDado={clima.umidade} tipoDado="Umidade do Ar:"/>
                <Dado nomeDado={clima.clima} tipoDado="Clima:" />
            </div>
        </div>
    )
}

export default Resumo;