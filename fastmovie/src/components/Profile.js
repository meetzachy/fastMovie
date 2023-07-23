import React from 'react'

const user = {
  name: 'Zachary Moseti',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
}

function Profile() {
  return (
    <section style={user.theme}>
        <h1>{user.nae}</h1>
        <img 
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
        />
        <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
        </ul>
    </section>
  )
}

export default Profile;