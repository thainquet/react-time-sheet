
import React, { useState } from 'reactn';
import { withRouter } from 'react-router'


const Register = (props) => {
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
    if (!input) setPasswordMessage(messagePassword => messagePassword = "ko dc de trong")
    else {
      if (input.length < 8 || /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(input) !== true) {
        setPasswordMessage(messagePassword => messagePassword = "gom it nhat 1 chu thuong 1 chu hoa 1 chu so")
        return
      }
      else {
        setPassword(password => password = input)
        setPasswordMessage(messagePassword => messagePassword = '')
      }
    }
  }
  // handle email
  const [email, setEmail] = useState('')
  const [emailMessage, setEmailMessage] = useState('')

  const handleEmailInput = event => {
    let input = event.target.value;
    let regexEmail = /^[a-z0-9_.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
    if (!input) setEmailMessage(emailMessage => emailMessage = "ko dc de trong")
    else {
      if (regexEmail.test(input) !== true) setEmailMessage(emailMessage => emailMessage = "mail ko hop le")
      else {
        setEmail(email => email = input)
        setEmailMessage(emailMessage => emailMessage = "")
      }
    }
  }

  const handleToLoginForm = () => {
    props.history.push('/login')
  }

  const handleRegister = () => {
    (messageUsername || messagePassword || emailMessage) ? console.log('input k hop le') : console.log({ username }, { password }, { email })
  }

  return (
    <div>
      <div>
        <label htmlFor="">Username</label>
        <input type="text" autoFocus autoComplete="off" name="username" onChange={(event) => handleUsernameInput(event)} />
        <br />
        <pre>
          {messageUsername && <b>{messageUsername}</b>}
        </pre>
      </div>

      <div>
        <label htmlFor="">Password</label>
        <input type="password" autoComplete="off" name="password" onChange={(event) => handlePasswordInput(event)} />
        <br />
        <pre>
          {messagePassword && <b>{messagePassword}</b>}
        </pre>
      </div>

      <div>
        <label htmlFor="">Email</label>
        <input type="text" autoComplete="off" name="email" onChange={(event) => handleEmailInput(event)} />
        <br />
        <pre>
          {emailMessage && <b>{emailMessage}</b>}
        </pre>
      </div>

      <button onClick={() => handleRegister}>Dang ky</button>

      <div>
        <button onClick={handleToLoginForm}>Dang nhap</button>
      </div>
    </div>
  )
}

export default withRouter(Register);

