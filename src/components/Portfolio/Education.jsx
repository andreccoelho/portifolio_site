import styled from 'styled-components';
import { HiOutlineAcademicCap, HiOutlineBadgeCheck, HiOutlineTranslate } from 'react-icons/hi';

const EducationSection = styled.section`
  padding: 6rem 2rem;
  background: #1a1b1f;
`;

const Container = styled.div`
  max-width: 1000px;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #25272d;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #333;
  transition: all 0.3s ease;

  &:hover {
    border-color: #00b74b;
    transform: translateY(-5px);
  }

  &:hover .neon-icon {
    filter: drop-shadow(0 0 8px #00b74b) drop-shadow(0 0 15px #00b74b);
  }
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  border-radius: 12px;
  background: rgba(0, 183, 75, 0.1);
  border: 1px solid rgba(0, 183, 75, 0.3);

  .neon-icon {
    font-size: 1.8rem;
    color: #00b74b;
    transition: filter 0.3s ease;
    filter: drop-shadow(0 0 3px rgba(0, 183, 75, 0.5));
  }
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const CardSubtitle = styled.p`
  font-size: 1rem;
  color: #00b74b;
  margin-bottom: 0.5rem;
`;

const CardDate = styled.span`
  display: inline-block;
  font-size: 0.85rem;
  color: #a0a0a0;
  background: #1a1b1f;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
`;

const CertificationsList = styled.div`
  margin-top: 1rem;
`;

const CertGroup = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CertGroupTitle = styled.h4`
  font-size: 1rem;
  color: #00b74b;
  margin-bottom: 0.5rem;
`;

const CertText = styled.p`
  font-size: 0.95rem;
  color: #a0a0a0;
  line-height: 1.6;
`;

const LanguageBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  background: #1a1b1f;
  border-radius: 8px;
`;

const LanguageLevel = styled.div`
  display: flex;
  gap: 4px;
`;

const LevelDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.$filled ? '#00b74b' : '#333'};
  box-shadow: ${props => props.$filled ? '0 0 6px rgba(0, 183, 75, 0.6)' : 'none'};
`;

const Education = () => {
  return (
    <EducationSection id="formacao">
      <Container>
        <SectionTitle>Formação & Certificações</SectionTitle>
        <Grid>
          <Card>
            <IconWrapper>
              <HiOutlineAcademicCap className="neon-icon" />
            </IconWrapper>
            <CardTitle>Engenharia de Computação</CardTitle>
            <CardSubtitle>IBMEC Barra da Tijuca</CardSubtitle>
            <CardDate>Previsão: 2026.2 (7º período atual)</CardDate>
          </Card>

          <Card>
            <IconWrapper>
              <HiOutlineBadgeCheck className="neon-icon" />
            </IconWrapper>
            <CardTitle>Certificações</CardTitle>
            <CertificationsList>
              <CertGroup>
                <CertGroupTitle>IBMEC (2023-2024)</CertGroupTitle>
                <CertText>Desenvolvimento Web, Front-End, Back-End e Mobile</CertText>
              </CertGroup>
              <CertGroup>
                <CertGroupTitle>Cisco Networking Academy (2024)</CertGroupTitle>
                <CertText>Suporte, Segurança e Configuração de Redes</CertText>
              </CertGroup>
            </CertificationsList>
          </Card>

          <Card>
            <IconWrapper>
              <HiOutlineTranslate className="neon-icon" />
            </IconWrapper>
            <CardTitle>Idiomas</CardTitle>
            <CertificationsList>
              <CertGroup>
                <CertGroupTitle>Inglês</CertGroupTitle>
                <CertText>Nível Intermediário/Master – Cultura Inglesa</CertText>
                <LanguageBadge>
                  <span style={{ color: '#a0a0a0', fontSize: '0.85rem' }}>Proficiência:</span>
                  <LanguageLevel>
                    <LevelDot $filled />
                    <LevelDot $filled />
                    <LevelDot $filled />
                    <LevelDot />
                    <LevelDot />
                  </LanguageLevel>
                </LanguageBadge>
              </CertGroup>
            </CertificationsList>
          </Card>
        </Grid>
      </Container>
    </EducationSection>
  );
};

export default Education;
