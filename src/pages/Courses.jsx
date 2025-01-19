import { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions } from '../styles/theme';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Development', 'Data Science', 'AI & ML', 'Design', 'Business'];

  const courses = [
    {
      id: 1,
      title: 'Advanced Machine Learning',
      category: 'AI & ML',
      duration: '12 weeks',
      level: 'Advanced',
      icon: '🤖',
      instructor: 'Dr. Sarah Chen',
      enrolled: 1234
    },
    {
      id: 2,
      title: 'Web Development Bootcamp',
      category: 'Development',
      duration: '8 weeks',
      level: 'Intermediate',
      icon: '💻',
      instructor: 'John Smith',
      enrolled: 2345
    },
    {
      id: 3,
      title: 'Data Science Fundamentals',
      category: 'Data Science',
      duration: '10 weeks',
      level: 'Beginner',
      icon: '📊',
      instructor: 'Alex Johnson',
      enrolled: 1567
    },
    {
      id: 4,
      title: 'UI/UX Design Principles',
      category: 'Design',
      duration: '6 weeks',
      level: 'Intermediate',
      icon: '🎨',
      instructor: 'Emma Davis',
      enrolled: 890
    },
    {
      id: 5,
      title: 'Business Analytics',
      category: 'Business',
      duration: '8 weeks',
      level: 'Intermediate',
      icon: '📈',
      instructor: 'Michael Brown',
      enrolled: 1432
    }
  ];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <div>
            <Title>Explore Courses</Title>
            <Subtitle>Discover your next learning adventure</Subtitle>
          </div>
          <SearchInput placeholder="Search courses..." />
        </HeaderContent>
      </Header>

      <MainContent>
        <Categories>
          {categories.map(category => (
            <CategoryButton
              key={category}
              $active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </Categories>

        <CoursesGrid>
          {filteredCourses.map(course => (
            <CourseCard key={course.id}>
              <CourseIcon>{course.icon}</CourseIcon>
              <CourseContent>
                <CourseTitle>{course.title}</CourseTitle>
                <CourseDetails>
                  <DetailItem>
                    <span>⏱️</span> {course.duration}
                  </DetailItem>
                  <DetailItem>
                    <span>📊</span> {course.level}
                  </DetailItem>
                </CourseDetails>
                <InstructorInfo>
                  <InstructorName>{course.instructor}</InstructorName>
                  <EnrolledCount>{course.enrolled.toLocaleString()} students</EnrolledCount>
                </InstructorInfo>
                <EnrollButton>Enroll Now</EnrollButton>
              </CourseContent>
            </CourseCard>
          ))}
        </CoursesGrid>
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
  border-radius: 100px;
  border: none;
  background: ${props => props.$active ? colors.primary : 'white'};
  color: ${props => props.$active ? 'white' : colors.text};
  font-weight: 500;
  cursor: pointer;
  transition: all ${transitions.default};
  box-shadow: ${shadows.sm};

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${shadows.md};
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
`;

const CourseCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${colors.border};
  transition: all ${transitions.default};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.lg};
  }
`;

const CourseIcon = styled.div`
  font-size: 3rem;
  padding: 2rem;
  background: ${colors.background};
  text-align: center;
`;

const CourseContent = styled.div`
  padding: 2rem;
`;

const CourseTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const CourseDetails = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.textLight};
  font-size: 0.9rem;

  span {
    font-size: 1.1rem;
  }
`;

const InstructorInfo = styled.div`
  margin-bottom: 1.5rem;
`;

const InstructorName = styled.div`
  font-weight: 500;
  color: ${colors.text};
  margin-bottom: 0.25rem;
`;

const EnrolledCount = styled.div`
  color: ${colors.textLight};
  font-size: 0.9rem;
`;

const EnrollButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  background: ${colors.primary};
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all ${transitions.default};

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

export default Courses; 