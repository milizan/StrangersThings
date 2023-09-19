import { useState } from "react"
import AuthForm from "../components/AuthForm"

export default function Register({setToken}) {
    // Sign up for an account with username and password
    return (
        <div>
            <h1>Register</h1>
            <AuthForm buttonText="register" setToken={setToken}/>
        </div>
    )
}