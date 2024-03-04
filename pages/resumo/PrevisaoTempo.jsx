import '../styles/PrevisaoTempo.css';

const PrevisaoTempo = ({ nomeDado, tipoDado }) =>{
    return (
        <>
            {tipoDado === "Clima" ?
            <div className="clima-container">
                <img src="/icons/weather-icon.png" alt="Clima" />
                <p>{nomeDado}</p>
            </div> : tipoDado === "Temperatura" ?
            <div className="temp-container">
                <img src="/icons/temp-icon.png" alt='Temp'></img>
                <p>{nomeDado}°C</p>
            </div> : tipoDado === "Umidade" ?
            <div className="umidade-container">
                <img src="/icons/humidity-icon.png" alt="Umidade" />
                <p>{nomeDado}%</p>
            </div> : ''}
        </>
    )
}

export default PrevisaoTempo;