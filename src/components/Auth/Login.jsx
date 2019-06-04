
import React, {useState} from 'reactn';
import { withRouter } from 'react-router'
import axios from 'axios'

const LOGIN_URL = "http://127.0.0.1:5000/login"
const AUTHENTICATED = localStorage.getItem('auth')

const Login = (props) => {
    if (AUTHENTICATED) props.history.push('/home')
    const [form, setFormInfo] = useState({
        username: '',
        password: ''
    })

    const Login = async (event) => {
        event.preventDefault();
        
        const login = await axios.post(LOGIN_URL, {
                username: form.username,
                password: form.password
        })

        if (login.data.stt === 200) {
            localStorage.setItem('auth', true)
            localStorage.setItem('username', form.username)
            window.location.href = '/home'
        } else {
            localStorage.setItem('auth', false)
        }

    }

    const updateField = event => {
        setFormInfo({
          ...form,
          [event.target.name]: event.target.value
        });
      };

    const register = () => {
        props.history.push("/register")
    }

    return (
        <div>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" name="username" autoFocus autoComplete="off" value={ form.username } onChange={updateField}/>
            </div>

            <div>
                <label htmlFor="">Password</label>
                <input type="password" name="password" autoComplete="off" value={ form.password } onChange={updateField}/>
                <br />
            </div>

            <button onClick={Login}>Dang nhap</button>

            <div>
                <button onClick={() => props.history.push("/register")}>Dang ky</button>
                <button onClick={() => props.history.push("/forgot")}>Quen mat khau</button>
            </div>
        </div>
    )
}

export default withRouter(Login);

