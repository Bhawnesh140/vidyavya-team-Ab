import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRequestCallback } from '@/context/RequestCallbackContext';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Student Life', href: '/student-life' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Partner With Us', href: '/partner' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useRequestCallback();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-card/95 backdrop-blur-md shadow-md'
        : 'bg-transparent'
        }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Vidyavya Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-body font-medium text-base transition-colors hover:text-primary ${location.pathname === link.href
                  ? 'text-primary'
                  : 'text-foreground'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="border border-secondary transition-all duration-300 hover:border-primary hover:text-primary hover:scale-105 active:scale-95" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="cta" size="default" onClick={openModal}>
              Request Callback
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block px-4 py-3 font-body font-medium text-sm transition-colors ${location.pathname === link.href
                      ? 'text-primary bg-muted'
                      : 'text-foreground hover:bg-muted'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="px-4 pt-4 space-y-3">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button variant="cta" className="w-full" onClick={openModal}>
                    Request Callback
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
