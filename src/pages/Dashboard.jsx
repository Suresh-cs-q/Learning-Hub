import { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions, animations } from '../styles/theme';
import { Card, Badge } from '../components/common/StyledComponents';

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  // Simulated data
  const userData = {
    name: 'Test User',
    coursesInProgress: 3,
    completedCourses: 12,
    totalHours: 156,
    streak: 15,
    nextMilestone: 'Complete 15 courses'
  };

  const recommendations = [
    { 
      id: 1, 
      title: 'Advanced Machine Learning',
      duration: '12 weeks',
      level: 'Advanced',
      image: '🤖',
      progress: 0
    },
    { 
      id: 2, 
      title: 'Web Development Bootcamp',
      duration: '8 weeks',
      level: 'Intermediate',
      image: '💻',
      progress: 0
    },
    { 
      id: 3, 
      title: 'Data Science Fundamentals',
      duration: '10 weeks',
      level: 'Beginner',
      image: '📊',
      progress: 0
    }
  ];

  const achievements = [
    { id: 1, title: 'Fast Learner', icon: '🚀', description: 'Completed 5 courses in one month' },
    { id: 2, title: 'Consistent', icon: '🎯', description: '15-day learning streak' },
    { id: 3, title: 'Top Performer', icon: '🏆', description: 'Scored 95% in assessments' }
  ];

  return (
    <DashboardContainer>
      <Header>
        <WelcomeSection>
          <Title>Welcome back, {userData.name}! 👋</Title>
          <Subtitle>Here&apos;s your learning progress and recommendations</Subtitle>
        </WelcomeSection>
        <Actions>
          <ThemeToggle onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? '☀️' : '🌙'}
          </ThemeToggle>
          <NotificationsButton>🔔</NotificationsButton>
        </Actions>
      </Header>

      <MainContent>
        <LeftSection>
          <StatsGrid>
            <StatCard>
              <StatIcon>📚</StatIcon>
              <StatValue>{userData.coursesInProgress}</StatValue>
              <StatLabel>Courses in Progress</StatLabel>
            </StatCard>
            <StatCard>
              <StatIcon>✅</StatIcon>
              <StatValue>{userData.completedCourses}</StatValue>
              <StatLabel>Completed Courses</StatLabel>
            </StatCard>
            <StatCard>
              <StatIcon>⏱️</StatIcon>
              <StatValue>{userData.totalHours}h</StatValue>
              <StatLabel>Total Learning Hours</StatLabel>
            </StatCard>
            <StatCard>
              <StatIcon>🔥</StatIcon>
              <StatValue>{userData.streak} days</StatValue>
              <StatLabel>Learning Streak</StatLabel>
            </StatCard>
          </StatsGrid>

          <Section>
            <SectionHeader>
              <SectionTitle>AI-Powered Recommendations</SectionTitle>
              <ViewAllButton>View All</ViewAllButton>
            </SectionHeader>
            <RecommendationsGrid>
              {recommendations.map(course => (
                <RecommendationCard key={course.id}>
                  <div>
                    <CourseHeader>
                      <CourseImage>{course.image}</CourseImage>
                      <CourseTitle>{course.title}</CourseTitle>
                    </CourseHeader>
                    <CourseInfo>
                      <InfoItem>
                        <span>⏱️</span>
                        {course.duration}
                      </InfoItem>
                      <InfoItem>
                        <span>📊</span>
                        {course.level}
                      </InfoItem>
                    </CourseInfo>
                  </div>
                  <EnrollButton>Enroll Now</EnrollButton>
                </RecommendationCard>
              ))}
            </RecommendationsGrid>
          </Section>
        </LeftSection>

        <RightSection>
          <Section>
            <SectionHeader>
              <SectionTitle>Recent Achievements</SectionTitle>
              <Badge $variant="success">New!</Badge>
            </SectionHeader>
            <AchievementsList>
              {achievements.map(achievement => (
                <AchievementCard key={achievement.id}>
                  <AchievementIcon>{achievement.icon}</AchievementIcon>
                  <AchievementInfo>
                    <AchievementTitle>{achievement.title}</AchievementTitle>
                    <AchievementDescription>
                      {achievement.description}
                    </AchievementDescription>
                  </AchievementInfo>
                </AchievementCard>
              ))}
            </AchievementsList>
          </Section>

          <Section>
            <SectionHeader>
              <SectionTitle>Next Milestone</SectionTitle>
            </SectionHeader>
            <MilestoneCard>
              <MilestoneIcon>🎯</MilestoneIcon>
              <MilestoneText>{userData.nextMilestone}</MilestoneText>
            </MilestoneCard>
          </Section>
        </RightSection>
      </MainContent>

      <ChatbotButton onClick={() => setShowChatbot(!showChatbot)}>
        {showChatbot ? '✕' : '💬'}
      </ChatbotButton>

      {showChatbot && (
        <ChatbotWindow>
          <ChatbotHeader>
            AI Learning Assistant
            <CloseButton onClick={() => setShowChatbot(false)}>✕</CloseButton>
          </ChatbotHeader>
          <ChatbotContent>
            <ChatbotMessage>
              👋 Hi! I&apos;m your AI learning assistant. How can I help you today?
            </ChatbotMessage>
          </ChatbotContent>
          <ChatbotInput placeholder="Type your question..." />
        </ChatbotWindow>
      )}
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  padding: 2rem 4rem;
  min-height: 100vh;
  background: ${colors.background};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
