import React, { useEffect, useState } from 'react'
import { Typography, Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer } from '@mui/material'
import api from '../api/client'

const Patients: React.FC = ()=> {
  const [patients, setPatients] = useState<any[]>([])
  useEffect(()=>{
    api.get('/patients/?page_size=50').then(r=>setPatients(r.data.results ?? r.data)).catch(()=>setPatients([]))
  },[])
  return (
    <div>
      <Typography variant='h4' gutterBottom>Patients</Typography>
      <TableContainer component={Paper}><Table><TableHead><TableRow><TableCell>ID</TableCell><TableCell>Name</TableCell><TableCell>Email</TableCell></TableRow></TableHead><TableBody>{patients.map(p=>(<TableRow key={p.id}><TableCell>{p.id}</TableCell><TableCell>{p.full_name ?? p.name}</TableCell><TableCell>{p.email}</TableCell></TableRow>))}</TableBody></Table></TableContainer>
    </div>
  )
}

export default Patients