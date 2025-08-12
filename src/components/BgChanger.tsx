import { useState } from 'react'
import { type ButtonColor } from '../lib/types'
import ColorButton from './ColorButton'

function BgChanger() {

    const [color, setColor] = useState<ButtonColor | 'gray'>('gray')

  return (
    <div 
        style={{
          backgroundColor: color
        }}
        className='w-full h-screen flex justify-center items-end py-10 px-5'
      >
        <div className='w-full h-fit p-4 border bg-white rounded-2xl flex items-center justify-between text-white'>
            <ColorButton
                color = "blue"
                setColor = {setColor}
            />
            <ColorButton
                color = 'green'
                setColor = {setColor}
            />
            <ColorButton
                color = 'yellow'
                setColor = {setColor}
            />
            <ColorButton
                color = 'red'
                setColor = {setColor}
            />
        </div>
      </div>
  )
}

export default BgChanger