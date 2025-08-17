import UserContextProvider from '../Context/UserContextProvider'
import Login from '../components/context-components/Login'
import Profile from '../components/context-components/Profile'

function ContextApi() {
  return (
    <UserContextProvider>
        <Login />
        <Profile />
    </UserContextProvider>
  )
}

export default ContextApi