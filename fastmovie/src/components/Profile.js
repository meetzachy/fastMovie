import React from 'react'
import Avatar from './Avatar';

function Profile() {
  return (
    <Avatar size={200}
      user ={{
        name: 'Moseti',
        imageUrl: 'https://i.imgur.com/7vQD0fPs.jpg'
      }}
    />
  )
}

export default Profile;