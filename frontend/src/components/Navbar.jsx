import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ userData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
   const logout = async () => {
    
    document.cookie =  "token; expires = Thu, 01 Jan 197000:00:00 UTC"
      navigate('/login')
    
  }


  return (
    <nav className="bg-[#C83F12] text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="text-2xl font-bold">
          <Link to="/">QuizMaster</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/home" className="hover:text-yellow-300 transition">Home</Link>
          <h2 className="">{userData?.user?.user?.username}</h2>
          <button
          onClick={logout}
            className="bg-white text-[#C83F12] px-4 py-2 rounded-lg hover:bg-yellow-300 transition">
            Logout
          </button>
        </div>


        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link to="/home" className="block text-center hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</Link>
          <button
            onClick={() => { setIsOpen(false); }}
            className="block w-full bg-white text-[#C83F12] px-4 py-2 rounded-lg hover:bg-yellow-300">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
