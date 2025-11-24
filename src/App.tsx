import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Patients from './pages/Patients'
import Login from './pages/Login'
import Layout from './components/Layout'
import { AuthProvider, useAuth } from './hooks/useAuth'
import { Toolbar, Box } from '@mui/material'

const PrivateRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { user, loading } = useAuth()
  if (loading) return <div />
  return user ? children : <Navigate to="/login" />
}

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <Toolbar />
        <Box sx={{ mt: 2, p:2 }}>
          <Routes>
            <Route path='/' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path='/patients' element={<PrivateRoute><Patients /></PrivateRoute>} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Box>
      </Layout>
    </AuthProvider>
  )
}