import React from 'react'

function Contact({onPlayMovie, onUploadImage}) {
  return (
    <div>
        <button onClick={onPlayMovie}>
        Play Movie
        </button>
        <button onClick={onUploadImage}>
            Upload Image
        </button>
    </div>
  )
}

export default Contact