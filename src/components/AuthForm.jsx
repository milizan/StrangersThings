import { useState } from "react";

export default function AuthForm({ buttonText, setToken }){
    try {
    const [ username, setUsername] = useState('')
    const [ password, setPassword] = useState('')


    const url=`https://strangers-things.herokuapp.com/api/2302-ACC-PT-WEB-PT-A/users/${buttonText}`;
    console.log("THIS IS THE URL");
    console.log(url);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                  },}),
        });
        const result = await response.json();
        console.log(result);
        localStorage.setItem("token",result.data.token);
        setToken(result.data.token);
        console.log(result.data.token);

    }
    return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <p>
                <label htmlFor="password">Password</label>
                <input 
                type="text" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                </p>
                <button type="submit">{buttonText}</button>
            </form>
    )
    }
    catch (error) {
        console.log(error);
    }
}