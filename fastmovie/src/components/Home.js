import React, { useEffect } from 'react'

function Home() {
    useEffect(() => {
        console.log('use effect runs');
    })
  return (
    <div>Home</div>
  )
}

export default Home