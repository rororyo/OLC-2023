import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="text-black p-4 flex justify-between">
      <Link to="/notes">
      <span className='font-bold'>Notes</span>
      </Link>
    </nav>
  )
}

export default Navbar
