import { Outlet } from 'react-router'

function RootLayout() {

    // HEADER + OUTLET -> INDEX = CONTACTS LIST

  return (
    <>
        <header>Welcome to mini-contacts where you can do crud operations on your contacts</header>
        <Outlet />
    </>
  )
}

export default RootLayout