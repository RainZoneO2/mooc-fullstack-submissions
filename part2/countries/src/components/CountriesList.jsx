import Country from "./Country" 

const CountriesList = ({countriesToShow}) => {
    return (
        <div>
            {countriesToShow.map(country => 
                <Country key={country.cca2} name={country.name.common}/>
            )}
        </div>
    )
}

export default CountriesList