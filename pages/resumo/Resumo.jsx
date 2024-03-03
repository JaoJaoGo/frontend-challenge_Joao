"use client";
import { useRouter } from 'next/navigation'

import Dado from './Dado'

import '../styles/Resumo.css'

const Resumo = () => {
    const router = useRouter()

    if(!router.isReady) {
        return <div>Carregando...</div>
    }

    const form = JSON.parse(decodeURIComponent(router.asPath.split('?')[1].split('=')[1]));
    console.log(form)

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
        </div>
    )
}

export default Resumo;