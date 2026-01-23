import styled from 'styled-components';
import { HiOutlineLocationMarker, HiOutlineChevronDown } from 'react-icons/hi';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(0, 183, 75, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  z-index: 1;
`;

const Logo = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 2rem;
  filter: drop-shadow(0 4px 20px rgba(0, 183, 75, 0.3));
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #00b74b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: #a0a0a0;
  margin-bottom: 1.5rem;
  font-weight: 300;
`;

const Location = styled.p`
  font-size: 1rem;
  color: #00b74b;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  .location-icon {
    font-size: 1.2rem;
    filter: drop-shadow(0 0 4px rgba(0, 183, 75, 0.6));
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.a`
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  ${props => props.$primary ? `
    background: #00b74b;
    color: #ffffff;
    border: 2px solid #00b74b;

    &:hover {
      background: #00d956;
      border-color: #00d956;
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(0, 183, 75, 0.4);
    }
  ` : `
    background: transparent;
    color: #ffffff;
    border: 2px solid #333;

    &:hover {
      border-color: #00b74b;
      color: #00b74b;
      transform: translateY(-2px);
    }
  `}
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  color: #00b74b;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }

  .scroll-icon {
    font-size: 2rem;
    filter: drop-shadow(0 0 4px rgba(0, 183, 75, 0.6));
  }
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <Logo src="imagens/logo.png" alt="André Costa Logo" />
        <Subtitle>
          Acadêmico em Engenharia, Desenvolvedor Front-End & Analista de Dados
        </Subtitle>
        <Location>
          <HiOutlineLocationMarker className="location-icon" />
          Rio de Janeiro, Brasil
        </Location>
        <ButtonGroup>
          <Button href="#contato" $primary>Entre em Contato</Button>
          <Button href="#experiencia">Ver Projetos</Button>
        </ButtonGroup>
      </HeroContent>
      <ScrollIndicator>
        <HiOutlineChevronDown className="scroll-icon" />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
