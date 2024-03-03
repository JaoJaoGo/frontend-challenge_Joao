"use client";
// Imports de bibliotecas
import React, { useState } from 'react';
import useStore from '../store';
import { useRouter } from 'next/navigation';

// Imports de arquivos
import Inputs from './Inputs';
import Local from './Local';

// Import de CSS
import '../styles/index.css'

const Formulario = () => {
    const router = useRouter();
    const alphanumeric = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

    // Estado inicial do formulário
    const [form, setForm] = useState({
        nome: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        country: '',
        state: '',
        city: '',
        cep: '',
        message: '',
    });
    const { setForm: setGlobalForm } = useStore();

    // Altera valores dos inputs
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // Verifica condições, caso tudo estiver ok, insere em form, vá para localhost:3000/resumo e manda o form com os dados para
    // Resumo.jsx
    const handleSubmit = e => {
        e.preventDefault()
        
        // Verifica nome
        if(form.nome.length > 150) {
            return 400;
        }

        // Verifica tamanho da senha e se é igual a confirmSenha
        if (form.password !== form.confirmPassword || form.password.length < 8 || form.password.length > 35) {
            return 400;
        }

        // Verifica se Senha é alphanumérica
        if(!alphanumeric.test(form.password)) {
            return 400;
        }

        // Verifica se CEP tem tamanho válido (8 dígitos)
        if(form.cep.length < 8 && form.cep.length > 8) {
            return 400;
        }

        setGlobalForm(form);
        router.push('/resumo')
    }

    return (
        <div className="formulario">
            <img src="/logo.svg" alt="" />

            <h1>Formulário de Contato</h1>

            <form onSubmit={handleSubmit}>
                <Inputs typeName="text" labelName="Nome:" name="nome" form={form.nome} handleChange={handleChange} />
                {/* Mensagem de erro caso nome ultrapassar limite de caracteres estabelecido */}
                <ul>
                    {form.nome.length > 150 ? <li>Limite de caracteres atingido!</li> : ''}
                </ul>

                <Inputs typeName="email" labelName="Email:" name="email" form={form.email} handleChange={handleChange} />
                <Inputs typeName="password" labelName="Senha:" name="password" form={form.password} handleChange={handleChange} />
                <Inputs typeName="password" labelName="Confirme senha:" name="confirmPassword" form={form.confirmPassword} handleChange={handleChange} />
                {/* Mensagem de erro caso senha for menor que 8, maior que 35, não coindidir com confirmSenha ou não ser
                    alphanumérico */}
                <ul>
                    {form.password !== form.confirmPassword ? <li>As senhas não se coicidem!</li> : ''}
                    {form.password.length < 8 && form.password.length > 0 ? <li>Senha muito pequena!</li> : 
                    form.password.length > 35 ? <li>Ultrapassou limite de caracteres!</li> : ''}
                    {!alphanumeric.test(form.password) && form.password.length > 0 ? <li>A senha deve conter no mínimo um caractere 
                    especial, um número, uma letra maiúscula e minúscula!</li> : ''}
                </ul>

                <Inputs typeName="text" labelName="Endereço" name="address" form={form.address} handleChange={handleChange} />
                <Local nameCountry="country" nameState="state" nameCity="city" form={form} setForm={setForm} />
                <Inputs typeName="number" labelName="CEP:" name="cep" form={form.cep} handleChange={handleChange} />
                {/* Mensagem de erro caso CEP ter menos ou mais que 8 dígitos */}
                <ul>
                    {form.cep.length > 0 && form.cep.length < 8 || form.cep.length > 8 ? <li>Insira um cep válido!</li> : ''}
                </ul>

                <Inputs typeName={null} labelName="Mensagem:" name="message" form={form.message} handleChange={handleChange} />

                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Formulario;