const Button = ({type, handleClick, btnText}) => (
    <div>
      <button type={type} onClick={handleClick}>
        {btnText}
      </button>
    </div>
)

export default Button