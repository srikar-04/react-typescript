import './App.css'
// import Button from './components/Button'
import { useState } from 'react'

function App() {


  const [color, setColor] = useState('gray')

  return (
    <>
      <div 
        style={{
          backgroundColor: color
        }}
        className='w-full h-screen flex justify-center items-end py-10 px-5'
      >
        <div className='w-full h-fit p-4 border bg-white rounded-2xl flex items-center justify-between text-white'>
          <button 
            className='cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md' 
            onClick={() => setColor(() => 'blue')}
          >
            blue
          </button>
          <button 
            className='cursor-pointer bg-red-500 text-white py-2 px-4 rounded-md' 
            onClick={() => setColor(() => 'red')}
          >
            red
          </button>
          <button 
            className='cursor-pointer bg-yellow-500 text-white py-2 px-4 rounded-md' 
            onClick={() => setColor(() => 'yellow')}
          >
            yellow
          </button>
          <button 
            className='cursor-pointer bg-orange-500 text-white py-2 px-4 rounded-md' 
            onClick={() => setColor(() => 'orange')}
          >
            orange
          </button>
        </div>
      </div>
    </>
  )
}

export default App
