import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Ghaith A' }
  ])
  const [newName, setNewName] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log('handleNameChange..', event.target.value);
    setNewName(event.target.value)
  }

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit" onClick={addNewPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <p key={person.name}>{person.name}</p>
      )}
    </div>
  )
}

export default App
