import { createContext, useState } from 'react';
import { URL_AZURE } from '../constants/http.azure.request'
import axios from 'axios'
import { MdOutlineError } from 'react-icons/md'

export const Context = createContext()

export default function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  async function handleLogin(formLogin, { setErrorPostUser }) {
    try {
      const { data: { token } } = await axios.post(`${URL_AZURE}/login`, formLogin);
      console.log(JSON.stringify(token))
      console.log(data)
      // localStorage.setItem('token', JSON.stringify(token))
    } catch (e) {
      console.error('error postUser =>', e)
      setErrorPostUser(
        <>
          <MdOutlineError />
          Ops! Algum dos dados estão inválidos.
        </>
      )
    }
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin }} >
      {children}
    </Context.Provider>
  )
}

