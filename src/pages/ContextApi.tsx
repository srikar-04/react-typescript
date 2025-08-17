import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
import UserContextProvider from '../Context/UserContextProvider'

function ContextApi() {
    const context = useContext(UserContext)
  return (
    <UserContextProvider>
        <div>{`this is the user ${context?.user}`}</div>
    </UserContextProvider>
  )
}

export default ContextApi