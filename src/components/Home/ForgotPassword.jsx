
import React, { useState } from 'reactn'
import axios from 'axios'
import { withRouter } from 'react-router'

const RESET_PASS_URL = 'http://127.0.0.1:5000/forgotPass'

const ChangePass = props => {
    const [form, setFormInfo] = useState({
        username: '',
        email: ''
    })

    const [res, resMessage] = useState('')

    const resetPass = async () => {
        resMessage(res => res = '')
        const reset = await axios.post(RESET_PASS_URL, {
            username: form.username,
            email: form.email
        })
        if (reset) resMessage(res => res = reset.data.message)
        
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
            <pre>{res}</pre>
            <button onClick={resetPass}>Reset Password</button>
            <button onClick={() => props.history.push('/login')}>Login page</button>
        </div>
    )
}

export default withRouter(ChangePass);

