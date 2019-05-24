import  React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

const BASE_URL = "http://127.0.0.1:5000/allUser"

const Home = props => {
  let username = localStorage.getItem("username")
  
  const [data, setResponseData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(BASE_URL)
      await setResponseData(result.data)

      console.log(data)
    }

    fetchData();
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("username")
  }

  return (
    <div>
      hello { username }
      <br/>
      <button><Link to="/update">doi mat khau</Link></button>
      <button onClick={handleLogout}><Link to="/login">Log out</Link></button>
    </div>
  )
}


export default Home;

