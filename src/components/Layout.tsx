import React from 'react'
import { Box } from '@mui/material'
import TopBar from './TopBar'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ display:'flex', minHeight:'100vh' }}>
    <TopBar />
    <Box component='main' sx={{ flex:1, p:3, mt:8 }}>{children}</Box>
  </Box>
)

export default Layout