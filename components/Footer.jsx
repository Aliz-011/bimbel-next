import React from 'react';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="px-4 sm:px-16">
      <div className="px-2 sm:px-4 py-2.5">
        <div className="flex items-center gap-2">
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <AiOutlineFacebook />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
