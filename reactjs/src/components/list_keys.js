import React from 'react';

function NameList() {
    
    const persons = [
    {
      id: 1,
      name: 'nikitha',
      age: 27,
      skill: 'React'
    },
    {
      id: 2,
      name: 'ramya',
      age: 28,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'vasavi',
      age: 28,
      skill: 'Vue'
    }
  ]
//   const personList = persons.map(person => <Person key={person.id} person={person} />)
  const personList = persons.map(person => 

  <h5> 
    I am {person.name} . I am {person.age} years old . i know {person.skill}
  </h5>)
  return <div>{personList}</div>
}

export default NameList