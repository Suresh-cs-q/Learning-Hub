import { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions, animations } from '../styles/theme';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedQuestions, setExpandedQuestions] = useState([]);

  const categories = [
    { id: 'all', label: 'All Questions', icon: '❓' },
    { id: 'general', label: 'General', icon: '📚' },
    { id: 'account', label: 'Account', icon: '👤' },
    { id: 'courses', label: 'Courses', icon: '🎓' },
    { id: 'billing', label: 'Billing', icon: '💳' },
    { id: 'technical', label: 'Technical', icon: '🔧' },
  ];

  const faqData = [
    {
      category: 'general',
      questions: [
        {
          id: 'g1',
          question: 'What is Learning Hub?',
          answer: 'Learning Hub is an AI-powered online learning platform that offers courses in various fields including programming, design, business, and more. Our platform uses advanced AI technology to provide personalized learning experiences.'
        },
        {
          id: 'g2',
          question: 'How do I get started?',
          answer: 'Getting started is easy! Simply create an account, browse our course catalog, and enroll in any course that interests you. Our AI system will help recommend courses based on your interests and goals.'
        }
      ]
    },
    {
      category: 'account',
      questions: [
        {
          id: 'a1',
          question: 'How do I change my password?',
          answer: 'To change your password, go to your Account Settings, click on "Security," and select "Change Password." Follow the prompts to set a new password.'
        },
        {
          id: 'a2',
          question: 'Can I have multiple profiles?',
          answer: 'Currently, we only support one profile per account. This helps us provide the most personalized learning experience possible.'
        }
      ]
    },
    {
      category: 'courses',
      questions: [
        {
          id: 'c1',
          question: 'Are the courses self-paced?',
          answer: 'Yes, all our courses are self-paced. You can learn at your own speed and access the course content at any time after enrollment.'
        },
        {
          id: 'c2',
          question: 'Do I get a certificate upon completion?',
          answer: 'Yes! Upon completing a course, you&apos;ll receive a verified digital certificate that you can share on your resume or social media profiles.'
        }
      ]
    },
    {
      category: 'billing',
      questions: [
        {
          id: 'b1',
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for business accounts.'
        },
        {
          id: 'b2',
          question: 'Do you offer refunds?',
          answer: 'Yes, we offer a 30-day money-back guarantee on all course purchases. If you&apos;re not satisfied, contact our support team for a full refund.'
        }
      ]
    },
    {
      category: 'technical',
      questions: [
        {
          id: 't1',
          question: 'What are the system requirements?',
          answer: 'Our platform works best on modern web browsers (Chrome, Firefox, Safari, Edge). We recommend a stable internet connection and updated browser version for the best experience.'
        },
        {
          id: 't2',
          question: 'Can I download courses for offline viewing?',
          answer: 'Yes, premium subscribers can download course videos for offline viewing using our mobile app. This feature is currently available on iOS and Android devices.'
        }
      ]
    }
  ];

  const toggleQuestion = (questionId) => {
    setExpandedQuestions(prev => 
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const filteredFAQs = faqData.filter(category => {
    if (selectedCategory !== 'all' && category.category !== selectedCategory) {
      return false;
    }
    
    if (searchQuery) {
      return category.questions.some(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return true;
  });

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <div>
            <Title>Frequently Asked Questions</Title>
            <Subtitle>Find answers to common questions about our platform</Subtitle>
          </div>
        </HeaderContent>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon>🔍</SearchIcon>
        </SearchContainer>
      </Header>

      <MainContent>
        <Categories>
          {categories.map(category => (
            <CategoryButton
              key={category.id}
              $isActive={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              <CategoryIcon>{category.icon}</CategoryIcon>
              {category.label}
            </CategoryButton>
          ))}
        </Categories>

        <FAQContainer>
          {filteredFAQs.map(category => (
            <CategorySection key={category.category}>
              <CategoryTitle>
                {categories.find(c => c.id === category.category)?.label}
              </CategoryTitle>
              <QuestionsList>
                {category.questions.map(item => (
                  <QuestionCard
                    key={item.id}
                    $isExpanded={expandedQuestions.includes(item.id)}
                    onClick={() => toggleQuestion(item.id)}
                  >
                    <QuestionHeader>
                      <Question>{item.question}</Question>
                      <ExpandIcon $isExpanded={expandedQuestions.includes(item.id)}>
                        ▼
                      </ExpandIcon>
                    </QuestionHeader>
                    {expandedQuestions.includes(item.id) && (
                      <Answer>{item.answer}</Answer>
                    )}
                  </QuestionCard>
                ))}
              </QuestionsList>
            </CategorySection>
          ))}
        </FAQContainer>

        <ContactSection>
          <ContactCard>
            <ContactContent>
              <ContactTitle>Still have questions?</ContactTitle>
              <ContactText>
                Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
              </ContactText>
              <ContactActions>
                <PrimaryButton>Contact Support</PrimaryButton>
                <SecondaryButton>Browse Help Center</SecondaryButton>
              </ContactActions>
            </ContactContent>
          </ContactCard>
        </ContactSection>
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
  text-align: center;
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

const SearchContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto 0;
  position: relative;
  padding: 0 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1.25rem 1.5rem 1.25rem 3.5rem;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  font-size: 1.1rem;
  transition: all ${transitions.default};
  background: white;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primary}20;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 3.25rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.25rem;
  color: ${colors.textLight};
`;

const MainContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const Categories = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
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

const CategoryIcon = styled.span`
  font-size: 1.25rem;
`;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const CategorySection = styled.div``;

const CategoryTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 1.5rem;
`;

const QuestionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const QuestionCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  cursor: pointer;
  border: 1px solid ${colors.border};
  transition: all ${transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.sm};
  }

  ${props => props.$isExpanded && `
    background: ${colors.background};
  `}
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

const Question = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.text};
`;

const ExpandIcon = styled.span`
  color: ${colors.textLight};
  transition: transform ${transitions.default};
  font-size: 0.8rem;

  ${props => props.$isExpanded && `
    transform: rotate(180deg);
  `}
`;

const Answer = styled.p`
  color: ${colors.textLight};
  line-height: 1.6;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${colors.border};
  animation: ${animations.fadeIn} 0.3s ease;
`;

const ContactSection = styled.section`
  margin-top: 4rem;
`;

const ContactCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  border: 1px solid ${colors.border};
`;

const ContactContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContactTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  color: ${colors.textLight};
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ContactActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const PrimaryButton = styled.button`
  padding: 1rem 2rem;
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

const SecondaryButton = styled.button`
  padding: 1rem 2rem;
  background: white;
  color: ${colors.text};
  border: 1px solid ${colors.border};
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${transitions.default};

  &:hover {
    background: ${colors.background};
    transform: translateY(-2px);
  }
`;

export default FAQ; 