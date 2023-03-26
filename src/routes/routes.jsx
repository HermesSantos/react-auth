import { useContext } from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import { AuthProvider } from '../context/authContext'
import { AdminPanel } from '../views/admin'
import { Login } from '../views/login'
import { AuthContext } from '../context/authContext'
import { About } from '../views/about'

export const AppRoutes = () => {
  function Private ({children}) {
    const {authenticated, loading} = useContext(AuthContext)
    if(loading){
      return <h1>Carregando...</h1>
    }
    if(!authenticated){
      return <Navigate to="/login"/>
    }
    return children
  }
  return(
    <Router>
      <AuthProvider>
        <Routes>
          <Route extact path='/login' element={<Login/>}/>
          <Route extact path='/admin-panel' element={<Private><AdminPanel/></Private>}/>
          <Route extact path='/about' element={<Private><About/></Private>}/>
        </Routes>
      </AuthProvider>
    </Router>
  )
}