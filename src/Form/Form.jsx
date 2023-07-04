import React, { useState, useEffect } from 'react'
import './form.css'
function Form() {
    const formIntials = {name:'', email:'', password:'', confirmPassword:''}
    const[targetValue, setTargetValue] = useState(formIntials)
    const[formErrors, setFormErrors] = useState({})
    const[isSubmit, setIsSubmit] = useState(false)
    const handleChange = (e)=>{
        const{name, value} = e.target
        
            setTargetValue({
                ...targetValue, [name]: value
            }
                )
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setFormErrors(validate(targetValue))
        setIsSubmit(true)
    }
    const validate = (values)=>{
        const errors = {}
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
        if(!values.name){
            errors.name = 'username is required'
        }
        if(!values.email){
            errors.email = 'email is required'
        }
        if(!values.password){
            errors.password = 'password is required'
        }
        if(!values.confirmPassword){
            errors.confirmPassword = 'password confirmation is required'
        }
        return errors
    }
    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(targetValue);
        }
    },[formErrors])
  return (

    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' value={targetValue.name} onChange={handleChange}/>
            <p>{formErrors.name}</p>
            <input type="email" name='email' value={targetValue.email} onChange={handleChange}/>
            <p>{formErrors.email}</p>
            <input type="password" name='password' value={targetValue.password} onChange={handleChange}/>
            <p>{formErrors.password}</p>
            <input type="password" name='confirmPassword' value={targetValue.confirmPassword} onChange={handleChange}/>
            <p>{formErrors.confirmPassword}</p>
            <button>Submit</button>
        </form>
       <pre>{JSON.stringify(targetValue, undefined, 2)}</pre>
    </div>
  )
}

export default Form