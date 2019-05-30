
import React, {useState} from 'reactn';
import { Link } from 'react-router-dom'
import axios from 'axios'

const LOGIN_URL = "http://127.0.0.1:5000/login"

const Login = props => {
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
        console.log(login)
        if (login.data.stt === 200) {
            localStorage.setItem('auth', true)
            localStorage.setItem('username', form.username)
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

            <button onClick={Login}><Link to="/home">Dang nhap</Link></button>

            <div>
                <Link to="/register">Dang ky</Link>
            </div>
        </div>
    )
}

export default Login;

