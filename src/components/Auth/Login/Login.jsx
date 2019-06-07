
import React, { useState, setGlobal } from 'reactn';
// import { withRouter } from 'react-router'
import { isLogin } from 'helpers/auth'
import { authServices } from 'services'

const Login = (props) => {
  const { initFormParams = { username: '', password: '' } } = props;
  if (isLogin())
    props.history.push('/home')

  const [form, setFormInfo] = useState(initFormParams);

  const [res, resMessage] = useState('')

  const handleLogin = async (event) => {
    if (!form.username || !form.password)
      resMessage(res => res = 'All fields required!')
    else {
      const params = {
        username: form.username,
        password: form.password
      }
      const result = await authServices.login(params)

      resMessage(res => res = result.data.message)

      if (result.data.code === 200) {
        setGlobal({ username: form.username });
        localStorage.setItem('auth', true)
        localStorage.setItem('setupTime', new Date().getTime())
        props.history.push('/home');
      } else {
        localStorage.setItem('auth', false)
      }
    }
  }

  const updateField = event => {
    resMessage(res => res = '')
    setFormInfo({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handlePress = event => {
    if (event.key === 'Enter') handleLogin();
  }

  return (
    <>
      <div>
        <label htmlFor="">Username</label>
        <input id="username" type="text" name="username" autoFocus autoComplete="off" value={form.username} onChange={updateField} />
      </div>

      <div>
        <label htmlFor="">Password</label>
        <input id="password" type="password" name="password" autoComplete="off" value={form.password} onChange={updateField} onKeyPress={handlePress} />
        <br />
      </div>

      <pre>{res}</pre>

      <button id="login-btn" onClick={handleLogin} >Dang nhap</button>

      <div>
        <button onClick={() => props.history.push("/register")}>Dang ky</button>
        <button onClick={() => props.history.push("/forgot")}>Quen mat khau</button>
      </div>
    </>
  )
}

export default Login;

