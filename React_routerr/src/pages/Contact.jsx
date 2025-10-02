import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {

    const navigate = useNavigate();

  return (
    <div>
        <h1>Contact page</h1>
        <div className='contact-buttons'>
            <button onClick={()=>navigate('info')}>Contat Info</button>
             <button onClick={()=>navigate('form')}>Contat Form</button>
        </div>
    </div>
  )
}

export default Contact