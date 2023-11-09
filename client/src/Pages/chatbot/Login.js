// import React, {useState} from 'react'
// import icon from '../../assets/icon.png'
// import axios from 'axios'

// const Login = () => {

//     const [isSignup, setIsSignup] = useState(false)
//     const [otp, setOtp] = useState(Math.floor(Math.random()*1000000))
//     const [email, setEmail] = useState()
    
//     const generateOtp = () => {
//       const options = {
//         method: 'POST',
//         url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
//         headers: {
//           'content-type': 'application/json',
//           'X-RapidAPI-Key': '604d31818amsh9fc0b5582792236p147456jsn8203ecff9d06',
//           'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
//         },
//         data: `{"personalizations":[{"to":[{"email":${email}}],"subject":"OTP from ChatBoat Website"}],"from":{"email":"from_address@example.com"},"content":[{"type":"text/plain","value": Your OTP is ${otp}}]}`
//       };
      
//       axios.request(options).then(function (response) {
//         console.log(response.data);
//       }).catch(function (error) {
//         console.error(error);
//       });
            
//     }
    
//     const handleSwitch = () => {
//       setIsSignup(!isSignup)
//     }

//     const changeEmail = (e) =>{
//       setEmail(e.target.value)
//     }

//   return (

//      <section className='auth-section'>
//       { isSignup }
//     <div className='auth-container-2'>
//       { !isSignup && <img src={icon} alt="icon" className='login-logo'/>}
//       <form>
//         {
//           isSignup && (
//             <label htmlFor="name">
//               <h4>Display Name</h4>
//               <input type="text"  id='name' name='name'/>
//             </label>
//           )
//         }
//         <label htmlFor='phno'>
//           <h4>Email</h4>
//           <input type="text" name='text' value={email} onChange={(e) => changeEmail(e)} id='phno'/>
//         </label>
//         <button type='button' onClick={generateOtp} className='auth-btn'>Generate-otp</button>
//         <label htmlFor='OTP'>
//           <h4>OTP</h4>
//           <input type="number" name='otp' id='otp'/>
//         </label>
//         <button type='submit' className='auth-btn'>Submit</button>
//         {
//           isSignup && (
//             <label htmlFor='check'>
//                 <input type="checkbox" id='check' />
//                 <p style={{ fontSize:"13px"}}>Opt-in to receive occasional,<br />product updates, user research invitations,<br />company announcements, and digests.</p>
//             </label>
//           )
//         }
        
//         {/* <button type='submit' className='auth-btn'>Submit</button> */}
//         {
//           isSignup && (
//             <p style={{color:'#666767' , fontSize:"13px"}}>
//                By clicking “Sign up”, you agree to our 
//               <span style={{color:'#007ac6'}}> terms of <br /></span>
//                <span style={{color:'#007ac6'}}>privacy police </span>and
//                <span style={{color:'#007ac6'}}> cookie police</span>
//             </p>
//           )
//         }
//       </form>
//       {/* <p>
//         {isSignup ? 'already have an account' : "Don't have an account?"}
//         <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? 'Log in' : 'sign up'}</button>
//       </p> */}
//     </div>
//   </section>

//   )
// }

// export default Login