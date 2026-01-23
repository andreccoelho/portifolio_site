import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: ${props => props.$scrolled ? 'rgba(26, 27, 31, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.$scrolled ? '1px solid #333' : 'none'};
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.1rem;

  img {
    height: 80px;
    width: auto;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.$open ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(26, 27, 31, 0.98);
    padding: 1.5rem;
    gap: 1rem;
    border-bottom: 1px solid #333;
  }
`;

const NavLink = styled.a`
  color: #a0a0a0;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #00b74b;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #00b74b;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer>
        <Logo href="#hero">
          <img src="imagens/icon.png" alt="AC Logo" />
        </Logo>

        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </MenuButton>

        <NavLinks $open={menuOpen}>
          <NavLink href="#sobre" onClick={handleLinkClick}>Sobre</NavLink>
          <NavLink href="#experiencia" onClick={handleLinkClick}>Experiência</NavLink>
          <NavLink href="#habilidades" onClick={handleLinkClick}>Habilidades</NavLink>
          <NavLink href="#formacao" onClick={handleLinkClick}>Formação</NavLink>
          <NavLink href="#contato" onClick={handleLinkClick}>Contato</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
