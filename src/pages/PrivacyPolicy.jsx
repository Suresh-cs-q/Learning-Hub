import { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions } from '../styles/theme';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('collection');

  const sections = [
    { id: 'collection', title: 'Data Collection', icon: '📊' },
    { id: 'usage', title: 'Data Usage', icon: '🔄' },
    { id: 'security', title: 'Data Security', icon: '🔒' },
    { id: 'rights', title: 'Your Rights', icon: '⚖️' },
    { id: 'cookies', title: 'Cookies', icon: '🍪' },
    { id: 'updates', title: 'Policy Updates', icon: '📝' }
  ];

  const lastUpdated = 'March 15, 2024';

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <div>
            <Title>Privacy Policy</Title>
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
            At Learning Hub, we take your privacy seriously. This policy explains how we collect,
            use, and protect your personal information.
          </Introduction>

          {activeSection === 'collection' && (
            <Section>
              <SectionTitle>
                <SectionIcon>📊</SectionIcon>
                Data Collection
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  We collect information that you provide directly to us, including:
                </Paragraph>
                <List>
                  <ListItem>Name and contact information when you create an account</ListItem>
                  <ListItem>Profile information and preferences</ListItem>
                  <ListItem>Course progress and completion data</ListItem>
                  <ListItem>Payment information for purchases</ListItem>
                  <ListItem>Communications with our support team</ListItem>
                </List>
                <Paragraph>
                  We also automatically collect certain information when you use our platform:
                </Paragraph>
                <List>
                  <ListItem>Device and browser information</ListItem>
                  <ListItem>IP address and location data</ListItem>
                  <ListItem>Usage patterns and preferences</ListItem>
                  <ListItem>Performance and error data</ListItem>
                </List>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'usage' && (
            <Section>
              <SectionTitle>
                <SectionIcon>🔄</SectionIcon>
                Data Usage
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  We use your information to:
                </Paragraph>
                <List>
                  <ListItem>Provide and improve our educational services</ListItem>
                  <ListItem>Personalize your learning experience</ListItem>
                  <ListItem>Process payments and prevent fraud</ListItem>
                  <ListItem>Send important updates and communications</ListItem>
                  <ListItem>Analyze and improve our platform</ListItem>
                </List>
                <Paragraph>
                  We do not sell your personal information to third parties. We may share data with:
                </Paragraph>
                <List>
                  <ListItem>Service providers who assist in platform operations</ListItem>
                  <ListItem>Analytics partners to improve our services</ListItem>
                  <ListItem>Law enforcement when required by law</ListItem>
                </List>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'security' && (
            <Section>
              <SectionTitle>
                <SectionIcon>🔒</SectionIcon>
                Data Security
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  We implement robust security measures to protect your data:
                </Paragraph>
                <List>
                  <ListItem>End-to-end encryption for sensitive data</ListItem>
                  <ListItem>Regular security audits and assessments</ListItem>
                  <ListItem>Secure data centers and backup systems</ListItem>
                  <ListItem>Employee training on data protection</ListItem>
                </List>
                <Paragraph>
                  While we take these precautions, no system is completely secure. We continuously
                  update our security measures to protect against new threats.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'rights' && (
            <Section>
              <SectionTitle>
                <SectionIcon>⚖️</SectionIcon>
                Your Rights
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  You have the following rights regarding your data:
                </Paragraph>
                <List>
                  <ListItem>Access your personal information</ListItem>
                  <ListItem>Request corrections to inaccurate data</ListItem>
                  <ListItem>Delete your account and associated data</ListItem>
                  <ListItem>Export your data in a portable format</ListItem>
                  <ListItem>Opt-out of marketing communications</ListItem>
                </List>
                <Paragraph>
                  To exercise these rights, contact our privacy team at privacy@learninghub.com
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'cookies' && (
            <Section>
              <SectionTitle>
                <SectionIcon>🍪</SectionIcon>
                Cookies
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  We use cookies and similar technologies to:
                </Paragraph>
                <List>
                  <ListItem>Remember your preferences</ListItem>
                  <ListItem>Maintain your session security</ListItem>
                  <ListItem>Analyze platform usage</ListItem>
                  <ListItem>Personalize content and ads</ListItem>
                </List>
                <Paragraph>
                  You can control cookie settings through your browser preferences. Note that
                  disabling certain cookies may limit platform functionality.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'updates' && (
            <Section>
              <SectionTitle>
                <SectionIcon>📝</SectionIcon>
                Policy Updates
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  We may update this privacy policy to reflect:
                </Paragraph>
                <List>
                  <ListItem>Changes in our practices</ListItem>
                  <ListItem>New features and services</ListItem>
                  <ListItem>Legal and regulatory requirements</ListItem>
                </List>
                <Paragraph>
                  We will notify you of significant changes through email or platform notifications.
                  Continued use of our platform after changes indicates acceptance of the updated policy.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          <ContactInfo>
            <ContactTitle>Questions about privacy?</ContactTitle>
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

export default PrivacyPolicy; 