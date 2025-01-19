import { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions, animations } from '../styles/theme';

const LearningPaths = () => {
  const [selectedPath, setSelectedPath] = useState(null);

  const learningPaths = [
    {
      id: 1,
      title: 'Full Stack Development',
      description: 'Master both frontend and backend development',
      duration: '6 months',
      courses: 12,
      progress: 45,
      icon: '💻',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      milestones: [
        { title: 'Frontend Fundamentals', completed: true },
        { title: 'Backend Basics', completed: true },
        { title: 'Database Management', completed: false },
        { title: 'API Development', completed: false }
      ]
    },
    {
      id: 2,
      title: 'AI & Machine Learning',
      description: 'Deep dive into artificial intelligence',
      duration: '8 months',
      courses: 15,
      progress: 20,
      icon: '🤖',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Science'],
      milestones: [
        { title: 'Python for AI', completed: true },
        { title: 'Machine Learning Basics', completed: false },
        { title: 'Deep Learning', completed: false },
        { title: 'AI Projects', completed: false }
      ]
    },
    {
      id: 3,
      title: 'Cloud Architecture',
      description: 'Build and deploy scalable cloud solutions',
      duration: '5 months',
      courses: 10,
      progress: 70,
      icon: '☁️',
      skills: ['AWS', 'Docker', 'Kubernetes', 'DevOps'],
      milestones: [
        { title: 'Cloud Basics', completed: true },
        { title: 'Containerization', completed: true },
        { title: 'Orchestration', completed: true },
        { title: 'Cloud Security', completed: false }
      ]
    }
  ];

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <div>
            <Title>Learning Paths</Title>
            <Subtitle>Structured paths to achieve your learning goals</Subtitle>
          </div>
          <SearchInput placeholder="Search learning paths..." />
        </HeaderContent>
      </Header>

      <MainContent>
        <PathsGrid>
          {learningPaths.map(path => (
            <PathCard 
              key={path.id}
              onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
              $isExpanded={selectedPath === path.id}
            >
              <PathHeader>
                <PathIcon>{path.icon}</PathIcon>
                <PathInfo>
                  <PathTitle>{path.title}</PathTitle>
                  <PathDescription>{path.description}</PathDescription>
                </PathInfo>
              </PathHeader>

              <PathStats>
                <StatItem>
                  <span>⏱️</span> {path.duration}
                </StatItem>
                <StatItem>
                  <span>📚</span> {path.courses} courses
                </StatItem>
                <ProgressBar>
                  <ProgressFill style={{ width: `${path.progress}%` }} />
                </ProgressBar>
                <ProgressText>{path.progress}% Complete</ProgressText>
              </PathStats>

              <ExpandedContent $isVisible={selectedPath === path.id}>
                <Section>
                  <SectionTitle>Key Skills</SectionTitle>
                  <SkillsList>
                    {path.skills.map((skill, index) => (
                      <SkillTag key={index}>{skill}</SkillTag>
                    ))}
                  </SkillsList>
                </Section>

                <Section>
                  <SectionTitle>Milestones</SectionTitle>
                  <MilestonesList>
                    {path.milestones.map((milestone, index) => (
                      <Milestone key={index} $completed={milestone.completed}>
                        <MilestoneIcon>
                          {milestone.completed ? '✅' : '⭕'}
                        </MilestoneIcon>
                        <MilestoneTitle>{milestone.title}</MilestoneTitle>
                      </Milestone>
                    ))}
                  </MilestonesList>
                </Section>

                <ContinueButton>
                  {path.progress === 0 ? 'Start Path' : 'Continue Learning'}
                </ContinueButton>
              </ExpandedContent>
            </PathCard>
          ))}
        </PathsGrid>
      </MainContent>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${colors.background};
`;

const Header = styled.div`
  background: white;
  padding: 2rem 0;
  border-bottom: 1px solid ${colors.border};
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: ${colors.textLight};
  font-size: 1.1rem;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 1rem 1.5rem;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  font-size: 1rem;
  transition: all ${transitions.default};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primary}20;
  }
`;

const MainContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const PathsGrid = styled.div`
  display: grid;
  gap: 2rem;
`;

const PathCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  cursor: pointer;
  border: 1px solid ${colors.border};
  transition: all ${transitions.default};
  
  ${props => props.$isExpanded && `
    transform: scale(1.02);
    box-shadow: ${shadows.lg};
  `}

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.lg};
  }
`;

const PathHeader = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const PathIcon = styled.div`
  font-size: 2.5rem;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.background};
  border-radius: 16px;
`;

const PathInfo = styled.div`
  flex: 1;
`;

const PathTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const PathDescription = styled.p`
  color: ${colors.textLight};
  font-size: 1rem;
  line-height: 1.5;
`;

const PathStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.textLight};
  font-size: 0.9rem;

  span {
    font-size: 1.1rem;
  }
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 8px;
  background: ${colors.background};
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: ${colors.primary};
  border-radius: 4px;
  transition: width 0.3s ease;
`;

const ProgressText = styled.div`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 0.9rem;
`;

const ExpandedContent = styled.div`
  display: grid;
  gap: 2rem;
  height: ${props => props.$isVisible ? 'auto' : '0'};
  opacity: ${props => props.$isVisible ? '1' : '0'};
  overflow: hidden;
  transition: all ${transitions.default};
  margin-top: ${props => props.$isVisible ? '2rem' : '0'};
`;

const Section = styled.div`
  display: grid;
  gap: 1rem;
`;

const SectionTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.text};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillTag = styled.span`
  background: ${colors.background};
  color: ${colors.text};
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const MilestonesList = styled.div`
  display: grid;
  gap: 1rem;
`;

const Milestone = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${colors.background};
  border-radius: 12px;
  transition: all ${transitions.default};
  opacity: ${props => props.$completed ? '1' : '0.7'};

  &:hover {
    transform: translateX(5px);
  }
`;

const MilestoneIcon = styled.div`
  font-size: 1.25rem;
`;

const MilestoneTitle = styled.div`
  font-weight: 500;
  color: ${colors.text};
`;

const ContinueButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${colors.primary};
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${transitions.default};

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export default LearningPaths; 