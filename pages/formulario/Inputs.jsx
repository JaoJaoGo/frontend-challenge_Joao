import '../styles/Inputs.css'

const Inputs = ({ typeName, labelName, name, form, handleChange }) => {
    if(typeName === null)
    {
        return (
            <div className="input-container">
                <label>{labelName}</label>
                <textarea value={form} name={name} onChange={handleChange}/>
            </div>
        )
    }

    return (
        <div className="input-container">
            <label>{labelName}</label>
            <input type={typeName} className="inputs-style" name={name} value={form} onChange={handleChange} />
        </div>
    )
}

export default Inputs;