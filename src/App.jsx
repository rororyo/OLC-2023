import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRoutes from './routes'

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
