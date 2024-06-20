import Country from "./Country" 
import CountryDetails from "./CountryDetails"

const CountriesList = ({countriesToShow, showDetailButton}) => {
    const showDetailHandler = cca2 => {
        const country = countriesToShow.find(country => country.cca2 === cca2)
        console.log(country)
        return <CountryDetails country={country} />
      }

    return (
        <div>
            {countriesToShow.map(country => 
                <Country 
                    key={country.cca2} 
                    name={country.name.common} 
                    showDetailButton={showDetailButton}
                    showDetailHandler={() => showDetailHandler(country.cca2)}
                />
            )}
        </div>
    )
}

export default CountriesList