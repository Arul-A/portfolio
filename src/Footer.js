import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-white/10 text-white">
      <div className="flex flex-col items-center justify-center space-y-4 px-6 text-center">
        <div className="flex items-center gap-4 text-gray-300">
          <a href="https://www.linkedin.com/in/arul-annamalai" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="LinkedIn">
            <AiOutlineLinkedin size={22} />
          </a>
          <a href="https://github.com/Arul-A" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="GitHub">
            <AiOutlineGithub size={22} />
          </a>
          <a href="https://leetcode.com/u/akarul2100/" target="_blank" rel="noreferrer" className="hover:text-[#FFA116] transition-colors" title="LeetCode">
            <SiLeetcode size={22} />
          </a>
          <a href="https://wa.me/918072663220" target="_blank" rel="noreferrer" className="hover:text-[#25D366] transition-colors" title="WhatsApp">
            <AiOutlineWhatsApp size={22} />
          </a>
        </div>

        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Arul Annamalai. All rights reserved.
        </p>

        <div>
          <a
            className="btn text-xs sm:text-sm py-2 px-4"
            target="_blank"
            href="https://github.com/Arul-A/portfolio.git"
            rel="noreferrer"
          >
            View Portfolio Source Code
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;