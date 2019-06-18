import React, { useGlobal } from 'reactn';
import { isLogin } from 'helpers/auth'

const Home = (props) => {
  if (!isLogin()) props.history.push('/login')
  const [username] = useGlobal('username');

  const handleLogout = () => {
    localStorage.clear()
    props.history.push('/login')
  }

  return (
    <div>
      <br />
      <b>Login successfully!! Welcome back, {username}</b>
      <br />
      <br />
      <button onClick={() => props.history.push('/update')}>Change password</button>
      <button onClick={() => handleLogout()}>Log out</button>
    </div>
  )
}


export default Home;

