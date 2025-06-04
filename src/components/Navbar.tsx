import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md text-[#f97316]">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/">
          <h1 className="font-mono font-bold text-2xl">HousingAI</h1>
        </Link>

        <div className="hidden md:flex gap-4">
          <Link to="/predict" className="bg-[#f97316] hover:bg-orange-600 transition-all duration-300 text-white px-5 py-2 rounded">PREDICT PRICE</Link>
          <Link to="/recent-predictions" className="bg-[#f97316] hover:bg-orange-600 transition-all duration-300 text-white px-5 py-2 rounded">RECENT PREDICTIONS</Link>
        </div>

        <button
          className="md:hidden text-[#f97316] focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          <Link to="/predict" onClick={() => setIsOpen(false)} className="bg-[#f97316] text-white px-5 py-2 rounded">PREDICT PRICE</Link>
          <Link to="/recent-predictions" onClick={() => setIsOpen(false)} className="bg-[#f97316] text-white px-5 py-2 rounded">RECENT PREDICTIONS</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
