import React, { useState } from 'reactn';
import axios from 'axios'
import { isLogin } from 'helpers/auth'

const CHANGE_PASS_URL = 'http://127.0.0.1:5000/changePass'

const ChangePass = props => {
    if (!isLogin()) props.history.push('/login')
    const [form, setFormInfo] = useState({
        username: '',
        password: '',
        newpassword: ''
    })

    const [res, resMessage] = useState('')

    const resetPass = async () => {
        resMessage(res => res = '')
        if (!form.username || !form.password || !form.newpassword) 
            resMessage(res => res = 'All fields required!')
        else 
            if (form.password === form.newpassword) 
                resMessage(res => res = 'Old password and new password must be different!')
            else {
                const result = await axios.post(CHANGE_PASS_URL, {
                    username: form.username,
                    password: form.password,
                    newpassword: form.newpassword
                })
                if (result) resMessage(res => res = result.data.message)
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
                <input type="text" name="username" autoFocus autoComplete="off" value={form.username} onChange={updateField} />
            </div>

            <div>
                <label htmlFor="">Password</label>
                <input type="password" name="password" autoComplete="off" value={form.password} onChange={updateField} />
                <br />
            </div>

            <div>
                <label htmlFor="">New password</label>
                <input type="password" name="newpassword" autoComplete="off" value={form.newpassword} onChange={updateField} />
                <br />
            </div>

            <pre>{res}</pre>

            <div>
                <button onClick={resetPass}>Change Password</button>
                <button onClick={() => props.history.push('/home')}>Back to Homepage</button>
            </div>
        </div>
    )
}

export default ChangePass;

