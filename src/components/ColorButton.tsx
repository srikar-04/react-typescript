import React from 'react'
import { type ButtonColor } from '../lib/types'

type ColorButtonProps = {
    color: ButtonColor | 'gray',
    setColor: React.Dispatch<React.SetStateAction<ButtonColor | "gray">>
}

function ColorButton({color, setColor}: ColorButtonProps) {


    function handleClick() {
        setColor(color)
    }

  return (
    <div 
        style={{
            backgroundColor: color
        }}
        onClick={handleClick}
        className={`cursor-pointer text-gray-300 py-2 px-4 rounded-md`}
    >
        {color}
    </div>
  )
}

export default ColorButton