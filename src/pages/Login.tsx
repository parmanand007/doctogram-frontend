import React from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, TextField, Typography, Paper } from '@mui/material'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

type FormData = { email: string; password: string }

const Login: React.FC = ()=> {
  const { signin } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<FormData>()
  const onSubmit = async (data:FormData) => {
    try { await signin(data.email, data.password); navigate('/') } catch (e) { alert('Login failed') }
  }
  return (
    <Paper sx={{ maxWidth:400, m:'40px auto', p:3 }}>
      <Typography variant='h6' gutterBottom>Login</Typography>
      <Box component='form' onSubmit={handleSubmit(onSubmit)}>
        <TextField label='Email' fullWidth margin='normal' {...register('email')} />
        <TextField label='Password' type='password' fullWidth margin='normal' {...register('password')} />
        <Button type='submit' variant='contained' fullWidth sx={{ mt:2 }}>Sign in</Button>
      </Box>
    </Paper>
  )
}

export default Login