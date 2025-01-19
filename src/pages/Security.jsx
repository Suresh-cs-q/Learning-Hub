import { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions } from '../styles/theme';

const Security = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: '🔒' },
    { id: 'data', title: 'Data Protection', icon: '🛡️' },
    { id: 'practices', title: 'Security Practices', icon: '✅' },
    { id: 'user', title: 'User Safety', icon: '👤' },
    { id: 'reporting', title: 'Security Reporting', icon: '🚨' }
  ];

  const lastUpdated = 'March 15, 2024';

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <div>
            <Title>Security</Title>
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
            At Learning Hub, we prioritize the security of your data and privacy. Learn about our
            comprehensive security measures and how we protect your information.
          </Introduction>

          {activeSection === 'overview' && (
            <Section>
              <SectionTitle>
                <SectionIcon>🔒</SectionIcon>
                Security Overview
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  Our security program is built on industry best practices and standards:
                </Paragraph>
                <List>
                  <ListItem>End-to-end encryption for all sensitive data</ListItem>
                  <ListItem>Regular security audits and penetration testing</ListItem>
                  <ListItem>Compliance with global security standards</ListItem>
                  <ListItem>24/7 security monitoring and threat detection</ListItem>
                </List>
                <Paragraph>
                  We continuously update our security measures to protect against emerging threats
                  and ensure the safety of your data.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'data' && (
            <Section>
              <SectionTitle>
                <SectionIcon>🛡️</SectionIcon>
                Data Protection
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  We employ multiple layers of data protection:
                </Paragraph>
                <List>
                  <ListItem>
                    <Strong>Encryption:</Strong> AES-256 encryption for data at rest
                  </ListItem>
                  <ListItem>
                    <Strong>Access Control:</Strong> Role-based access with strict authentication
                  </ListItem>
                  <ListItem>
                    <Strong>Backup:</Strong> Regular encrypted backups with secure storage
                  </ListItem>
                  <ListItem>
                    <Strong>Compliance:</Strong> GDPR and CCPA compliant data handling
                  </ListItem>
                </List>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'practices' && (
            <Section>
              <SectionTitle>
                <SectionIcon>✅</SectionIcon>
                Security Practices
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  Our security practices include:
                </Paragraph>
                <List>
                  <ListItem>Multi-factor authentication for all accounts</ListItem>
                  <ListItem>Regular security training for all employees</ListItem>
                  <ListItem>Incident response and recovery procedures</ListItem>
                  <ListItem>Secure development lifecycle practices</ListItem>
                  <ListItem>Continuous security monitoring and alerts</ListItem>
                </List>
                <Paragraph>
                  These practices are regularly reviewed and updated to maintain the highest
                  security standards.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'user' && (
            <Section>
              <SectionTitle>
                <SectionIcon>👤</SectionIcon>
                User Safety Guidelines
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  Protect your account with these best practices:
                </Paragraph>
                <List>
                  <ListItem>Use strong, unique passwords</ListItem>
                  <ListItem>Enable two-factor authentication</ListItem>
                  <ListItem>Monitor account activity regularly</ListItem>
                  <ListItem>Report suspicious activities immediately</ListItem>
                </List>
                <Paragraph>
                  Following these guidelines helps ensure the security of your account
                  and personal information.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'reporting' && (
            <Section>
              <SectionTitle>
                <SectionIcon>🚨</SectionIcon>
                Security Reporting
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  Help us maintain platform security:
                </Paragraph>
                <List>
                  <ListItem>Report security vulnerabilities promptly</ListItem>
                  <ListItem>Participate in our bug bounty program</ListItem>
                  <ListItem>Alert us to suspicious activities</ListItem>
                  <ListItem>Provide feedback on security features</ListItem>
                </List>
                <Paragraph>
                  We value your input in maintaining the security of our platform and
                  protecting our community.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          <ContactInfo>
            <ContactTitle>Security Concerns?</ContactTitle>
            <ContactText>
              Contact our security team at{' '}
              <ContactLink href="mailto:security@learninghub.com">
                security@learninghub.com
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

export default Security; 