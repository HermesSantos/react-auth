import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/authContext"

export const AdminPanel = () => {
  const {logout} = useContext(AuthContext)
  
  function handleLogout () {
    logout()
  }
  return(
    <div>
      <h1>Admin Panel</h1>
      <button onClick={handleLogout}>Logout</button>
      <Link to="/about"><button>About us</button></Link>
    </div>
  )
}