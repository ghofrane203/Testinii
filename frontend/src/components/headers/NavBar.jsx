import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'Quiz', route: '/Quiz' },

];

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const [navBg, setNavBg] = useState('bg-transparent');


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            setScrollPosition(currentPosition);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsHome(location.pathname === '/');
        setIsFixed(location.pathname === '/register' || location.pathname === '/login');
    }, [location]);

    useEffect(() => {
        if (scrollPosition > 100) {
            setNavBg('bg-transparent shadow-lg text-black');
        } else {
            setNavBg(location.pathname === '/' ? 'bg-transparent shadow-lg text-black' : 'bg-blue-700 text-white');
        }
    }, [scrollPosition, location.pathname]);

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`${isHome ? navBg : "backdrop-blur-2xl"} ${isFixed ? 'static' : 'fixed'} top-0 transition-colors duration-500 ease-in-out w-full z-10`}
        >
            <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
                <div className="px-4 py-4 flex items-center justify-between">
                    <div onClick={() => navigate('/')} className='flex-shrink-0 cursor-pointer flex items-center'>
                        <div className="flex items-center">
                            <img src="/testini.PNG" alt="Logo" className="w-10 h-10" />
                            <div className="pl-3">
                                <h1 className="text-2xl inline-flex items-center font-bold">
                                    Testini
                                </h1>
                            </div>
                        </div>
                    </div>

                    {isMobile ? (
                        <div className='md:hidden flex items-center'>
                            <button type='button' onClick={toggleMobileMenu} className='text-gray-300 hover:text-white focus:outline-none'>
                                {isMobileMenuOpen ? <FaTimes className='h-8 w-8 hover:text-gray-900' /> : <FaBars className='h-8 w-8 hover:text-gray-900' />}
                            </button>
                        </div>
                    ) : (
                        <div className='md:flex flex-grow justify-center items-center'>
                            <ul className="flex items-center space-x-4">
                                {navLinks.map((link) => (
                                    <li key={link.route}>
                                        <NavLink
                                            to={link.route}
                                            className={`font-bold ${navBg.includes('bg-transparent') ? 'text-black' : 'text-black'} hover:text-teal-600 duration-300`}
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                    {isMobile && isMobileMenuOpen && (
                        <div className={`md:hidden fixed top-0 left-0 h-full w-full flex flex-col items-center justify-center bg-gray-800 z-50`}>
                            <button onClick={toggleMobileMenu} className='absolute top-4 right-4 text-white'>
                                <FaTimes className='h-8 w-8' />
                            </button>
                            <ul className="w-full flex flex-col items-center">
                                {navLinks.map((link) => (
                                    <li key={link.route} className="mb-4">
                                        <NavLink
                                            to={link.route}
                                            className={`font-bold text-white hover:text-teal-600 duration-300`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {!isMobile && (
                         <div className='hidden md:flex items-center relative'>
                         <input
                             type="text"
                             className="bg-gray-200 rounded-full px-4 py-2 pl-10 pr-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                             placeholder="Search..."
                         />
                         <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                     </div>
                    )}
                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;
