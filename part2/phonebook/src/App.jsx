import { useState } from 'react'

const Button = ({type, handleClick, btnText}) => (
  <div>
    <button type={type} onClick={handleClick}>
      {btnText}
    </button>
  </div>
)

const PersonForm = ({handleNameChange, nameValue, handleNumberChange, numberValue, addPerson}) => {
  return (
    <form>
        <div>Name: <input value={nameValue} onChange={handleNameChange}/></div>
        <div>Number: <input value={numberValue} onChange={handleNumberChange}/></div>
        <Button type="submit" handleClick={addPerson} btnText='Add'/>
    </form>
  )
}

const Filter = ({filter, handleFilterChange}) => {
  return (
    <div><strong>
      Filter for: <input value={filter} onChange={handleFilterChange}/>
    </strong></div>
  )
}

const PersonsDisplay = ({persons}) => {
  return (
    persons.map(person => 
      <p key={person.id}>{person.name} {person.number}</p>
    )
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

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

    setPersons(persons.concat(personObject))
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
        nameValue={newName}
        handleNumberChange={handleNumberChange}
        numberValue={newNumber}
        addPerson={addNewPerson}
      />
      <h2>Numbers</h2>
      <Filter filter={newFilter} handleFilterChange={handleFilterChange}/>
      <PersonsDisplay persons={peopleToShow}/>
    </div>
  )
}

export default App
