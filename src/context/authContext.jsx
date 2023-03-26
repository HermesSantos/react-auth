import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//cria e exporta o contexto
//creates and exports the context
export const AuthContext = createContext()

//cria os contextos específicos
//creates the specifics contexts

//contexto de autenticação
//authentication context
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    if(localStorage.getItem("key")){
      setUser(JSON.parse(localStorage.getItem("key")))
    }
    setLoading(false)
  }, [])
  
  function logout () {
    setUser(null)
    localStorage.removeItem("key")
    navigate('/login')
  }
  
  function login (email, password) {
    const loggedUser = {
      id: 1, email
    }
    if(email==="user@user.com" && password==="123abc"){
      setUser(loggedUser)
      localStorage.setItem("chave", JSON.stringify(loggedUser))
      navigate('/admin-panel')
    } else {
      console.log('wrong data')
    }
  }

  return(
    <AuthContext.Provider value={{authenticated: !!user, user, login, logout, loading}}>
      {children}
    </AuthContext.Provider>
  )
}