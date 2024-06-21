import WeatherPanel from "./WeatherPanel"

const CountryDetails = ({country}) => {
    const languages = Object.entries(country.languages)
    
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital.join(', ')}</p>
            <p>Area: {country.area} km<sup>2</sup></p>
            <p><b>Spoken Languages:</b></p>
            <ul>
                {languages.map(([key, language], index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
            <h2>Flag</h2>
            <img src={country.flags['png']} alt={country.flags['alt']} />
            <WeatherPanel cityName={country.capital[0]} lat={country.capitalInfo.latlng[0]} lng={country.capitalInfo.latlng[1]}/>
        </div>
    )
}

export default CountryDetails