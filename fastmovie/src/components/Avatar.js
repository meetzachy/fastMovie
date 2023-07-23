import React from 'react'

function Avatar({size,user}) {
  return (
    <section style={user.theme}>
        <h1>{user.name}</h1>
        <img 
        src={user.imageUrl}
        width={size}
        height={size}
        alt=''
        />
        <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
        </ul>
    </section>
  )
}

export default Avatar