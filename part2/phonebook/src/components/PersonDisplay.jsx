import Button from "./Button"

const PersonsDisplay = ({persons, deleteHandler}) => {
    return (
      persons.map(person => 
        <p key={person.id}>
          {person.name} {person.number}
          <Button type="submit" handleClick={deleteHandler} btnText='Delete'/>
        </p>
      )
    )
}

export default PersonsDisplay