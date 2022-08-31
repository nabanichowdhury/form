import { faCheckCircle, faEye, faEyeSlash, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import './Form.css';



const Form = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  //handle if valid
  const valid=(item,v_icon,inv_icon)=>{
    let text=document.querySelector(`#${item}`)
    text.style.color='green';

    let valid_icon=document.querySelector(`#${item}.${v_icon}`)
    // valid_icon.style.color='green';

    let invalid_icon=document.querySelector(`#${item}.${inv_icon}`)
    invalid_icon.style.opacity='0'

  }
  //handle if invalid
  const invalid=(item,v_icon,inv_icon)=>{
    let text=document.querySelector(`#${item}`)
    text.style.color='red';

    let valid_icon=document.querySelector(`#${item}.${v_icon}`)
    
    valid_icon.style.display='hidden';

    let invalid_icon=document.querySelector(`#${item}.${inv_icon}`)
    invalid_icon.style.display='inline'
   
    

  }
  //handle input
  const handleInputChange=e=>{
    const password=(e.target.value);
    
    if(password.match(/[A-Z]/)!=null ){
        valid('capital','faCheck','faCross')
    }else{
        invalid('capital','faCheck','faCross')
    }
    if(password.match(/[a-z]/)!= null){
        valid('small','faCheck','faCross')
    }else{
        invalid('small','faCheck','faCross')
    }
    
    if(password.match(/[0-9]/)!= null){
        valid('number','faCheck','faCross')
    }
    else{
        invalid('number','faCheck','faCross') 
    }
    if(password.length()>8){
        valid('length','faCheck','faCross')
    }else{
        invalid('length','faCheck','faCross')
    }
    if(password.match(/[!@#$%^&*]/)!=null){
        valid('specialChar','faCheck','faCross')

    }
    else{
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
            <h1 style={{color:'lightgrey'}}>Start Your 15 Days Free Trial</h1>
            <div className='form-body'>
            <form action="" className='form'>
            <div>
                <label htmlFor=""></label>
                <input type="text" /></div>
            <div>
                <label htmlFor="">

            </label>
                <input type="text" /></div>
            <div>
                <label htmlFor=""></label>
                <input type={show?'text':'password'} placeholder='Password' className='password' onChange={handleInputChange} />
                {
                    show?(<FontAwesomeIcon id='show-hide' icon={faEye} onClick={handleShowHide} />):(<FontAwesomeIcon id='show-hide' icon={faEyeSlash} onClick={handleShowHide} />)
                }
                </div>
            </form>
            <div className='validations'>
                <div  id='status'>
                <FontAwesomeIcon className='faCross icon' icon={faTimesCircle} />
                <FontAwesomeIcon className='faCheck icon' icon={faCheckCircle} />
                   <span>Password status:</span> 
                    </div>
                <div id='capital'>
                <FontAwesomeIcon  className='faCross icon' icon={faTimesCircle} />
                <FontAwesomeIcon className='faCheck icon' icon={faCheckCircle} />
                <span> Atleast contain one Uppercase</span>
                </div>
                <div id='small'>
                <FontAwesomeIcon className='faCross icon' icon={faTimesCircle} />
                <FontAwesomeIcon className='faCheck icon' icon={faCheckCircle} />
                <span>Atleast contain one lowercase</span>
                </div>
                <div id='specialChar'>
                <FontAwesomeIcon className='faCross icon' icon={faTimesCircle} />
                    <FontAwesomeIcon className='faCheck icon' icon={faCheckCircle} />
                    <span>Atleast one special character</span>
                    </div>
                <div id='number'>
                <FontAwesomeIcon className='faCross icon' icon={faTimesCircle} />
                    <FontAwesomeIcon className='faCheck icon' icon={faCheckCircle} />
                    <span>Atleast one number</span>
                    </div>
                <div id='length'>
                <FontAwesomeIcon className='faCross icon' icon={faTimesCircle} />
                    <FontAwesomeIcon className='faCheck icon' icon={faCheckCircle} />
                    <span>Length should be more than 8</span>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Form;