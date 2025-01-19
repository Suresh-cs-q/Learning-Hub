import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, shadows } from '../styles/theme';

const Sitemap = () => {
  const sections = [
    {
      title: 'Main Pages',
      icon: '🏠',
      links: [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Courses', path: '/courses' },
        { name: 'Learning Paths', path: '/learning-paths' },
        { name: 'Progress', path: '/progress' },
        { name: 'Community', path: '/community' }
      ]
    },
    {
      title: 'Account & Profile',
      icon: '👤',
      links: [
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/register' },
        { name: 'Forgot Password', path: '/forgot-password' }
      ]
    },
    {
      title: 'Support',
      icon: '💡',
      links: [
        { name: 'Help Center', path: '/help-center' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Feedback', path: '/feedback' }
      ]
    },
    {
      title: 'Legal & Privacy',
      icon: '📜',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' },
        { name: 'Cookie Policy', path: '/cookie-policy' },
        { name: 'Security', path: '/security' }
      ]
    },
    {
      title: 'Additional Resources',
      icon: '📚',
      links: [
        { name: 'Accessibility', path: '/accessibility' },
        { name: 'Enterprise', path: '/enterprise' },
        { name: 'Mentors', path: '/mentors' }
      ]
    }
  ];

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <Title>Sitemap</Title>
          <Subtitle>Find everything on our platform</Subtitle>
        </HeaderContent>
      </Header>

      <MainContent>
        <Introduction>
          Welcome to our sitemap. Here you can find links to all pages and features available
          on Learning Hub.
        </Introduction>

        <SectionsGrid>
          {sections.map((section, index) => (
            <SectionCard key={index}>
              <SectionHeader>
                <SectionIcon>{section.icon}</SectionIcon>
                <SectionTitle>{section.title}</SectionTitle>
              </SectionHeader>
              <LinksList>
                {section.links.map((link, linkIndex) => (
                  <ListItem key={linkIndex}>
                    <StyledLink to={link.path}>
                      {link.name}
                    </StyledLink>
                  </ListItem>
                ))}
              </LinksList>
            </SectionCard>
          ))}
        </SectionsGrid>

        <SearchHint>
          Can&apos;t find what you&apos;re looking for?{' '}
          <ContactLink href="mailto:support@learninghub.com">
            Contact our support team
          </ContactLink>
        </SearchHint>
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

const MainContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const Introduction = styled.p`
  color: ${colors.textLight};
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: center;
`;

const SectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SectionCard = styled.div`
  background: white;
  border-radius: 20px;
  border: 1px solid ${colors.border};
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.md};
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SectionIcon = styled.span`
  font-size: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.text};
`;

const LinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  padding: 0.25rem 0;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primaryDark};
    text-decoration: underline;
  }
`;

const SearchHint = styled.p`
  text-align: center;
  color: ${colors.textLight};
  margin-top: 3rem;
`;

const ContactLink = styled.a`
  color: ${colors.primary};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export default Sitemap; 