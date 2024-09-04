import React from 'react';
import "./App.css"

function Footer() {
  let date = new Date();

  return (
    
     <footer>Copyright © {date.getFullYear()}</footer>
    
  );
}

export default Footer;