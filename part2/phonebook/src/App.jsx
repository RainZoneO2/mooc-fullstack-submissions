import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonsDisplay from './components/PersonDisplay'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('Effect')
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('Promise fulfilled..')
      setPersons(response.data)
    })
  }, [])

  const addNewPerson = (event) => {
    event.preventDefault()  
    
    if (persons.filter((person) => person.name === newName).length !== 0) {
      return alert(`${newName} is already added to the phonebook.`)
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    
    axios.post('http://localhost:3001/persons', personObject).then(response => {
      setPersons(persons.concat(response.data))
    })

    setNewName('')
    setNewNumber('')
  }

  const escapeRegex = (string) => {
    return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  const regex = new RegExp(`^(${escapeRegex(newFilter)})`, 'i')
  const peopleToShow = persons.filter(person => regex.test(person.name))
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add a new Person</h2>
      <PersonForm 
        handleNameChange={handleNameChange} 
        newName={newName}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
        addNewPerson={addNewPerson}
      />
      <h2>Numbers</h2>
      <Filter filter={newFilter} handleFilterChange={handleFilterChange}/>
      <PersonsDisplay persons={peopleToShow}/>
    </div>
  )
}

export default App
