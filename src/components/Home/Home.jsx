import React from 'react';
const AUTHENTICATED = localStorage.getItem('auth')

const Home = props => {
  if (AUTHENTICATED === 'false') {
    props.history.push('/login')
    return;
  }
  let username = localStorage.getItem("username")

  // const [data, setResponseData] = useState([])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get(BASE_URL)
  //     await setResponseData(result.data)
  //   }
  //   fetchData();
  //   console.log(data)
  // }, [])

  const handleLogout = () => {
    localStorage.removeItem("auth")
    localStorage.removeItem("username")
    localStorage.removeItem("token")
    window.location.href = '/login'
  }

  return (
    <div>
      <br />
      <b>Login successfully!! Welcome back, {username}</b>
      <br />
      <br />
      <button onClick={() => window.location.href = '/update'}>Change password</button>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}


export default Home;

