// Style
import './button.css';

const Button = ({ type, value, onClick, disabled, text }) => {
    return (
        <button
            type={type}
            value = {value ? value : null}
            onClick={onClick}
            disabled = {disabled}
        >
            {text}
        </button>
    );
}

export default Button;