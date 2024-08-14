import React from 'react';

const navLinks = [
  'Home', 'News', 'Sport', 'Business', 'Innovation', 'Culture', 
  'Travel', 'Earth', 'Video', 'Live'
];

const footerLinks = [
  'Terms of Use', 'About the BBC', 'Privacy Policy', 'Cookies', 
  'Accessibility Help', 'Parental Guidance', 'Contact the BBC', 
  'BBC emails for you', 'Advertise with us'
];

const Footer = () => {
  return (
    <footer className="bg-white font-reithm text-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <h2 className="text-xl font-reithb mb-2">Explore the BBC</h2>
        <nav className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4 mb-4">
          {navLinks.map(link => (
            <a key={link} className="border-gray-500 border-l pl-4 py-1">{link}</a>
          ))}
        </nav>
        <div className="border-t border-gray-500 pt-4">
          <nav className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
            {footerLinks.map(link => (
              <a key={link} className="">{link}</a>
            ))}
          </nav>
          <p className="text-xs">
            Copyright © 2024 BBC. The BBC is not responsible for the content of external sites. 
            <a className="font-reithb hover:underline ml-1">Read about our approach to external linking.</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
