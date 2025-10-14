import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo, removetodo, toggletodo } from "../Redux/Todoslice"

function TodoApp() {
  const [text, settext] = useState("")
  const { todo } = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  function handleadd() {
    if (!text.trim()) return;
    dispatch(addtodo(text))
    settext("")
  }

  function handlekey(e) {
    if (e.key === "Enter") {
      handleadd()
    }
  }

  return (
    <div className='flex flex-col items-center mt-16 p-6'>
      <h1 className='text-2xl font-bold mb-6 text-gray-800'>📝 My Todo App</h1>

      {/* Input & Add button */}
      <div className='flex gap-2 w-full max-w-md'>
        <input
          type='text'
          value={text}
          placeholder='Geli shaqada...'
          className='flex-1 border-2 border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400'
          onChange={(e) => settext(e.target.value)}
          onKeyDown={handlekey}
        />
        <button
          className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200'
          onClick={handleadd}>
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className='mt-8 w-full max-w-md space-y-3'>
        {todo.length === 0 && (
          <p className='text-gray-500 text-center italic'>No todos yet 😊</p>
        )}
        {todo.map((t) => (
          <li
            key={t.id}
            className={`flex justify-between items-center bg-white shadow-md p-3 rounded-xl border ${t.completed ? 'opacity-60' : ''}`}
          >
            <div className='flex items-center gap-3'>
              <input
                type='checkbox'
                checked={t.completed}
                onChange={() => dispatch(toggletodo(t.id))}
                className='w-4 h-4 accent-red-500'
              />
              <span className={`text-lg ${t.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {t.text}
              </span>
            </div>

            <button
              className='text-red-600 hover:text-white hover:bg-red-500 border border-red-500 rounded-lg px-3 py-1 text-sm font-semibold transition-all'
              onClick={() => dispatch(removetodo(t.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp
