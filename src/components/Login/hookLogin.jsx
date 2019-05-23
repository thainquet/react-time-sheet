
import React, { useState, useGlobal } from 'reactn';


const hookLogin = props => {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')

    const handleInput = (event) => {
        let input = event.target.value;
        if (!input) {
            setMessage(message => message = "ko dc de trong")
            console.log(message)
        }
        else {
            if (input.length < 6) {
                setMessage(message => message= "ten k hop le")
                console.log(message)
            }
            else setUsername(username => username = input)
        } 
    }

    return (
        <div>
            <label htmlFor="">Username</label>
            <input type="text" autoFocus autoComplete="off" name="username" onBlur={(event) => handleInput(event)}/>
            <br/>
            <label htmlFor="">Password</label>
            <input type="text" autoComplete="off" name="username" onBlur={(event) => handleInput(event)}/>
            <br/>
            <button onClick={() => {
                if (!message) console.log({username})
                else console.log(message)
            }}>send</button>
        </div>
    )
}

export default hookLogin;

