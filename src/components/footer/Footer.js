import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center">
      <p className="text-center">
        © Kai Kleinbard {currentYear} |{" "}
        <a
          href="mailto:bakukai@gmail.com"
          className="text-blue-500 hover:scale-110 transform transition duration-300"
        >
          Get in touch
        </a> | 
        <a
          href="https://github.com/cre8ture"
          className="text-blue-500 hover:scale-110 transform transition duration-300"
        >
        {" "}Github
        </a>
        
      </p>
    </footer>
  );
};

export default Footer;
