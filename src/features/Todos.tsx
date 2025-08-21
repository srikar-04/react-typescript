import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../lib/types'
import { removeTodo } from './todoSlice'

function Todos() {

  const dispatch = useDispatch()
  const allTodos = useSelector((state: RootState) => state.todos)

  return (
    <ul className=' flex flex-col items-center justify-center gap-6'>
      {allTodos.map(todo => (
        <li 
          key={todo.id}
          className='flex items-center justify-center gap-3'
        >
          <div>{todo.todo}</div>
          <button onClick={() => dispatch(removeTodo({id: todo.id}))} className='px-2 py-1 font-medium'>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default Todos