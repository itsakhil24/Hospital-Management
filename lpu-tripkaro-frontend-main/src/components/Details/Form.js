import React, {useState} from 'react'
import './Form.css'
import {useNavigate} from 'react-router-dom'

const Form = ({data, userInfo, setUserInfo}) => {

    const navigation = useNavigate()

    const [noOfPerson, setNoOfPerson] = useState(1)

    const [date, setDate] = useState("")   

    const bookingHandler = ()=>{
        
        // TODO : user is signin or not. If found signin then continue with booking
        if(userInfo.isSignin){

        }else{
            // TODO : If user is not signin, redirect to signin screen
            navigation("/signin")
        }

        
    }

    return (
        <div id='form-container'> 

            <div className='form-field'>
                <label>Pick a date</label>
                <input onChange={(e)=>{setDate(e.target.value)}} type="date"/>
            </div>  

            <div className='form-field'>
            {date}
            <label>Select Persons</label>
            <br/>
            <span>Per Person Cost : {data.costPerHead} INR</span>
            <input value={noOfPerson} min={1} max={4} onChange={(e)=>{
                setNoOfPerson(e.target.value)
            }} type="number"/>
            </div>

            <div className='form-field'>
                <span>Total : {noOfPerson * data.costPerHead} INR</span>
            </div> 

            <div>
                <button onClick={bookingHandler}>Book Adventure</button>
            </div>

        </div>
    )

}

export default Form