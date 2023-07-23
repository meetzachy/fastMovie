import React, { useState } from 'react'

function Ticket() {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [fullName,setFullName] = useState('');
    
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        setFullName(e.target.value + ' ' + lastName);
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        setFullName(firstName + ' ' + e.target.value);
    }
    const handleSubmit = () => {
        alert('Details submitted successfully!');
    }
  return (
    <>
    <form>
        <input
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder='Enter first name'
        />
        <input
            value={lastName}
            onChange={handleLastNameChange}
            placeholder='Enter last name'
        />
        <p>Your ticket will be issued to: {fullName}</p>
        <button onClick={handleSubmit}>
            Book Train
        </button>
    </form>
    </>
  )
}

export default Ticket