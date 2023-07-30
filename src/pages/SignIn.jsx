import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { app } from '../firebase';

const auth = getAuth(app)
const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, password).then(res => console.log('Sign In Success')).catch(err => alert(err))
    }
  return (
    <div>
        <h1>Sign In Page</h1>
        <div>
            <label>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter Your Email ...' />
        </div>
        <div>
            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Enter Your Password ...' />
        </div>
        <button onClick={signInUser}>Sign In</button>
    </div>
  )
}

export default SignIn