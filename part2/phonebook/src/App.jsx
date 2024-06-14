import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Ghaith A',
      number: '+1 (111) 222-3333'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()  
    
    if (persons.filter((person) => person.name === newName).length !== 0) {
      return alert(`${newName} is already added to the phonebook.`)
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>Name: <input value={newName} onChange={handleNameChange}/></div>
        <div>Number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit" onClick={addNewPerson}>Add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <p key={person.name}>{person.name} {person.number}</p>
      )}
    </div>
  )
}

export default App
