import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: { main: '#0b5fff' },
    secondary: { main: '#9c27b0' }
  },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } }
  }
})

export default theme