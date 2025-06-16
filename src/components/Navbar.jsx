import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-950 py-4 fixed w-full top-0 z-50 shadow-md">
      <div className="w-full flex justify-between items-center px-6 sm:px-10 md:px-16">

        {/* Left side - Title */}
        <Link 
          to="/" 
          className="text-3xl font-extrabold text-white hover:text-[#D8B4FE] transition duration-300"
        >
          My Portfolio
        </Link>

        {/* Right side - Links */}
        <div className="flex gap-6 sm:gap-8 md:gap-10 text-xl font-bold">
          <Link to="/" className="text-white hover:text-[#D8B4FE] transition duration-300">Home</Link>
          <Link to="/about" className="text-white hover:text-[#D8B4FE] transition duration-300">About</Link>
          <Link to="/projects" className="text-white hover:text-[#D8B4FE] transition duration-300">Projects</Link>
          <Link to="/contact" className="text-white hover:text-[#D8B4FE] transition duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
