import { useState, useEffect} from 'react';
import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/kj.png';
import navIcon1 from '../assets/linkedin.svg';
import navIcon2 from '../assets/github.svg';

export function NavBar() {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
      const onScroll = () => {
          if(window.scrollY > 50){
              setScrolled(true);
          }else{
              setScrolled(false);
          }
      }
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
      setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img className="kj-logo" src={logo} className="logo" alt="Kajeme-Initials"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}>
                Home
            </Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
            onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#experiences" className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experiences')}>Experience</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
          
          </Nav>
          <span className="navbar-text">
              <div className="social-icon">
                  <a href='https://www.linkedin.com/in/kajeme-cheneque-6ab119190/' target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                  <a href='https://github.com/kajeme11' target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
              </div>
              <button className="vvd" onClick={() => window.location.href = '#contact'}>
                  <span>Let's connect!</span>
             </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
