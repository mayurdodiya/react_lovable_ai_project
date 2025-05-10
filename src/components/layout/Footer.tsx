
import React from 'react';
import { HardHat, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-500 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HardHat className="h-8 w-8 text-construction-400" />
              <span className="text-2xl font-bold">BuildMaster</span>
            </div>
            <p className="mb-6 text-gray-300">
              Professional construction services with a commitment to quality, safety, and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-navy-700 hover:bg-construction-400 p-2 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-navy-700 hover:bg-construction-400 p-2 rounded-full">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-navy-700 hover:bg-construction-400 p-2 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-navy-700 hover:bg-construction-400 p-2 rounded-full">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-construction-400">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-construction-400">Residential Construction</a></li>
              <li><a href="#" className="text-gray-300 hover:text-construction-400">Commercial Construction</a></li>
              <li><a href="#" className="text-gray-300 hover:text-construction-400">Renovation & Remodeling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-construction-400">Project Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-construction-400">Design & Planning</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-construction-400">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-construction-400 h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Construction Way, Building City, BC 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-construction-400 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-construction-400 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-300">info@buildmaster.com</span>
              </li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-construction-400">
              Business Hours
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday - Friday:</span>
                <span className="text-construction-400">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Saturday:</span>
                <span className="text-construction-400">9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sunday:</span>
                <span className="text-construction-400">Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} BuildMaster Construction. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-construction-400">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-construction-400">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-construction-400">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
