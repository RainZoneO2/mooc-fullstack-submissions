import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonsDisplay from './components/PersonDisplay'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      console.log('Promise fulfilled..')
      setPersons(initialPersons)
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
    
    personService.create(personObject).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })
  }

  const deleteHandler = (event) => {
    event.preventDefault()

    if (window.confirm("Do you really want to delete?")) {
      console.log('Delete..', event.target.tagName)
    }
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
      <PersonsDisplay persons={peopleToShow} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default App
