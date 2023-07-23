import React from 'react'

function Item({isPacked, name}) {
  return (
    <div>
        <li>{isPacked && "yes"}</li>
    </div>
  )
}

export default Item