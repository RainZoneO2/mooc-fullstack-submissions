const Country = ({name, showDetailButton, showDetailHandler}) => {
    return (
        <p> 
            {name} 
            {showDetailButton && <button onClick={showDetailHandler}>Details</button>}
        </p>
    )
}

export default Country