import React from 'react'
import { useState } from 'react'


const AddEmployeeComponent = () => {

    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[emailId, setEmailId] = useState('')


  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card '></div>
            </div>
        </div>
  
    </div>
  )
}

export default AddEmployeeComponent
