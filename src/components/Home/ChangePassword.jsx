
import React, {useState} from 'reactn';
import { Link } from 'react-router-dom'

const ChangePass = props => {
    const [form, setFormInfo] = useState({
        username: '',
        password: ''
    })

    const PrintInput = (event) => {
        event.preventDefault();
        localStorage.setItem('username', form.username)
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

            <button onClick={PrintInput}><Link to="/home">Dang nhap</Link></button>

            <div>
                <Link to="/register">Dang ky</Link>
            </div>
        </div>
    )
}

export default ChangePass;

