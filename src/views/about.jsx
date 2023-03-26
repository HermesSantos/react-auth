import { Link } from "react-router-dom"

export const About = () => {
  return(
    <div>
      <h2>About us</h2>
      <Link to="/admin-panel"><button>Back</button></Link>
    </div>
  )
}