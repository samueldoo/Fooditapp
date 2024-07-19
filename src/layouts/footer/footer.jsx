import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assests/whiteLogo.svg';
import InstagramIcon from '../../assests/instagram.svg';
import TwitterIcon from '../../assests/twitter.svg';
import FacebookIcon from '../../assests/facebook.svg';
import LinkedInIcon from '../../assests/linkedin.svg';

const Footer = () => {
  return (
    <footer className="bg-[#232322] text-[#FFFCFC] py-[4rem] px-4 md:px-8">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-6 md:mb-0">
          <img src={Logo} alt="foodit" className='h-6' />
        </div>
       
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-[2rem]">Company</h3>
          <ul>
            <li className='mb-[.6rem]'><Link to="/" className="hover:text-[#F08F00]">Home</Link></li>
            <li className='mb-[.6rem]'><Link to="/" className="hover:text-[#F08F00]">About Us</Link></li>
            <li><Link to="/" className="hover:text-[#F08F00]">FAQs</Link></li>
          </ul>
        </div>
       
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-[2rem]">Services</h3>
          <ul>
            <li className='mb-[.6rem]'><Link to="/" className="hover:text-[#F08F00]">Menu</Link></li>
            <li className='mb-[.6rem]'><Link to="/" className="hover:text-[#F08F00]">Vendors List</Link></li>
            <li className='mb-[.6rem]'><Link to="/" className="hover:text-[#F08F00]">Support</Link></li>
            <li><Link to="/" className="hover:text-[#F08F00]">Geolocator</Link></li>
          </ul>
        </div>
       
        <div>
          <h3 className="text-lg font-semibold mb-[2.7rem]">Socials</h3>
          <ul>
            <li className="flex items-center gap-3 mb-[.7rem]">
              <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
              <Link to="/" className="hover:text-[#F08F00]">Instagram</Link>
            </li>
            <li className="flex items-center gap-3 mb-[.7rem]">
            <img src={TwitterIcon} alt="Twitter" className="w-4 h-4" />
              <Link to="/" className="hover:text-[#F08F00]">Twitter</Link>
            </li>
            <li className="flex items-center gap-3 mb-[.7rem]">
            <img src={FacebookIcon} alt="Facebook" className="w-4 h-4" />
              <Link to="/" className="hover:text-[#F08F00]">Facebook</Link>
            </li>
            <li className="flex items-center gap-3">
            <img src={LinkedInIcon} alt="LinkedIn" className="w-4 h-4" />
              <Link to="/" className="hover:text-[#F08F00]">LinkedIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;