import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <span className='text-white'>MyApp</span>
      <div>
        <Link to="/" className="text-white px-2">Home</Link>
        <Link to="/about" className="text-white px-2">About</Link>
      </div>
    </nav>
  )
}

export default Navbar
