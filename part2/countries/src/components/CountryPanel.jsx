import { useState, useEffect } from 'react'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import countryService from '../services/countries'

const CountryPanel = ({regex}) => {
    const [countries, setCountries] = useState([])
    const [countriesToShow, setCountriesToShow] = useState([])
  
    useEffect(() => {
      countryService.getAll().then(returnedCountries => {
        console.log('Promise Fulfilled')
        setCountries(returnedCountries)
      })
    }, [])
  
    useEffect(() => {
      console.log('Effect')
      setCountriesToShow(countries.filter(country => regex.test(country.name.common)))
    }, [regex, countries])
  
    const detailsPanel = () => {
      if (String(regex) !== String('/^()/i')) {
        if (countriesToShow.length === 1) {
          console.log(countriesToShow[0])
          return <CountryDetails country={countriesToShow[0]}/>
        } else if (countriesToShow.length > 10) {
          return <p> Too many matches, specify another filter. </p>
        }
      }
      return <CountriesList setCountriesToShow={setCountriesToShow} countriesToShow={countriesToShow} />
    }
  
    return (
      <div>
        {detailsPanel()}
      </div>
    )
}

export default CountryPanel