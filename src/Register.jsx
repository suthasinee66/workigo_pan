import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      alert(error.message)
    } else {
      alert('สมัครสมาชิกสำเร็จ 🎉')
      console.log(data)
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>สมัครสมาชิก</button>
    </div>
  )
}
