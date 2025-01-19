import { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions, animations } from '../styles/theme';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Topics', icon: '📚' },
    { id: 'getting-started', label: 'Getting Started', icon: '🚀' },
    { id: 'account', label: 'Account & Billing', icon: '👤' },
    { id: 'courses', label: 'Courses', icon: '📖' },
    { id: 'technical', label: 'Technical Issues', icon: '🔧' },
  ];

  const articles = [
    {
      id: 1,
      category: 'getting-started',
      title: 'How to Start Your First Course',
      description: 'Learn how to enroll and begin your learning journey.',
      views: 1520,
      helpful: 95
    },
    {
      id: 2,
      category: 'account',
      title: 'Managing Your Subscription',
      description: 'Everything you need to know about billing and subscriptions.',
      views: 890,
      helpful: 88
    },
    {
      id: 3,
      category: 'courses',
      title: 'Course Completion Certificates',
      description: 'How to earn and download your certificates.',
      views: 1200,
      helpful: 92
    },
    {
      id: 4,
      category: 'technical',
      title: 'Troubleshooting Video Playback',
      description: 'Common video issues and how to resolve them.',
      views: 750,
      helpful: 85
    }
  ];

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking the "Forgot Password" link on the login page. Follow the instructions sent to your email to create a new password.'
    },
    {
      question: 'Can I download courses for offline viewing?',
      answer: 'Yes, premium subscribers can download course videos for offline viewing using our mobile app.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for business accounts.'
    },
    {
      question: 'How do I get a refund?',
      answer: 'We offer a 30-day money-back guarantee. Contact our support team with your order details to process your refund.'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <div>
            <Title>Help Center</Title>
            <Subtitle>Find answers to your questions</Subtitle>
          </div>
          <ContactButton>Contact Support</ContactButton>
        </HeaderContent>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search for help articles..."
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

        <Section>
          <SectionTitle>Popular Articles</SectionTitle>
          <ArticlesGrid>
            {filteredArticles.map(article => (
              <ArticleCard key={article.id}>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDescription>{article.description}</ArticleDescription>
                <ArticleStats>
                  <StatItem>
                    <StatIcon>👁️</StatIcon>
                    {article.views} views
                  </StatItem>
                  <StatItem>
                    <StatIcon>👍</StatIcon>
                    {article.helpful}% helpful
                  </StatItem>
                </ArticleStats>
              </ArticleCard>
            ))}
          </ArticlesGrid>
        </Section>

        <Section>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <FAQContainer>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <Question>
                  <QuestionIcon>Q</QuestionIcon>
                  {faq.question}
                </Question>
                <Answer>
                  <AnswerIcon>A</AnswerIcon>
                  {faq.answer}
                </Answer>
              </FAQItem>
            ))}
          </FAQContainer>
        </Section>

        <Section>
          <ContactCard>
            <ContactContent>
              <ContactTitle>Still need help?</ContactTitle>
              <ContactText>
                Our support team is available 24/7 to assist you with any questions or issues.
              </ContactText>
              <ContactActions>
                <PrimaryButton>Chat with Support</PrimaryButton>
                <SecondaryButton>Submit Ticket</SecondaryButton>
              </ContactActions>
            </ContactContent>
          </ContactCard>
        </Section>
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

const ContactButton = styled.button`
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

const SearchContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto 0;
  position: relative;
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
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.25rem;
  color: ${colors.textLight};
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

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 2rem;
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ArticleCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${colors.border};
  transition: all ${transitions.default};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.lg};
  }
`;

const ArticleTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.75rem;
`;

const ArticleDescription = styled.p`
  color: ${colors.textLight};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ArticleStats = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.textLight};
  font-size: 0.9rem;
`;

const StatIcon = styled.span`
  font-size: 1rem;
`;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${colors.border};
`;

const Question = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 1rem;
`;

const QuestionIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: ${colors.primary};
  color: white;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
`;

const Answer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: ${colors.textLight};
  line-height: 1.6;
`;

const AnswerIcon = styled(QuestionIcon)`
  background: ${colors.background};
  color: ${colors.text};
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

export default HelpCenter; 