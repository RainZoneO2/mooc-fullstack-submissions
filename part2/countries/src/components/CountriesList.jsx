import Country from "./Country" 
import CountryDetails from "./CountryDetails"

const CountriesList = ({setCountriesToShow, countriesToShow}) => {
    return (
        <div>
            {countriesToShow.map(country => 
                <Country 
                    key={country.cca2} 
                    country={country} 
                    showDetailButton={(countriesToShow.length < 10)}
                    setCountriesToShow={setCountriesToShow}
                />
            )}
        </div>
    )
}

export default CountriesList