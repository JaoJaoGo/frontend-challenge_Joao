"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react'

import Inputs from './Inputs';
import Local from './Local';

import '../styles/index.css'

const Formulario = () => {
    const router = useRouter();

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

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault()

        router.push('/resumo', { form })
    }

    return (
        <div className="formulario">
            <img src="/logo.svg" alt="" />

            <h1>Formulário de Contato</h1>

            <form onSubmit={handleSubmit}>
                <Inputs typeName="text" labelName="Nome:" name="nome" form={form.nome} handleChange={handleChange} />
                <Inputs typeName="email" labelName="Email:" name="email" form={form.email} handleChange={handleChange} />
                <Inputs typeName="password" labelName="Senha:" name="password" form={form.password} handleChange={handleChange} />
                <Inputs typeName="password" labelName="Confirme senha:" name="confirmPassword" form={form.confirmPassword} handleChange={handleChange} />
                <Inputs typeName="text" labelName="Endereço" name="address" form={form.address} handleChange={handleChange} />
                <Local nameCountry="country" nameState="state" nameCity="city" form={form} setForm={setForm} />
                <Inputs typeName="text" labelName="CEP:" name="cep" form={form.cep} handleChange={handleChange} />
                <Inputs typeName={null} labelName="Mensagem:" name="message" form={form.message} handleChange={handleChange} />

                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Formulario;