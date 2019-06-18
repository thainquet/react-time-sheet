
import React, { useState } from 'reactn';
import { authServices } from 'services'

const Register = (props) => {
  const { 
    initParams = { username: '', password: '', email: '' },
    initMessage = { messageUsername: '', messagePassword: '', emailMessage: '' }
 } = props;
  // handle username
  const [username, setUsername] = useState(initParams.username)
  const [messageUsername, setUsernameMessage] = useState(initMessage.messageUsername)

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
  const [password, setPassword] = useState(initParams.password)
  const [messagePassword, setPasswordMessage] = useState(initMessage.messagePassword)

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
  const [email, setEmail] = useState(initParams.email)
  const [emailMessage, setEmailMessage] = useState(initMessage.emailMessage)

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

  const [res, resMessage] = useState('')

  const handleRegister = async () => {
    if (!username || !email || !password) {
      resMessage(res => res = "all fields required")
    }
    else 
      if (messageUsername || messagePassword || emailMessage) {
        resMessage(res => res = 'input k hop le')
        setEmail(email => email = '')
        setUsername(username => username = '')
        setPassword(password => password = '')
      }
      else{
        resMessage(res => res = '')
        const params = {
          username,
          password,
          email
        }
        const result = await authServices.register(params)
        resMessage(res => res = result.data.message)
      } 
  }

  const handlePress = event => {
    if (event.key === 'Enter') handleRegister();
  }

  return (
    <div>
      <div>
        <label htmlFor="">Username</label>
        <input type="text" autoFocus autoComplete="off" name="username" value={username} onChange={(event) => handleUsernameInput(event)} />
        <br />
        <pre>
          {messageUsername && <b>{messageUsername}</b>}
        </pre>
      </div>

      <div>
        <label htmlFor="">Password</label>
        <input type="password" autoComplete="off" name="password" value={password} onChange={(event) => handlePasswordInput(event)} />
        <br />
        <pre>
          {messagePassword && <b>{messagePassword}</b>}
        </pre>
      </div>

      <div>
        <label htmlFor="">Email</label>
        <input type="text" autoComplete="off" name="email" value={email} onChange={(event) => handleEmailInput(event)} onKeyPress={handlePress} />
        <br />
        <pre>
          {emailMessage && <b>{emailMessage}</b>}
        </pre>
      </div>

      <button onClick={() => handleRegister()} id="register-btn">Dang ky</button>
      <pre>
        {res && <b>{res}</b>}
      </pre>
      <div>
        <button onClick={() => handleToLoginForm()}>Dang nhap</button>
      </div>
    </div>
  )
}

export default Register

