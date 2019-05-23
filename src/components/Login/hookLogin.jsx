
import React, { useState, useGlobal } from 'reactn';


const hookLogin = props => {
    // handle username
    const [username, setUsername] = useState('')
    const [messageUsername, setUsernameMessage] = useState('')

    const handleUsernameInput = (event) => {
        let input = event.target.value;
        let regexTV = /^[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/
        let regexSpace = /\s+/g
        if (!input) {
            setUsernameMessage(messageUsername => messageUsername = "ko dc de trong")
        }
        else {
            if (input.length < 6 || regexTV.test(input) || regexSpace.test(input)) {                
                setUsernameMessage(messageUsername => messageUsername = "gom 6 ky tu viet thuong tro len, viet lien ko dau")
            }
            else {
                setUsername(username => username = input)
                setUsernameMessage(messageUsername => messageUsername = '')
            }
        }
    }
    //handle password
    const [password, setPassword] = useState('')
    const [messagePassword, setPasswordMessage] = useState('')

    const handlePasswordInput = event => {
        let input = event.target.value;
        let regexCapital = /^[a-zA-Z0-9]+$/
        if (!input) setPasswordMessage(messagePassword => messagePassword = "ko dc de trong")
        else {
            if (input.length < 8 || /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(input) != true) {          
                setPasswordMessage(messagePassword => messagePassword = "gom it nhat 1 chu thuong 1 chu hoa 1 chu so")
                return
            }
            else {
                setPassword(password => password = input)
                setPasswordMessage(messagePassword => messagePassword = '')
            }
        }
    }

    return (
        <div>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" autoFocus autoComplete="off" name="username" onChange={(event) => handleUsernameInput(event)} />
                <br />
                <span>
                    {messageUsername && <b>{messageUsername}</b>}
                </span>
            </div>

            <div>
                <label htmlFor="">Password</label>
                <input type="password" autoComplete="off" name="username" onChange={(event) => handlePasswordInput(event)} />
                <br />
                <span>
                    {messagePassword && <b>{messagePassword }</b>}
                </span>
            </div>

            <button onClick={() => {
                (messageUsername || messagePassword) ? console.log('input k hop le') : console.log({username}, {password})
            }}>send</button>
        </div>
    )
}

export default hookLogin;

