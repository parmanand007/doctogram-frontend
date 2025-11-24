import React, { useEffect, useState } from 'react'
import { Typography, Grid, Paper } from '@mui/material'
import api from '../api/client'

const Dashboard: React.FC = ()=> {
  const [stats, setStats] = useState<any>(null)
  useEffect(()=>{
    api.get('/dashboard/summary/').then(r=>setStats(r.data)).catch(()=>setStats(null))
  },[])
  return (
    <div>
      <Typography variant='h4' gutterBottom>Dashboard</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}><Paper sx={{p:2}}><Typography>Patients</Typography><Typography variant='h3'>{stats?.patients ?? '—'}</Typography></Paper></Grid>
        <Grid item xs={12} md={4}><Paper sx={{p:2}}><Typography>Programs</Typography><Typography variant='h3'>{stats?.programs ?? '—'}</Typography></Paper></Grid>
      </Grid>
    </div>
  )
}

export default Dashboard