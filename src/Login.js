import React, {useState} from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { auth } from "./firebase"


function Login() {
const history = useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const singIn = e => {
    e.preventDefault();
        //firebase login
    auth.signInWithEmailAndPassword(email, password)
    .then(auth => {
        history.push('/')
    })
    .catch(error => alert(error.message))
}

const register = e => {
    e.preventDefault();
        //firebase register
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
        //success
        console.log(auth);
        if (auth) {
            history.push('/')
        }
    })
    .catch(error => alert(error.message))
}

    return (
        <div className="login">
            <Link to="/">
              <FontAwesomeIcon icon={faStoreAlt} className= "login__icon"/>
            {/* <img src=""/> */}
            </Link>

            <div className="login__container">
                <h1>Sing In</h1>
                <form>
                    <h6>E-mail</h6>
                    <input type='text' value={email} onChange=
                    {e => setEmail(e.target.value)} />

                    <h6>Password</h6>
                    <input type='password' value={password} onChange=
                    {e => setPassword(e.target.value)} />

                    <Button type='submit' onClick={singIn} className="login__singinButton" size="sm">Sign In</Button>                   
                </form>
                <p>By singing-in you agree to the Store 
                            Terms and Conditions of Use & Sale</p>

                <Button onClick={register} className="login__registerButton" variant="secondary" size="sm">Create Account</Button> 
            </div>
        </div>
    )
}

export default Login
