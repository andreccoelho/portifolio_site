import { useState } from 'react';
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
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};

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

const ExpandIcon = styled.span`
  position: absolute;
  right: 1.5rem;
  top: 2rem;
  font-size: 1.2rem;
  color: #00b74b;
  transition: transform 0.3s ease;
  transform: ${props => props.$expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-rows: ${props => props.$expanded ? '1fr' : '0fr'};
  overflow: hidden;
  transition: grid-template-rows 0.4s ease, margin-top 0.4s ease, opacity 0.3s ease;
  margin-top: ${props => props.$expanded ? '1.5rem' : '0'};
  opacity: ${props => props.$expanded ? '1' : '0'};

  & > div {
    overflow: hidden;
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

const ProjectsGridExpanded = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #333;
`;

const ProjectCardExpanded = styled.a`
  display: block;
  background: #1a1b1f;
  border-radius: 12px;
  border: 1px solid #333;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    border-color: #00b74b;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 183, 75, 0.1);
  }

  &:hover .image-container::after {
    opacity: 0.3;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 160px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
    opacity: 1;
    transition: opacity 0.3s ease;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom: 1px solid #333;
`;

const ProjectInfo = styled.div`
  padding: 1rem;
`;

const ProjectName = styled.h4`
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 0.25rem;
`;

const ProjectLink = styled.span`
  font-size: 0.8rem;
  color: #00b74b;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &::after {
    content: '↗';
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


const freelanceProjects = [
  {
    name: 'Casarão Lustres',
    image: '/imagens/casarao.png',
    link: 'https://www.casaraolustres.com.br',
    category: 'E-commerce'
  },
  {
    name: 'Riû',
    image: '/imagens/riu.png',
    link: 'https://useriu.com.br',
    category: 'E-commerce'
  },
  {
    name: 'Carpe',
    image: '/imagens/carpe.png',
    link: 'https://usecarpe.com.br',
    category: 'E-commerce'
  },
  {
    name: 'PVR Capital',
    image: '/imagens/pvr.png',
    link: 'https://pvr.capital',
    category: 'Site Institucional'
  },
  {
    name: 'Pilotage',
    image: '/imagens/pilotage.png',
    link: 'https://pilotage.com.br',
    category: 'Site Institucional'
  },
  {
    name: 'BrazilRoute',
    image: '/imagens/brazilroute.png',
    link: 'https://brazilroute.com.br',
    category: 'Site Institucional'
  },
  {
    name: 'New Pharm',
    image: '/imagens/newpharm.png',
    link: 'https://newpharmcompany.com',
    category: 'Site Institucional'
  },
  {
    name: 'CH Construtora',
    image: '/imagens/chconstrutora.png',
    link: 'https://chconstrutorarj.com.br',
    category: 'Site Institucional'
  },
  {
    name: 'Charlote Rio',
    image: '/imagens/charlote.png',
    link: 'https://charloterio.com.br',
    category: 'Solução Digital'
  }
];

const Experience = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <ExperienceSection id="experiencia">
      <Container>
        <SectionTitle>Experiência Profissional</SectionTitle>
        <Timeline>
          <ExperienceItem $clickable={false}>
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

          <ExperienceItem $clickable={true} onClick={() => toggleExpand(1)}>
            <ExpandIcon $expanded={expandedItem === 1}>▼</ExpandIcon>
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
            <ProjectsContainer $expanded={expandedItem === 1}>
              <div>
                <ProjectsGridExpanded>
                  {freelanceProjects.map((project, index) => (
                    <ProjectCardExpanded
                      key={index}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <ImageContainer className="image-container">
                      <ProjectImage src={project.image} alt={project.name} />
                    </ImageContainer>
                      <ProjectInfo>
                        <ProjectName>{project.name}</ProjectName>
                        <ProjectLink>Visitar site</ProjectLink>
                      </ProjectInfo>
                    </ProjectCardExpanded>
                  ))}
                </ProjectsGridExpanded>
              </div>
            </ProjectsContainer>
          </ExperienceItem>
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