`;

const WelcomeSection = styled.div`
  animation: ${animations.fadeIn} 0.5s ease;
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
  font-weight: 500;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  color: ${colors.text};
  transition: all ${transitions.default};

  &:hover {
    background: ${colors.background};
    transform: scale(1.1);
  }
`;

const NotificationsButton = styled(ThemeToggle)``;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const StatCard = styled(Card)`
  padding: 1.5rem;
  text-align: left;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid ${colors.border};
  transition: all ${transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.md};
  }
`;

const StatIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  color: ${colors.textLight};
  font-size: 0.875rem;
  font-weight: 500;
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
  animation: ${animations.fadeIn} 0.5s ease;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${colors.text};
  margin: 0;
`;

const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: ${colors.primary};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${transitions.default};

  &:hover {
    opacity: 0.8;
  }
`;

const RecommendationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
`;

const RecommendationCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
  border: 1px solid ${colors.border};
  transition: all ${transitions.default};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.md};
  }
`;

const CourseHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const CourseImage = styled.div`
  font-size: 2.5rem;
  line-height: 1;
`;

const CourseTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${colors.textLight};
  font-size: 0.9rem;

  span {
    font-size: 1.1rem;
    color: ${colors.textLight};
  }
`;

const EnrollButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background: ${colors.primary};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all ${transitions.default};

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AchievementCard = styled(Card)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid ${colors.border};
  transition: all ${transitions.default};

  &:hover {
    transform: translateX(2px);
    box-shadow: ${shadows.md};
  }
`;

const AchievementIcon = styled.div`
  font-size: 1.5rem;
`;

const AchievementInfo = styled.div`
  flex: 1;
`;

const AchievementTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.25rem;
`;

const AchievementDescription = styled.p`
  color: ${colors.textLight};
  font-size: 0.875rem;
  line-height: 1.4;
`;

const MilestoneCard = styled(Card)`
  padding: 2.5rem;
  text-align: center;
  background: white;
  border-radius: 16px;
  box-shadow: ${shadows.lg};
  border: 1px solid ${colors.border};
  transition: all ${transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${shadows.xl};
  }
`;

const MilestoneIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  animation: ${animations.pulse} 2s infinite;
`;

const MilestoneText = styled.p`
  color: ${colors.text};
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const ChatbotButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: ${colors.primary};
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: ${shadows.lg};
  transition: all ${transitions.default};
  z-index: 100;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${shadows.xl};
  }
`;

const ChatbotWindow = styled.div`
  position: fixed;
  bottom: 7rem;
  right: 2rem;
  width: 400px;
  height: 600px;
  background: white;
  border-radius: 20px;
  box-shadow: ${shadows.xl};
  display: flex;
  flex-direction: column;
  z-index: 100;
  border: 1px solid ${colors.border};
  animation: ${animations.fadeIn} 0.3s ease;
`;

const ChatbotHeader = styled.div`
  padding: 1rem;
  background: ${colors.primary};
  color: white;
  border-radius: 12px 12px 0 0;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all ${transitions.default};

  &:hover {
    transform: rotate(90deg);
  }
`;

const ChatbotContent = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.primary}40;
    border-radius: 3px;
  }
`;

const ChatbotMessage = styled.div`
  background: ${colors.background};
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  box-shadow: ${shadows.sm};
  animation: ${animations.fadeIn} 0.3s ease;
`;

const ChatbotInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-top: 1px solid ${colors.border};
  font-size: 1rem;
  border-radius: 0 0 12px 12px;

  &:focus {
    outline: none;
    background: ${colors.background};
  }

  &::placeholder {
    color: ${colors.textLight};
  }
`;

export default Dashboard; 