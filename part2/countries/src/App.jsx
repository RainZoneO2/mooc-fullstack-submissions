import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import CountriesList from './components/CountriesList'
import countryService from './services/countries'
import CountryDetails from './components/CountryDetails'

function App() {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const escapeRegex = (string) => {
    return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  const regex = new RegExp(`^(${escapeRegex(newFilter)})`, 'i')

  const countriesToShow = countries.filter(country => regex.test(country.name.common))

  useEffect(() => {
    countryService.getAll().then(returnedCountries => {
      console.log('Promise Fulfilled')
      setCountries(returnedCountries)
    })
  }, [])


  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const countryPanel = () => {
    if (newFilter !== '') {
      if (countriesToShow.length > 10) {
        return <p> Too many matches, specify another filter. </p>
      } else if (countriesToShow.length === 1) {
        console.log(countriesToShow[0])
        return <CountryDetails country={countriesToShow[0]}/>
      }
    }
    return <CountriesList countriesToShow={countriesToShow}/>
  }

  return (
    <div>
      <Filter filter={newFilter} handleFilterChange={handleFilterChange} />
      {countryPanel()}
    </div>
  )
}

export default App
