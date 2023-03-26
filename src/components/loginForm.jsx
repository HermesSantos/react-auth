//hooks
import { useState } from "react"
import { useContext } from "react"
//context
import { AuthContext } from "../context/authContext"

export const LoginForm = () => {
  const [input, setInput] = useState({})
  //puxa os valores do contexto
  //gets the context values
  const {authenticated, login} = useContext(AuthContext)

  function handleSubmit (e) {
    e.preventDefault()
    const {email, password} = input
    console.log('submit', {email, password})
    login(email, password)
  }
  function handleInput (e) {
    const {name, value} = e.target
    setInput({
      ...input,
      [name]: value
    }
    ) 
    console.log(input)
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <p>{String(authenticated)}</p>
      <div>
        <label>Email</label>
        <input type="email" onChange={handleInput} name="email" id="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" onChange={handleInput} name="password" id="password" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}