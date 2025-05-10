
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { HardHat, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <HardHat className={`h-8 w-8 ${isScrolled ? 'text-construction-500' : 'text-white'}`} />
          <span className={`text-2xl font-bold ${isScrolled ? 'text-navy-500' : 'text-white'}`}>BuildMaster</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className={`font-medium ${isScrolled ? 'text-navy-500' : 'text-white'} hover:text-construction-400`}>Home</a>
          <a href="#services" className={`font-medium ${isScrolled ? 'text-navy-500' : 'text-white'} hover:text-construction-400`}>Services</a>
          <a href="#projects" className={`font-medium ${isScrolled ? 'text-navy-500' : 'text-white'} hover:text-construction-400`}>Projects</a>
          <a href="#about" className={`font-medium ${isScrolled ? 'text-navy-500' : 'text-white'} hover:text-construction-400`}>About</a>
          <a href="#testimonials" className={`font-medium ${isScrolled ? 'text-navy-500' : 'text-white'} hover:text-construction-400`}>Testimonials</a>
          <a href="#contact">
            <Button className="bg-construction-400 hover:bg-construction-500">Contact Us</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-navy-500" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full">
          <div className="flex flex-col py-4 px-4 space-y-4">
            <a href="#home" className="font-medium text-navy-500" onClick={toggleMobileMenu}>Home</a>
            <a href="#services" className="font-medium text-navy-500" onClick={toggleMobileMenu}>Services</a>
            <a href="#projects" className="font-medium text-navy-500" onClick={toggleMobileMenu}>Projects</a>
            <a href="#about" className="font-medium text-navy-500" onClick={toggleMobileMenu}>About</a>
            <a href="#testimonials" className="font-medium text-navy-500" onClick={toggleMobileMenu}>Testimonials</a>
            <a href="#contact" onClick={toggleMobileMenu}>
              <Button className="w-full bg-construction-400 hover:bg-construction-500">Contact Us</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
