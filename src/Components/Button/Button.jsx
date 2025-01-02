import "./Button.css"
const Button = ({ name, onClick }) => (
    <button onClick={onClick}>{name}</button>
  );
  export default Button