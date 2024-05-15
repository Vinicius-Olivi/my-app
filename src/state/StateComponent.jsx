import { useState } from "react";



const StateComponent = () => {
  const [persons, setPersons] = useState([
      { name: 'Neymar', age: 32},
      { name: 'Messi', age: 36},
      { name: 'C. Ronaldo', age: 39}
  ]);

const deleteHandler = (index) => {
    let storedPersons = [...persons]
    storedPersons.splice(index, 1)
    setPersons(storedPersons)
}
 

  return (
    <div>
      <div>
          {persons.map((person, index) => {
              return <Person 
              name={person.name}
              age={person.age}
              handleClick={() => deleteHandler(index)} 
              />
          })}
        </div>
      </div>
  )
}
const Person = ({ name, age, handleClick }) => {
  return (
      <div>
          <h1>Name: {name}</h1>
          <h1>Age: {age}</h1>
          <button onClick={handleClick}>Delete</button>
      </div>
  )
}

export default StateComponent;


 

