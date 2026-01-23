import styled from 'styled-components';

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #00b74b, #333);
  }

  @media (max-width: 768px) {
    padding-left: 1.5rem;
  }
`;

const ExperienceItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding: 2rem;
  background: #25272d;
  border-radius: 12px;
  border: 1px solid #333;
  transition: all 0.3s ease;

  &:hover {
    border-color: #00b74b;
    transform: translateX(5px);
  }

  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 2rem;
    width: 12px;
    height: 12px;
    background: #00b74b;
    border-radius: 50%;
    border: 3px solid #1a1b1f;
  }

  @media (max-width: 768px) {
    &::before {
      left: -2rem;
    }
  }
`;

const JobHeader = styled.div`
  margin-bottom: 1rem;
`;

const Company = styled.h3`
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 0.25rem;
`;

const Role = styled.p`
  font-size: 1rem;
  color: #00b74b;
  font-weight: 500;
`;

const Period = styled.span`
  display: inline-block;
  font-size: 0.85rem;
  color: #a0a0a0;
  background: #1a1b1f;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  margin-top: 0.5rem;
`;

const Description = styled.ul`
  list-style: none;
  margin-top: 1rem;
`;

const DescriptionItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: #a0a0a0;
  font-size: 0.95rem;
  line-height: 1.6;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #00b74b;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const ProjectCard = styled.div`
  background: #1a1b1f;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #333;
  transition: all 0.3s ease;

  &:hover {
    border-color: #00b74b;
  }
`;

const ProjectTitle = styled.h4`
  font-size: 1rem;
  color: #00b74b;
  margin-bottom: 0.5rem;
`;

const ProjectDesc = styled.p`
  font-size: 0.9rem;
  color: #a0a0a0;
  line-height: 1.5;
`;

const Experience = () => {
  return (
    <ExperienceSection id="experiencia">
      <Container>
        <SectionTitle>Experiência Profissional</SectionTitle>
        <Timeline>
          <ExperienceItem>
            <JobHeader>
              <Company>Banco Nacional de Desenvolvimento Econômico e Social (BNDES)</Company>
              <Role>Estagiário de Dados e Relatórios Gerenciais</Role>
              <Period>Jan/2025 – Atual</Period>
            </JobHeader>
            <Description>
              <DescriptionItem>
                Desenvolvimento de dashboards e relatórios estratégicos utilizando Power BI integrados a bases de dados em datalake
              </DescriptionItem>
              <DescriptionItem>
                Manipulação e extração de dados utilizando SQL e Python para suporte à tomada de decisão
              </DescriptionItem>
              <DescriptionItem>
                Automatização de tarefas rotineiras com VBA (Excel) e apoio à comunicação institucional via e-mail marketing
              </DescriptionItem>
            </Description>
          </ExperienceItem>

          <ExperienceItem>
            <JobHeader>
              <Company>Desenvolvedor Web & Designer (Freelancer)</Company>
              <Role>Projetos Diversos</Role>
              <Period>Ago/2024 – Atual</Period>
            </JobHeader>
            <ProjectsGrid>
              <ProjectCard>
                <ProjectTitle>E-commerce</ProjectTitle>
                <ProjectDesc>
                  Casarão Lustres, Riû, Carpe: Desenvolvimento de aplicações web utilizando plataforma VTEX e NuvemShop.
                </ProjectDesc>
              </ProjectCard>
              <ProjectCard>
                <ProjectTitle>Sites Institucionais</ProjectTitle>
                <ProjectDesc>
                  PVR Capital, Pilotage, BrazilRoute, New Pharm e CH Construtora: Criação, design de interface (Figma) e implementação focados em performance e responsividade.
                </ProjectDesc>
              </ProjectCard>
              <ProjectCard>
                <ProjectTitle>Soluções Digitais</ProjectTitle>
                <ProjectDesc>
                  Charlote Rio & ConectaSaaS: Desenvolvimento de cardápios virtuais e sistemas de notícias.
                </ProjectDesc>
              </ProjectCard>
            </ProjectsGrid>
          </ExperienceItem>
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
