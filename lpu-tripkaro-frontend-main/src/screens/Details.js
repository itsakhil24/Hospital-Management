import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import "./Details.css"

import Description from '../components/Details/Description'
import Form from '../components/Details/Form'

import config from "./../config"

const {BASE_API_URL} = config

const Details = ({userInfo, setUserInfo}) => {

  const {id} = useParams()

  const [data, setData] = useState({})

  // Call API
  useEffect(()=>{
    const API_ENDPOINT = `${BASE_API_URL}/details?id=${id}`
    fetch(API_ENDPOINT).then((res)=>res.json()).then((APIData)=>{
      const {data} = APIData
      setData(data)
    })
  },[])

  return (
    <div>
      {
        Object.keys(data).length && 
        
        <div id='container'>

          <Description data={data}/>

          <div>
            {!data.available &&
            <h1 className='sold-out'>Sold Out!</h1>
            }
            {
              data.available &&
              <Form userInfo={userInfo} setUserInfo={setUserInfo} data={data}/>              
            }
          </div>
          
        </div>

      }
    </div>
  )

}

export default Details