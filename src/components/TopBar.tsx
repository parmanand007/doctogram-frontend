import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const TopBar: React.FC = ()=> (
  <AppBar position='fixed' sx={{ zIndex: (t)=> t.zIndex.drawer + 1 }}>
    <Toolbar>
      <IconButton edge='start' size='large' color='inherit' aria-label='menu' sx={{ mr:2 }}><MenuIcon /></IconButton>
      <Typography variant='h6' noWrap>Doctogram</Typography>
    </Toolbar>
  </AppBar>
)

export default TopBar