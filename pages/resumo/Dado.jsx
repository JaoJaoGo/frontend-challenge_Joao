import '../styles/Dado.css'

const Dado = ({ nomeDado, tipoDado }) => {
    return (
        <div className="dado">
            <label>{tipoDado}</label>
            <p>{nomeDado}</p>
        </div>
    )
}

export default Dado;