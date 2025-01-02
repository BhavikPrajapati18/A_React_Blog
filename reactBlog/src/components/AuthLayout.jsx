import React from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { useEffect , useState } from 'react'

function Protected({children , authentication = true }) {
  const navigate = useNavigate()
  const [loder , setLoder] = useState(true)
  const authStatus = useSelector(state => state.auth.status)

  useEffect(() => {
    if (authentication && authentication !== authStatus) {
      navigate('/login')      
    } else if (authentication && authentication !== authStatus) {
      navigate('/')
    }
  } , [authStatus, navigate , authentication])

  return loder ? <h1>Loading...</h1> : {children} 
}

export default Protected
