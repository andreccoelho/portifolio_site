import styled from 'styled-components';
import { HiOutlineCode, HiOutlineDatabase, HiOutlineColorSwatch, HiOutlineGlobeAlt } from 'react-icons/hi';

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  background: #22242a;
`;

const Container = styled.div`
  max-width: 1100px;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1a1b1f;
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

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  color: #00b74b;
  margin-bottom: 1.25rem;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const SkillTag = styled.span`
  background: #25272d;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  border: 1px solid #333;
  transition: all 0.2s ease;

  &:hover {
    border-color: #00b74b;
    color: #00b74b;
  }
`;

const skillCategories = [
  {
    icon: HiOutlineCode,
    title: 'Desenvolvimento Front-End',
    skills: ['ReactJS', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3']
  },
  {
    icon: HiOutlineDatabase,
    title: 'Dados & Back-End',
    skills: ['SQL', 'MySQL', 'PostgreSQL', 'Python', 'Java', 'Golang', 'Power BI']
  },
  {
    icon: HiOutlineColorSwatch,
    title: 'Design & Ferramentas',
    skills: ['Figma', 'Adobe Photoshop', 'Pacote Office', 'Scrum', 'Kanban']
  },
  {
    icon: HiOutlineGlobeAlt,
    title: 'Redes & Infraestrutura',
    skills: ['Conceitos de Rede', 'Endereçamento', 'Segurança', 'Cisco Networking']
  }
];

const Skills = () => {
  return (
    <SkillsSection id="habilidades">
      <Container>
        <SectionTitle>Habilidades Técnicas</SectionTitle>
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index}>
              <IconWrapper>
                <category.icon className="neon-icon" />
              </IconWrapper>
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillTags>
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag key={skillIndex}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
