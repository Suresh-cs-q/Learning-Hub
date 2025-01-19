import { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions } from '../styles/theme';

const Mentors = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Mentors' },
    { id: 'frontend', label: 'Frontend Development' },
    { id: 'backend', label: 'Backend Development' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'design', label: 'UI/UX Design' },
  ];

  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'AI Research Scientist',
      category: 'ai',
      avatar: '👩‍🔬',
      rating: 4.9,
      reviews: 128,
      expertise: ['Machine Learning', 'Deep Learning', 'Computer Vision'],
      availability: 'Mon, Wed, Fri',
      hourlyRate: '$120',
      description: 'Former Google AI researcher with 10+ years of experience in machine learning and deep learning.',
    },
    {
      id: 2,
      name: 'Alex Rodriguez',
      title: 'Senior Frontend Engineer',
      category: 'frontend',
      avatar: '👨‍💻',
      rating: 4.8,
      reviews: 95,
      expertise: ['React', 'Vue.js', 'Web Performance'],
      availability: 'Tue, Thu, Sat',
      hourlyRate: '$95',
      description: 'Frontend architect specializing in React and modern JavaScript frameworks.',
    },
    {
      id: 3,
      name: 'Emma Davis',
      title: 'UX Design Lead',
      category: 'design',
      avatar: '👩‍🎨',
      rating: 4.9,
      reviews: 156,
      expertise: ['User Research', 'Design Systems', 'Prototyping'],
      availability: 'Mon-Fri',
      hourlyRate: '$110',
      description: 'Design leader with experience at top tech companies, focusing on user-centered design.',
    },
    {
      id: 4,
      name: 'Michael Kim',
      title: 'Backend Architect',
      category: 'backend',
      avatar: '👨‍🚀',
      rating: 4.7,
      reviews: 89,
      expertise: ['Node.js', 'Python', 'System Design'],
      availability: 'Wed-Sun',
      hourlyRate: '$100',
      description: 'Experienced backend developer specializing in scalable architectures and cloud solutions.',
    },
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesCategory = selectedCategory === 'all' || mentor.category === selectedCategory;
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <div>
            <Title>Expert Mentors</Title>
            <Subtitle>Learn from industry experts through 1-on-1 mentorship</Subtitle>
          </div>
          <SearchInput
            type="text"
            placeholder="Search by name or expertise..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </HeaderContent>
      </Header>

      <MainContent>
        <Categories>
          {categories.map(category => (
            <CategoryButton
              key={category.id}
              $isActive={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </CategoryButton>
          ))}
        </Categories>

        <MentorsGrid>
          {filteredMentors.map(mentor => (
            <MentorCard key={mentor.id}>
              <MentorHeader>
                <Avatar>{mentor.avatar}</Avatar>
                <MentorInfo>
                  <MentorName>{mentor.name}</MentorName>
                  <MentorTitle>{mentor.title}</MentorTitle>
                </MentorInfo>
                <Rating>
                  ⭐ {mentor.rating} ({mentor.reviews})
                </Rating>
              </MentorHeader>

              <MentorDescription>
                {mentor.description}
              </MentorDescription>

              <ExpertiseList>
                {mentor.expertise.map((skill, index) => (
                  <ExpertiseTag key={index}>{skill}</ExpertiseTag>
                ))}
              </ExpertiseList>

              <MentorDetails>
                <DetailItem>
                  <DetailIcon>📅</DetailIcon>
                  Available: {mentor.availability}
                </DetailItem>
                <DetailItem>
                  <DetailIcon>💰</DetailIcon>
                  {mentor.hourlyRate}/hour
                </DetailItem>
              </MentorDetails>

              <BookButton>Book Session</BookButton>
            </MentorCard>
          ))}
        </MentorsGrid>
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

const Categories = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.$isActive ? colors.primary : 'white'};
  color: ${props => props.$isActive ? 'white' : colors.text};
  border: 1px solid ${props => props.$isActive ? colors.primary : colors.border};
  border-radius: 100px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.sm};
    background: ${props => props.$isActive ? colors.primary : colors.background};
  }
`;

const MentorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
`;

const MentorCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${colors.border};
  transition: all ${transitions.default};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.lg};
  }
`;

const MentorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: ${colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const MentorInfo = styled.div`
  flex: 1;
`;

const MentorName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.25rem;
`;

const MentorTitle = styled.p`
  color: ${colors.textLight};
  font-size: 0.9rem;
`;

const Rating = styled.div`
  color: ${colors.text};
  font-weight: 500;
  font-size: 0.9rem;
`;

const MentorDescription = styled.p`
  color: ${colors.textLight};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ExpertiseList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const ExpertiseTag = styled.span`
  padding: 0.5rem 1rem;
  background: ${colors.background};
  color: ${colors.text};
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const MentorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${colors.text};
  font-size: 0.9rem;
`;

const DetailIcon = styled.span`
  font-size: 1.1rem;
`;

const BookButton = styled.button`
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

export default Mentors; 