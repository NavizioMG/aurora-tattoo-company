
import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Artists', path: '/artists' },
    { title: 'Services', path: '/services' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Aftercare', path: '/aftercare' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/61ee7c47-4a2d-447f-9f4c-193ba47f75bc.png"
            alt="Aurora Tattoo Company Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="text-aurora-gold hover:text-white transition-colors font-serif tracking-wide"
            >
              {item.title}
            </Link>
          ))}
          <a 
            href="https://instagram.com/auroratattoocompany" 
            target="_blank" 
            rel="noreferrer"
            className="text-aurora-gold hover:text-white"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
          <a 
            href="#book-appointment" 
            className="bg-aurora-gold text-black px-4 py-2 rounded hover:bg-opacity-80 transition-all font-bold flex items-center"
          >
            <Phone className="mr-2 h-4 w-4" />
            Book Now
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-aurora-gold hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-aurora-gold/30">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-aurora-gold hover:text-white transition-colors font-serif tracking-wide py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://instagram.com/auroratattoocompany" 
                target="_blank" 
                rel="noreferrer"
                className="text-aurora-gold hover:text-white"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a 
                href="#book-appointment" 
                className="bg-aurora-gold text-black px-4 py-2 rounded hover:bg-opacity-80 transition-all font-bold flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="mr-2 h-4 w-4" />
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
