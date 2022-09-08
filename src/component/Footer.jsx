import React from 'react';
import ReactDOM from 'react-dom';

function Footer(){

    const currentYear = new Date().getFullYear();
    return(
        <footer id="footer">
        <i class="footer-icon fa-brands fa-twitter"></i>
        <i class="footer-icon fa-brands fa-facebook-f"></i>
        <i class="footer-icon fa-brands fa-instagram"></i>
        <i class="footer-icon fa-solid fa-envelope"></i>
        <p>© Copyright {currentYear}</p>

    </footer>

    );
}

export default Footer;