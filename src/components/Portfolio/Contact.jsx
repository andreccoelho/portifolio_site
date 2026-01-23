import styled from 'styled-components';
import { HiOutlineMail, HiOutlinePhone, HiOutlineBriefcase } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: #22242a;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #a0a0a0;
  font-size: 1.1rem;
  margin-bottom: 3rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  background: #1a1b1f;
  border-radius: 12px;
  border: 1px solid #333;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    border-color: #00b74b;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 183, 75, 0.15);
  }

  &:hover .neon-icon {
    filter: drop-shadow(0 0 8px #00b74b) drop-shadow(0 0 15px #00b74b);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  border-radius: 50%;
  background: rgba(0, 183, 75, 0.1);
  border: 1px solid rgba(0, 183, 75, 0.3);

  .neon-icon {
    font-size: 1.6rem;
    color: #00b74b;
    transition: filter 0.3s ease;
    filter: drop-shadow(0 0 3px rgba(0, 183, 75, 0.5));
  }
`;

const ContactLabel = styled.span`
  font-size: 0.85rem;
  color: #a0a0a0;
  margin-bottom: 0.25rem;
`;

const ContactValue = styled.span`
  font-size: 0.8rem;
  color: #ffffff;
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #1a1b1f;
  border-radius: 50%;
  border: 1px solid #333;
  transition: all 0.3s ease;
  color: #00b74b;

  .social-icon {
    font-size: 1.4rem;
    transition: filter 0.3s ease;
    filter: drop-shadow(0 0 2px rgba(0, 183, 75, 0.4));
  }

  &:hover {
    border-color: #00b74b;
    transform: translateY(-3px);
    box-shadow: 0 5px 20px rgba(0, 183, 75, 0.3);

    .social-icon {
      filter: drop-shadow(0 0 6px #00b74b) drop-shadow(0 0 12px #00b74b);
    }
  }
`;

const Footer = styled.footer`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #333;
`;

const FooterText = styled.p`
  color: #a0a0a0;
  font-size: 0.9rem;
`;

const Contact = () => {
  return (
    <ContactSection id="contato">
      <Container>
        <SectionTitle>Vamos Conversar?</SectionTitle>
        <Subtitle>
          Estou sempre aberto a novas oportunidades e projetos interessantes
        </Subtitle>

        <ContactGrid>
          <ContactCard href="mailto:andreccoelho2004@gmail.com">
            <IconWrapper>
              <HiOutlineMail className="neon-icon" />
            </IconWrapper>
            <ContactLabel>E-mail</ContactLabel>
            <ContactValue>andreccoelho2004@gmail.com</ContactValue>
          </ContactCard>

          <ContactCard href="tel:+5521974131453">
            <IconWrapper>
              <HiOutlinePhone className="neon-icon" />
            </IconWrapper>
            <ContactLabel>Telefone</ContactLabel>
            <ContactValue>+55 21 97413-1453</ContactValue>
          </ContactCard>

          <ContactCard href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
            <IconWrapper>
              <HiOutlineBriefcase className="neon-icon" />
            </IconWrapper>
            <ContactLabel>LinkedIn</ContactLabel>
            <ContactValue>André Costa</ContactValue>
          </ContactCard>
        </ContactGrid>

        <SocialLinks>
          <SocialLink href="https://github.com/" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FiGithub className="social-icon" />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FiLinkedin className="social-icon" />
          </SocialLink>
          <SocialLink href="mailto:andreccoelho2004@gmail.com" title="E-mail">
            <FiMail className="social-icon" />
          </SocialLink>
        </SocialLinks>

        <Footer>
          <FooterText>
            © {new Date().getFullYear()} André Costa Coelho. Desenvolvido com React.
          </FooterText>
        </Footer>
      </Container>
    </ContactSection>
  );
};

export default Contact;
