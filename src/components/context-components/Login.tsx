import React, { useContext, useState } from 'react'
import UserContext from '../../Context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const context = useContext(UserContext)

    if(!context) throw new Error('Login must be within context provider')

    const {setUser} = context

    // const setUser = context?.setUser

    const handleSumbit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h2>Login Page</h2>
        <input 
            onChange={(e) => setUsername(e.target.value)} 
            type="text"  
            value={username}
        />

        <input 
            onChange={(e) => setPassword(e.target.value)} 
            type="text" 
            value={password} 
        />

        <button onClick={(e) => handleSumbit(e)}>Submit</button>
    </div>
  )
}

export default Login