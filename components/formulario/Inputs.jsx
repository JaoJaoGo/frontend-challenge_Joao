import '../styles/Inputs.css'

const Inputs = ({ typeName, labelName }) => {
    if(!typeName)
    {
        return (
            <div className="input-container">
                <label>{labelName}</label>
                <textarea />
            </div>
        )
    }

    return (
        <div className="input-container">
            <label>{labelName}</label>
            <input type={typeName} className="inputs-style" />
        </div>
    )
}

export default Inputs;