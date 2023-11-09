import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './Auth.css'
import icon from '../../assets/ques4.svg'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'
const Auth = () => {

    const [isSignup, setIsSignup] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userType, setUserType] = useState('');
    const [secretKey, setSecretKey] = useState('');

    const dispatch = useDispatch()  
    const navigate = useNavigate()

    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }

    const handleSubmit = (e) => {
        if(userType === "Admin" && secretKey !== "SandeepLS"){
            e.preventDefault();
            alert("Invalid Admin")
        } else {
            
        e.preventDefault()
        if(!email && !password){
            alert('Enter email and password')
        }
        if(email && password){
            alert('Fetching...!')
        }
        if(isSignup){
            if(!name){
                alert("Enter a name to continue")
            }
            dispatch(signup({ name, email, password, userType, }, navigate))
        }else{
            dispatch(login({ email, password }, navigate))
        }
    }
    }

    return (
        <section class='auth-section'>
            { isSignup && <AboutAuth />}
            <div class='auth-container-2'>
                { !isSignup && <img src={icon} alt='stack overflow' width="55" className='login-logo'/>}

                <form onSubmit={handleSubmit}>
                { !isSignup && <h3 className='si'>Sign In</h3>}
                    { isSignup && <h3 className='ss'>Sign Up</h3>}
                    { isSignup && 
                        <div>Register As:-
                            <input type="radio"
                                name="UserType"
                                value="User"
                                onChange={(e) => setUserType(e.target.value)}
                            />
                            User
                            <input 
                                type="radio"
                                name="UserType"
                                value="Admin"
                                onChange={(e) => setUserType(e.target.value)}
                            />
                            Admin
                        </div>
                    }
                    
                    {userType === 'Admin' ? (
                            <label htmlFor='name'>
                             <h4 style={{marginTop:"12px", marginBottom:"4px"}}>Secret Key</h4>
                             <input type="text" id='name' name='name' onChange={(e) => {setSecretKey(e.target.value)}}/>
                            </label>
                    ):null}
                   
                    
                    {
                        isSignup && (
                            <label htmlFor='name'>
                                <h4 style={{marginTop:"12px", marginBottom:"7px"}}>Display Name</h4>
                                <input type="text" id='name' name='name' onChange={(e) => {setName(e.target.value)}}/>
                            </label>
                        )
                    }
                    <label htmlFor="email">
                        <h4 style={{marginTop:"12px", marginBottom:"6px"}}>Email</h4>
                        <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
                    </label>
                    <label htmlFor="password">
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <h4 style={{marginTop:"", marginBottom:"2px"}}>Password</h4>
                            { !isSignup && <p style={{ color: "#007ac6", fontSize:'13px'}}>forgot password?</p> }
                        </div>
                        <input type="password" name='password' id='password' onChange={(e) => {setPassword(e.target.value)}}/>
                        {/* { isSignup && <p style={{ color: "#666767", fontSize:"13px"}}>Passwords must contain at least eight<br />characters, including at least 1 letter and 1<br /> number.</p> } */}
                    </label>
                    {/* {
                        isSignup && (
                            <label htmlFor='check' className='check'>
                                <input type="checkbox" id='check'/>
                                <p style={{ fontSize:"13px"}}>Opt-in to receive occasional,<br />product updates, user research invitations,<br />company announcements, and digests.</p>
                            </label>
                        )
                    } */}
                    <button type='submit' className='auth-btn'>{ isSignup ? 'Sign up': 'Log in'}</button>
                    {
                        isSignup && (
                            <p style={{ color: "#666767", fontSize:"13px"}}>
                                By clicking “Sign up”, you agree to our 
                                <span style={{ color: "#007ac6"}}> terms of<br /> service</span>,
                                <span style={{ color: "#007ac6"}}> privacy policy</span> and 
                                <span style={{ color: "#007ac6"}}> cookie policy</span>
                            </p>
                        )
                    }
                </form>
                <p>
                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? "Log in" : 'sign up'}</button>
                </p>
            </div>
        </section>
    )
}

export default Auth
