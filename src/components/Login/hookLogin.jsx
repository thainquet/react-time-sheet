
import React, { useState, useGlobal } from 'reactn';


const hookLogin = props => {
    const [username, setUsername] = useState('')
    const [messageUsername, setMessage] = useState('')

    const handleInput = (event) => {
        let input = event.target.value;
        if (!input) {
            setMessage(messageUsername => messageUsername = "ko dc de trong")
        }
        else {
            if (input.length < 6) {
                setMessage(messageUsername => messageUsername = "ten k hop le")
            }
            else {
                setUsername(username => username = input)
                setMessage(messageUsername => messageUsername = '')
            }
        }
    }

    return (
        <div>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" autoFocus autoComplete="off" name="username" onBlur={(event) => handleInput(event)} />
                <br />
                <span>
                    {messageUsername && <b>{messageUsername}</b>}
                </span>
            </div>
            {/* <div>
                <label htmlFor="">Password</label>
                <input type="text" autoComplete="off" name="username" onBlur={(event) => handleInput(event)} />
                <br />
                <span>
                    {message && <b>{message}</b>}
                </span>
            </div> */}
            <button onClick={() => {
                messageUsername ? console.log('sai') : console.log({username})
            }}>send</button>
        </div>
    )
}

export default hookLogin;

