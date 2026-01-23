import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: #22242a;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #00b74b;
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 20%;
  border: 4px solid #00b74b;
  box-shadow: 0 10px 40px rgba(0, 183, 75, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 50px rgba(0, 183, 75, 0.4);
  }
`;

const AboutText = styled.p`
  font-size: 1.15rem;
  line-height: 1.9;
  color: #a0a0a0;
  text-align: center;

  strong {
    color: #ffffff;
  }

  span.highlight {
    color: #00b74b;
  }
`;

const Highlights = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const HighlightItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: #1a1b1f;
  border-radius: 12px;
  border: 1px solid #333;
  transition: all 0.3s ease;

  &:hover {
    border-color: #00b74b;
    transform: translateY(-5px);
  }
`;

const HighlightNumber = styled.span`
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #00b74b;
  margin-bottom: 0.5rem;
`;

const HighlightLabel = styled.span`
  font-size: 0.95rem;
  color: #a0a0a0;
`;

const About = () => {
  return (
    <AboutSection id="sobre">
      <Container>
        <SectionTitle>Sobre Mim</SectionTitle>
        <ProfileImageWrapper>
          <ProfileImage src="imagens/eu.jpeg" alt="André Costa Coelho" />
        </ProfileImageWrapper>
        <AboutText>
          Estudante de <strong>Engenharia de Computação</strong> (7º período) no IBMEC
          com experiência prática em <span className="highlight">Desenvolvimento Front-End</span> e
          <span className="highlight"> Análise de Dados</span>. Atualmente estagiário no
          <strong> BNDES</strong>, atuando com Business Intelligence, automação e
          manipulação de grandes volumes de dados. Especialista na criação de interfaces
          modernas com <strong>React</strong> e <strong>TypeScript</strong>, além de possuir
          sólida base em infraestrutura de redes e bancos de dados SQL.
        </AboutText>
        <Highlights>
          <HighlightItem>
            <HighlightNumber>7º</HighlightNumber>
            <HighlightLabel>Período de Eng. Computação</HighlightLabel>
          </HighlightItem>
          <HighlightItem>
            <HighlightNumber>10+</HighlightNumber>
            <HighlightLabel>Projetos Desenvolvidos</HighlightLabel>
          </HighlightItem>
          <HighlightItem>
            <HighlightNumber>2+</HighlightNumber>
            <HighlightLabel>Anos de Experiência</HighlightLabel>
          </HighlightItem>
        </Highlights>
      </Container>
    </AboutSection>
  );
};

export default About;
