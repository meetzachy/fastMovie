import React from 'react';
import { people } from '../data';

function User() {
  const usersList = people.map(person => {
    return(
        <li key={person.id}>
        <img 
        src='https://i.imgur.com/7vQD0fPs.jpg'
        alt='users'
        />
        <p>
            <b>{person.name}:</b> {' ' + person.profession + ''} known for {person.accomplishment}
        </p>
    </li>
    )
  });
  
  return (
    <div>
        <h1>Scientists</h1>
        <ul>{usersList}</ul>
    </div>
  )
}

export default User