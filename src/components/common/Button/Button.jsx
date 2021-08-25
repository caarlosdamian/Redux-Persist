import './button.css'


const Button = ({ label, type, handleClick }) => (
  <button  className='btn' type={type} onClick={handleClick}>
    {label}
  </button>
);

export default Button;
