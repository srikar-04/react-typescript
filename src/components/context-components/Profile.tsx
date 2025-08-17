import { useContext } from "react"
import UserContext from "../../Context/UserContext"


function Profile() {

  const context = useContext(UserContext)

  if(!context) throw new Error('context is null, Profile is not wrapped inside provider')

  const {user} = context

  return (
    <div className="p-8 flex flex-col items-center justify-center gap-6 bg-zinc-700 text-white">
      <h1 className="font-semibold text-xl">{`username: ${ user ? user.username : 'usename to be entered'}`}</h1>
      <h1 className="font-semibold text-xl">{`password: ${user ? user.password : 'password to be entered'}`}</h1>
    </div>
  )
}

export default Profile