import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    const { data, error } = await supabase
      .from('todos')
      .select('*')

    if (error) {
      console.error(error)
    } else {
      setTodos(data)
    }
  }

  return (
    <div>
      <h1>Supabase Todo</h1>
      {todos.map(todo => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  )
}

export default App
