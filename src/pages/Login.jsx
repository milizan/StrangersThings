import { useState } from "react"
import AuthForm from '../components/AuthForm';

export default function Login({setToken}) {
    // Sign up with correct username and password
    // Create a new post
    return (
        <div>
           <h1>Login</h1>
            <AuthForm buttonText="login" setToken={setToken} />
        </div>
    )
}