
import React, { useState } from 'reactn';
import { Link } from 'react-router-dom'
import axios from 'axios'

const RESET_PASS_URL = 'http://127.0.0.1:5000/forgotPass'

const ChangePass = props => {
    const [form, setFormInfo] = useState({
        username: '',
        password: '',
        newpassword: ''
    })

    // const [res, resMessage] = useState('')

    const resetPass = async () => {
        await axios.post(RESET_PASS_URL, {
            username: form.username,
            password: form.password
        })
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
                <input type="text" name="username" autoFocus autoComplete="off" value={form.username} onChange={updateField} />
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="text" name="email" autoComplete="off" value={form.email} onChange={updateField} />
                <br />
            </div>

            <button onClick={resetPass}><Link to="/home">Reset Password</Link></button>

            <div>
                <button></button>
            </div>
        </div>
    )
}

export default ChangePass;

