import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Sling as Hamburger } from 'hamburger-react';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

interface NavLinkProps {
  linkName: string;
  href: string;
  className?: string;
  onLinkClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ linkName, href, className, onLinkClick }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} className={`${className} text-primary p-1 hover:md:bg-primary hover:md:rounded hover:md:text-background ${isActive ? 'md:bg-primary md:rounded md:font-bold md:text-background' : ''}`} onClick={onLinkClick}>
      {linkName}
    </Link>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Added state for login status

  const router = useRouter();

  // Function to check login status from localStorage and update state
  const checkLoginStatus = () => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    console.log('checkLoginStatus - storedLoginStatus:', storedLoginStatus);
    if (storedLoginStatus !== null) {
      setIsLoggedIn(JSON.parse(storedLoginStatus));
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    // Check login status on component mount
    checkLoginStatus();
  }, []); // Empty dependency array to run only on mount

  // Log isLoggedIn state after render
  useEffect(() => {
    console.log('Navbar isLoggedIn state:', isLoggedIn);
  }, [isLoggedIn]);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  React.useEffect(() => {
    const handleEscClose = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(!isMenuOpen);
      }
    };

    window.addEventListener('keydown', handleEscClose);

    return () => {
      window.removeEventListener('keydown', handleEscClose);
    };
  }, [isMenuOpen]);

  // Define navigation links based on login status
  const navLinks = [
    { linkName: 'Home', href: '/', onLinkClick: () => {} },
    { linkName: 'About', href: '/about', onLinkClick: () => {} },
    { linkName: 'Contacts', href: '/contact', onLinkClick: () => {} },
    ...(isLoggedIn ? [
      { linkName: 'CMS', href: '/cms', onLinkClick: () => {} },
      { linkName: 'Log Out', href: '/login', onLinkClick: () => {
        console.log('Logging out...');
        localStorage.setItem('isLoggedIn', 'false'); // Set to false instead of removing
        setIsLoggedIn(false); // Immediately update state
        router.push('/login');
      }},
    ] : [
      { linkName: 'Login', href: '/login', onLinkClick: () => {} },
    ]),
  ];

  return (
    <nav className="bg-background border-b-4 border-primary m-0 z-60 border-gray-800 sticky top-0 text-background" style={{ zIndex: '60 !important' }}>
      <div className="container mx-auto p-4 m-0 flex items-center justify-between">
        <Link href="/" className="text-primary text-lg font-bold">
          BusinessApp
        </Link>

        {/* Hamburger menu for mobile */}
        <div className="block md:hidden m-0">
          <div>
            <Hamburger rounded={true} color={darkMode ? '#62859d' : '#63869e'} toggled={isMenuOpen} toggle={toggleMenu} size={18} />
          </div>
        </div>

        {/* Main navigation links (hidden on mobile) */}
        <ul className="hidden md:flex m-0 items-center space-x-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink key={link.href} linkName={link.linkName} href={link.href} onLinkClick={toggleMenu} />
            </li>
          ))}
          <li>
            <button onClick={toggleDarkMode} className="font-bold py-2 px-4 rounded">
              {darkMode ? <FaSun className="text-primary" /> : <FaMoon className="text-primary" />}
            </button>
          </li>
        </ul>
      </div>

      {/* Off-canvas menu (mobile) */}
      <div
        className={`md:hidden absolute left-0 h-screen w-full p-4 m-0 bg-background text-text transform z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-100 ease-in-out`}
      >
        <ul className="flex flex-col space-y-4 mt-8">
          {navLinks.map((link) => (
            <li key={link.href} className='text-center'>
              <NavLink className='text-center' key={link.href} linkName={link.linkName} href={link.href} onLinkClick={toggleMenu} />
            </li>
          ))}
          {/* Dark Mode Toggler */}
          <li className="flex justify-center text-center">
            <button onClick={toggleDarkMode} className="font-bold py-2 px-4 rounded">
              {darkMode ? <FaSun className="text-primary" /> : <FaMoon className="text-primary" />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
