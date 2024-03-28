// Style
import './text-input.css';

const TextInput = ({ formState, handleChange, name, label }) => {
    return (
        <div className='text-input'>
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} name={name} value={formState.name} required onChange={handleChange} />
        </div>
    );
}

export default TextInput;