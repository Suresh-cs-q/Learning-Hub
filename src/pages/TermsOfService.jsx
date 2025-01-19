import { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions } from '../styles/theme';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: '📋' },
    { id: 'account', title: 'Account Terms', icon: '👤' },
    { id: 'content', title: 'Content Rules', icon: '📝' },
    { id: 'payment', title: 'Payment Terms', icon: '💳' },
    { id: 'conduct', title: 'Code of Conduct', icon: '🤝' },
    { id: 'liability', title: 'Liability', icon: '⚖️' }
  ];

  const lastUpdated = 'March 15, 2024';

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <div>
            <Title>Terms of Service</Title>
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
            Please read these Terms of Service carefully before using Learning Hub. By using our platform,
            you agree to be bound by these terms.
          </Introduction>

          {activeSection === 'overview' && (
            <Section>
              <SectionTitle>
                <SectionIcon>📋</SectionIcon>
                Overview
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  These Terms of Service govern your use of Learning Hub's platform and services:
                </Paragraph>
                <List>
                  <ListItem>Access to educational content and features</ListItem>
                  <ListItem>Use of interactive learning tools and resources</ListItem>
                  <ListItem>Participation in community discussions</ListItem>
                  <ListItem>Engagement with mentors and instructors</ListItem>
                </List>
                <Paragraph>
                  By using our platform, you acknowledge that you have read, understood, and agree
                  to be bound by these terms.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'account' && (
            <Section>
              <SectionTitle>
                <SectionIcon>👤</SectionIcon>
                Account Terms
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  Your account responsibilities include:
                </Paragraph>
                <List>
                  <ListItem>Providing accurate and complete registration information</ListItem>
                  <ListItem>Maintaining the security of your account credentials</ListItem>
                  <ListItem>Promptly updating any changes to your information</ListItem>
                  <ListItem>Not sharing your account with others</ListItem>
                </List>
                <Paragraph>
                  We reserve the right to suspend or terminate accounts that violate these terms
                  or engage in unauthorized activities.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'content' && (
            <Section>
              <SectionTitle>
                <SectionIcon>📝</SectionIcon>
                Content Rules
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  When using our platform, you agree not to:
                </Paragraph>
                <List>
                  <ListItem>Share copyrighted material without permission</ListItem>
                  <ListItem>Post inappropriate or offensive content</ListItem>
                  <ListItem>Distribute spam or malicious content</ListItem>
                  <ListItem>Impersonate others or misrepresent your identity</ListItem>
                </List>
                <Paragraph>
                  We maintain the right to remove any content that violates these rules or
                  our community guidelines.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'payment' && (
            <Section>
              <SectionTitle>
                <SectionIcon>💳</SectionIcon>
                Payment Terms
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  Our payment terms include:
                </Paragraph>
                <List>
                  <ListItem>All fees are charged in advance of service delivery</ListItem>
                  <ListItem>Subscriptions auto-renew unless cancelled</ListItem>
                  <ListItem>Refunds are provided according to our refund policy</ListItem>
                  <ListItem>Prices may change with notice to users</ListItem>
                </List>
                <Paragraph>
                  You are responsible for any taxes or additional fees that may apply to
                  your purchases.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'conduct' && (
            <Section>
              <SectionTitle>
                <SectionIcon>🤝</SectionIcon>
                Code of Conduct
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  Users must adhere to our community standards:
                </Paragraph>
                <List>
                  <ListItem>Treat others with respect and courtesy</ListItem>
                  <ListItem>Engage in constructive discussions</ListItem>
                  <ListItem>Report inappropriate behavior</ListItem>
                  <ListItem>Follow instructor and mentor guidelines</ListItem>
                </List>
                <Paragraph>
                  Violations of our code of conduct may result in account suspension or
                  termination.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'liability' && (
            <Section>
              <SectionTitle>
                <SectionIcon>⚖️</SectionIcon>
                Liability
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  Important limitations on liability:
                </Paragraph>
                <List>
                  <ListItem>Services are provided "as is" without warranties</ListItem>
                  <ListItem>We are not liable for third-party content</ListItem>
                  <ListItem>Limitation of damages and legal remedies</ListItem>
                  <ListItem>User responsibility for their actions</ListItem>
                </List>
                <Paragraph>
                  These limitations protect both our platform and our users while ensuring
                  fair use of services.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          <ContactInfo>
            <ContactTitle>Questions about our terms?</ContactTitle>
            <ContactText>
              Contact our legal team at{' '}
              <ContactLink href="mailto:legal@learninghub.com">
                legal@learninghub.com
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

export default TermsOfService; 