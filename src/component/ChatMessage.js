import React from 'react'

const ChatMessage = ({ name, message }) => {
    // Check if props are defined before using them
    if (!name || !message) {
      return null; // Return null or handle the case where props are undefined
    }
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img
          className=" h-7"
          alt="user"
          src="https://th.bing.com/th/id/OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa?rs=1&pid=ImgDetMain"
        />
        <span className='font-bold p-2'> {name} </span>
        <span> {message} </span>
    </div>
  )
}

export default ChatMessage