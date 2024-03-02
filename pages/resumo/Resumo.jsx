

import Dado from './Dado'

import '../styles/Resumo.css'

const Resumo = () => {

    return (
        <div className="box">
            <img src="/logo.svg" alt="" />

            <h1>Registro efetuado com sucesso!</h1>
            <hr />

            <div className="dados">
                <Dado nomeDado="João Víctor Guedes Carrijo" tipoDado="Nome:"/>
                <Dado nomeDado="dorrrr2dorzinho@gmail.com" tipoDado="Email:"/>
                <Dado nomeDado="Rua Hungria, Qd. 142, Lt. 15, Jardim Europa" tipoDado="Endereço:"/>
                <Dado nomeDado="Brasil" tipoDado="País:"/>
                <Dado nomeDado="Goiás" tipoDado="Estado:"/>
                <Dado nomeDado="Goiânia" tipoDado="Cidade:"/>
                <Dado nomeDado="74330-330" tipoDado="CEP:"/>
                <Dado nomeDado="Mano pelo amor de Deus como tá um inferno fazer isso aqui alguem me salva!!!" tipoDado="Mensagem:"/>
            </div>
        </div>
    )
}

export default Resumo;