"use client";
import React, { useEffect, useState } from 'react';

import Inputs from './Inputs';
import Local from './Local';

import '../styles/index.css'

const Formulario = () => {
    return (
        <div className="formulario">
            <img src="/logo.svg" alt="" />

            <h1>Formulário de Contato</h1>

            <Inputs typeName="text" labelName="Nome:" />
            <Inputs typeName="email" labelName="Email:" />
            <Inputs typeName="password" labelName="Senha:" />
            <Inputs typeName="password" labelName="Confirme senha:" />
            <Inputs typeName="text" labelName="Endereço" />
            <Local />
            <Inputs typeName="text" labelName="CEP:" />
            <Inputs labelName="Mensagem:" />

           <button type='submit'>Enviar</button>
        </div>
    )
}

export default Formulario;