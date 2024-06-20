const Country = ({country, showDetailButton, showDetailHandler, setCountriesToShow}) => {
    return (
        <p> 
            {country.name.common} 
            {showDetailButton && <button onClick={() => {
                setCountriesToShow([country])
            }}>Details</button>}
        </p>
    )
}

export default Country