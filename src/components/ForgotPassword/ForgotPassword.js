
import React, { useState } from 'reactn'
import { authServices } from 'services'

const ForgotPass = props => {
    const { initFormParams = {
        username: '',
        email: ''
      } } = props;
    const [form, setFormInfo] = useState(initFormParams)

    const [res, resMessage] = useState('')

    const resetPass = async () => {
        resMessage(res => res = '')
        if (!form.username || !form.email) 
            resMessage(res => res = 'All fields required!')
        else {
            const params = {
                username: form.username,
                email: form.email
            }
            const reset = await authServices.forgotPassword(params)
            if (reset) resMessage(res => res = reset.data.message)  
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
                <label htmlFor="">Email</label>
                <input type="text" name="email" autoComplete="off" value={form.email} onChange={updateField} />
                <br />
            </div>
            <pre>{res}</pre>
            <button onClick={() => resetPass()} id="forgot-pass-btn">Reset Password</button>
            <button onClick={() => props.history.push('/login')} id="login-btn">Login page</button>
        </div>
    )
}

export default ForgotPass;

