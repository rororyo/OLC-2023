import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import Notes from './pages/Notes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  )
}

export default AppRoutes
