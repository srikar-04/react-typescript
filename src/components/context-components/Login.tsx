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
    <div className='flex flex-col gap-6 items-center justify-center mt-3 bg-zinc-700 p-8 text-white'>
        <div>
            <label htmlFor="name">Name : </label>
            <input 
                onChange={(e) => setUsername(e.target.value)} 
                type="text"  
                value={username}
                placeholder='name'
                className='text-white border-blue-500 border rounded-lg px-2'
            />
        </div>

        <div>
            <label htmlFor="password">Password : </label>
            <input 
                onChange={(e) => setPassword(e.target.value)} 
                type="text" 
                value={password} 
                placeholder='password'
                className='text-white border-blue-500 border rounded-lg px-2'
            />
        </div>

        <button className='px-3 py-2 text-white font-semibold bg-blue-500 rounded-md cursor-pointer' onClick={(e) => handleSumbit(e)}>Submit</button>
    </div>
  )
}

export default Login