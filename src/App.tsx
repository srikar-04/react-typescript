import './App.css'
import Button from './components/Button'
import { useState } from 'react'

function App() {

  const [loggedIn, setLoggedIn] = useState<string | null>(null)
  setLoggedIn('srikar')

  return (
    <>
      <main className='bg-gray-800 text-white h-screen w-full'>
        <div className='pt-8 pl-8'>
          <h1>Simple button component with prop containing type inference</h1>
          <Button content = 'click me' />
          {loggedIn ? null : null}
        </div>
      </main>
    </>
  )
}

export default App
