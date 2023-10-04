import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import { Homepage } from './pages/Homepage'
import { About } from './pages/About'
import { Box } from '@mui/material'
import { useStyles } from './pages/styles/app'

function App() {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
    <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
      </Routes>
    </Box>
  )
}

export default App
