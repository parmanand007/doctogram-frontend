import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../api/client'

type User = { id: number; email: string; full_name?: string } | null

const AuthContext = createContext<{ user: User; signin: (e:string,p:string)=>Promise<void>; signout: ()=>void; loading: boolean }>(
  { user: null, signin: async ()=>{}, signout: ()=>{}, loading:true }
)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const token = localStorage.getItem('access_token')
    if (token) {
      api.get('/auth/me/').then(r=>setUser(r.data)).catch(()=>setUser(null)).finally(()=>setLoading(false))
    } else setLoading(false)
  },[])

  const signin = async (email:string, password:string) => {
    const r = await api.post('/auth/login/', { email, password })
    const access = r.data.access
    localStorage.setItem('access_token', access)
    const profile = await api.get('/auth/me/')
    setUser(profile.data)
  }

  const signout = () => { localStorage.removeItem('access_token'); setUser(null) }

  return <AuthContext.Provider value={{ user, signin, signout, loading }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)