import { NavLink, Outlet } from 'react-router'

function RootLayout() {

    // HEADER + OUTLET -> INDEX = CONTACTS LIST

  return (
    <>
      <div className='p-8 flex items-center justify-center flex-col gap-3'>
        <header className='bg-amber-100 p-3 rounded-lg'>
          <h1 className='font-bold text-xl mb-2'>
            Welcome to mini-contacts where you can do crud operations on your contacts
          </h1>
          <ul className='flex justify-between items-center font-medium text-gray-700'>
            <li>
              <NavLink 
                to={'/'}
                className={({isActive}) => `${isActive ? 'text-orange-700' : 'text-gray-700'}` }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={'/new'}
                className={({isActive}) => `${isActive ? 'text-orange-700' : 'text-gray-700'}` }
              >
                Create Contact
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={'/:id/edit'}
                className={({isActive}) => `${isActive ? 'text-orange-700' : 'text-gray-700'}` }
              >
                Edit Contact
              </NavLink>
            </li>
          </ul>
        </header>
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout