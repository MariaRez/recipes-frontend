import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <span className='footer__copy'>&copy; {new Date().getFullYear()}</span>
        </footer>
    );
  }
  
  export default Footer;