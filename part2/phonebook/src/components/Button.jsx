const Button = ({type, handleClick, btnText}) => (
    <>
      <button type={type} onClick={handleClick}>
        {btnText}
      </button>
    </>
)

export default Button