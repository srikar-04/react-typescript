import { useState, type ReactNode } from 'react'
import UserContext from './UserContext'
import type { User } from '../lib/types'

function UserContextProvider({children}: {children: ReactNode}) {
    const [user, setUser] = useState<User | null>(null)
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider