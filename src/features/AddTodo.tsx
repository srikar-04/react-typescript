import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

function AddTodo() {

    const [todo, setTodo] = useState<string>('')

    const dispatch = useDispatch()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(addTodo({todo: todo}))
    }

  return (
    <form 
        action="submit" 
        onSubmit={(e) => handleSubmit(e)}
        className='flex gap-4 items-center justify-center mt-6'
    >
        <div className='border border-blue-900 rounded-md'>
            <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" />
        </div>
        <button className='rounded-md px-2 py-1 bg-blue-500 text-white font-medium cursor-pointer' type='submit'>Add</button>
    </form>
  )
}

export default AddTodo