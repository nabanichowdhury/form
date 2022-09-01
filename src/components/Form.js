import { faCheckCircle, faEye, faEyeSlash, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useEffect, useState } from 'react';

import './Form.css';



const Form = () => {
  
 const initialState={username:'',email:'',password:''}
 const [formValues,setFormValues]=useState(initialState)
 const [formErrors,setFormErrors]=useState({})
 const [isSubmit,setSubmit]=useState(false)
 const[isValidPassword,setValidPassword]=useState(false)
 const[isValidCapital,setValidCapital]=useState(false)
 const[isValidSmall,setValidSmall]=useState(false)
 const[isValidPasswordlength,setValidPasswordlength]=useState(false)
 const[isValidSpecial,setValidSpecial]=useState(false)
 const[isValidNumber,setValidNumber]=useState(false)

 useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length===0 && isSubmit){
        console.log(formValues)
    }

 },[formErrors])
 //handle if valid
 const valid = (item, v_icon, inv_icon) => {
   
    let text = document.querySelector(`#${item}`);
    text.style.color = "green";
    // #change
  };
  //handle if invalid
  const invalid = (item, v_icon, inv_icon) => {
    let text = document.querySelector(`#${item}`);
    text.style.color = "red";
    
    // #change
  };
  const handleChange=(e)=>{
    console.log(e.target);
    const{name,value}=e.target;
    setFormValues({...formValues,[name]:value})
    console.log(formValues)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues))
    setSubmit(true)
    
  }

  const validate=(values)=>{

    const errors={};
    // const regex=/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
    if(!values.username){

        errors.username='Username is required!'
        
    }
    if(!values.email){
        errors.email='Email is required!'

    }
    if(!values.password){
        errors.password='Password is required!'

    }
    return errors;


  }

 
  //handle input
  const handleInputChange=e=>{
    const password=(e.target.value);
    
    if(password.match(/[A-Z]/)!=null ){
        setValidCapital(true)
        valid('capital','faCheck','faCross')
    }else{
        setValidCapital(false)
        invalid('capital','faCheck','faCross')
    }
    if(password.match(/[a-z]/)!= null){
        setValidSmall(true)
        valid('small','faCheck','faCross')
    }else{
        setValidSmall(false)
        invalid('small','faCheck','faCross')
    }
    
    if(password.match(/[0-9]/)!= null){
        setValidNumber(true)
        valid('number','faCheck','faCross')
    }
    else{
        setValidNumber(false)
        invalid('number','faCheck','faCross') 
    }
    if(password.length>8){
        setValidPasswordlength(true)
        valid('length','faCheck','faCross')
    }else{
        setValidPasswordlength(false)
        invalid('length','faCheck','faCross')
    }
    if(password.match(/[!@#$%^&*]/)!=null){
        setValidSpecial(true)
        valid('specialChar','faCheck','faCross')

    }
    else{
        setValidSpecial(false)
        invalid('specialChar','faCheck','faCross')

    }
    
  }
  const [show,setShow]=useState(false)
  const handleShowHide=()=>{
    //DO SOMETHING
    setShow(!show)
  }
    return (
        <div >
            
            <div className='form-body'>
            <form action="" className='form' onSubmit={handleSubmit}>
            <h1 style={{color:'lightgrey'}}>Start Your 15 Days Free Trial</h1>
            <div>
                
               
                <input type="text" placeholder='Username' name='username' value={formValues.username} onChange={handleChange} />
                <p className='errors'>{formErrors.username}</p>
                </div>
            <div>
                
            
                <input type="text" placeholder='Email' name='email' value={formValues.email} onChange={handleChange}/>
                <p className='errors'>{formErrors.email}</p>
                </div>
            <div>
                
                <input type={show?'text':'password'} placeholder='Password' className='password' value={formValues.password}name='password'onChange={e=>{handleInputChange(e);handleChange(e)}} />
                {
                    show?(<FontAwesomeIcon id='show-hide' icon={faEye} onClick={handleShowHide} />):(<FontAwesomeIcon id='show-hide' icon={faEyeSlash} onClick={handleShowHide} />)
                }
                <p className='errors'>{formErrors.password}</p>
                </div>
            
            <div className='validations'>
                <div  id='status'>
                    {
                        isValidPassword?(<FontAwesomeIcon className='faCheck icon' icon={faCheckCircle} />):(<FontAwesomeIcon className='faCross icon' icon={faTimesCircle}/>)
                    }
                 
                
                   <span>Password status:</span> 
                    </div>
                <div id='capital'>
                {
                        isValidCapital?(<FontAwesomeIcon className='faCheck icon' icon={faCheckCircle} />):(<FontAwesomeIcon className='faCross icon' icon={faTimesCircle}/>)
                    }
                <span> Atleast contain one Uppercase</span>
                </div>
                <div id='small'>
                {
                        isValidSmall?(<FontAwesomeIcon className='faCheck icon' icon={faCheckCircle} />):(<FontAwesomeIcon className='faCross icon' icon={faTimesCircle}/>)
                    }
                <span>Atleast contain one lowercase</span>
                </div>
                <div id='specialChar'>
                {
                        isValidSpecial?(<FontAwesomeIcon className='faCheck icon' icon={faCheckCircle} />):(<FontAwesomeIcon className='faCross icon' icon={faTimesCircle}/>)
                    }
                    <span>Atleast one special character</span>
                    </div>
                <div id='number'>
                {
                        isValidNumber?(<FontAwesomeIcon className='faCheck icon' icon={faCheckCircle} />):(<FontAwesomeIcon className='faCross icon' icon={faTimesCircle}/>)
                    }
                    <span>Atleast one number</span>
                    </div>
                <div id='length'>
                {
                        isValidPasswordlength?(<FontAwesomeIcon className='faCheck icon' icon={faCheckCircle} />):(<FontAwesomeIcon className='faCross icon' icon={faTimesCircle}/>)
                    }
                    <span>Length should be more than 8</span>
                    </div>
            </div>

            <input type="submit" name="submit" className='submit-button' value="Create Account" />
            </form>
            </div>
        </div>
    );
};

export default Form;