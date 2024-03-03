// Import de CSS
import '../styles/Inputs.css'

const Inputs = ({ typeName, labelName, name, form, handleChange }) => {
    // Verifica o typeName passado pelo index.jsx, baseado nisso, tem conteúdos diferentes
    if(typeName === null) {
        return (
            <div className="input-container">
                <label>{labelName}</label>
                <textarea value={form} name={name} onChange={handleChange} required/>
            </div>
        )
    } else if(typeName === "number") {
        return (
            <div className="input-container">
                <label>{labelName}</label>
                <input type={typeName} className="inputs-style" name={name} value={form} onChange={handleChange} required />
            </div>
        )
    } else {
        return (
            <div className="input-container">
                <label>{labelName}</label>
                <input type={typeName} className="inputs-style" name={name} value={form} onChange={handleChange} required />
            </div>
        )
    }
}

export default Inputs;