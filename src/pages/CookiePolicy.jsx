import { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions } from '../styles/theme';

const CookiePolicy = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: '🍪' },
    { id: 'types', title: 'Cookie Types', icon: '📑' },
    { id: 'usage', title: 'How We Use Cookies', icon: '🔄' },
    { id: 'control', title: 'Your Controls', icon: '🎛️' },
    { id: 'thirdparty', title: 'Third-Party Cookies', icon: '🔗' }
  ];

  const lastUpdated = 'March 15, 2024';

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <div>
            <Title>Cookie Policy</Title>
            <Subtitle>Last updated: {lastUpdated}</Subtitle>
          </div>
        </HeaderContent>
      </Header>

      <MainContent>
        <Navigation>
          {sections.map(section => (
            <NavButton
              key={section.id}
              $isActive={activeSection === section.id}
              onClick={() => setActiveSection(section.id)}
            >
              <NavIcon>{section.icon}</NavIcon>
              {section.title}
            </NavButton>
          ))}
        </Navigation>

        <ContentSection>
          <Introduction>
            This Cookie Policy explains how Learning Hub uses cookies and similar technologies
            to provide, customize, evaluate, improve, promote and protect our services.
          </Introduction>

          {activeSection === 'overview' && (
            <Section>
              <SectionTitle>
                <SectionIcon>🍪</SectionIcon>
                What are Cookies?
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  Cookies are small text files that are stored on your device when you visit a website.
                  They serve various purposes:
                </Paragraph>
                <List>
                  <ListItem>Remember your preferences and settings</ListItem>
                  <ListItem>Keep you signed in to your account</ListItem>
                  <ListItem>Help us understand how you use our platform</ListItem>
                  <ListItem>Improve your browsing experience</ListItem>
                </List>
                <Paragraph>
                  We use both session cookies (which expire when you close your browser) and
                  persistent cookies (which stay on your device until they expire or you delete them).
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'types' && (
            <Section>
              <SectionTitle>
                <SectionIcon>📑</SectionIcon>
                Types of Cookies We Use
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  We use different types of cookies for various purposes:
                </Paragraph>
                <List>
                  <ListItem>
                    <Strong>Essential Cookies:</Strong> Required for basic platform functionality
                  </ListItem>
                  <ListItem>
                    <Strong>Functional Cookies:</Strong> Remember your preferences and settings
                  </ListItem>
                  <ListItem>
                    <Strong>Analytics Cookies:</Strong> Help us understand platform usage
                  </ListItem>
                  <ListItem>
                    <Strong>Marketing Cookies:</Strong> Used for personalized recommendations
                  </ListItem>
                </List>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'usage' && (
            <Section>
              <SectionTitle>
                <SectionIcon>🔄</SectionIcon>
                How We Use Cookies
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  We use cookies to:
                </Paragraph>
                <List>
                  <ListItem>Authenticate users and protect user accounts</ListItem>
                  <ListItem>Remember language and display preferences</ListItem>
                  <ListItem>Track platform performance and usage patterns</ListItem>
                  <ListItem>Provide personalized content and recommendations</ListItem>
                  <ListItem>Improve platform features and user experience</ListItem>
                </List>
                <Paragraph>
                  Some cookies are essential for platform functionality, while others enhance
                  your experience but are not required.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'control' && (
            <Section>
              <SectionTitle>
                <SectionIcon>🎛️</SectionIcon>
                Managing Your Cookie Preferences
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  You have control over how cookies are used:
                </Paragraph>
                <List>
                  <ListItem>Adjust cookie settings in your browser preferences</ListItem>
                  <ListItem>Use private/incognito browsing mode</ListItem>
                  <ListItem>Clear cookies and browsing data regularly</ListItem>
                  <ListItem>Opt-out of non-essential cookies on our platform</ListItem>
                </List>
                <Paragraph>
                  Note that blocking certain cookies may limit your access to some platform features.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'thirdparty' && (
            <Section>
              <SectionTitle>
                <SectionIcon>🔗</SectionIcon>
                Third-Party Cookies
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  We work with trusted partners who may set cookies on our platform:
                </Paragraph>
                <List>
                  <ListItem>Analytics providers (e.g., Google Analytics)</ListItem>
                  <ListItem>Payment processors for secure transactions</ListItem>
                  <ListItem>Social media integration features</ListItem>
                  <ListItem>Content delivery networks</ListItem>
                </List>
                <Paragraph>
                  These partners have their own privacy policies and cookie practices.
                  We recommend reviewing their policies for more information.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          <ContactInfo>
            <ContactTitle>Questions about cookies?</ContactTitle>
            <ContactText>
              Contact our privacy team at{' '}
              <ContactLink href="mailto:privacy@learninghub.com">
                privacy@learninghub.com
              </ContactLink>
            </ContactText>
          </ContactInfo>
        </ContentSection>
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
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: sticky;
  top: 2rem;
  height: fit-content;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${props => props.$isActive ? colors.primary : 'white'};
  color: ${props => props.$isActive ? 'white' : colors.text};
  border: 1px solid ${props => props.$isActive ? colors.primary : colors.border};
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${transitions.default};
  text-align: left;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.sm};
  }
`;

const NavIcon = styled.span`
  font-size: 1.25rem;
`;

const ContentSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid ${colors.border};
`;

const Introduction = styled.p`
  color: ${colors.textLight};
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SectionIcon = styled.span`
  font-size: 2rem;
`;

const SectionContent = styled.div`
  color: ${colors.text};
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const List = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "•";
    color: ${colors.primary};
    position: absolute;
    left: 0;
  }
`;

const Strong = styled.span`
  font-weight: 600;
  color: ${colors.text};
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${colors.border};
  text-align: center;
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  color: ${colors.textLight};
`;

const ContactLink = styled.a`
  color: ${colors.primary};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export default CookiePolicy; 