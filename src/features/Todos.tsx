import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../lib/types'
import { removeTodo } from './todoSlice'

function Todos() {

  const dispatch = useDispatch()

  const allTodos = useSelector((state: RootState) => state.todos)

  if(!allTodos || allTodos.length == 0) return <div className='text-xl font-bold flex items-center justify-center my-6'>No Todos Present</div>


  return (
    <ul className=' flex flex-col items-center justify-center gap-6 my-4'>
      {allTodos.map(todo => (
        <li 
          key={todo.id}
          className='flex items-center justify-center gap-3'
        >
          <div className='px-9 py-1 text-xl text-white bg-zinc-600 w-full'>{todo.todo}</div>
          <button onClick={() => dispatch(removeTodo({id: todo.id}))} className='px-2 py-1 font-medium bg-red-500 text-white rounded-md cursor-pointer'>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default Todos