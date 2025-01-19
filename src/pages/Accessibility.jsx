import { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions } from '../styles/theme';

const Accessibility = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: '♿' },
    { id: 'features', title: 'Accessibility Features', icon: '⚡' },
    { id: 'standards', title: 'Standards & Guidelines', icon: '📋' },
    { id: 'keyboard', title: 'Keyboard Navigation', icon: '⌨️' },
    { id: 'assistance', title: 'Get Assistance', icon: '🤝' }
  ];

  const lastUpdated = 'March 15, 2024';

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <div>
            <Title>Accessibility</Title>
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
            Learning Hub is committed to ensuring digital accessibility for people of all abilities.
            We continually improve the user experience and apply the relevant accessibility standards.
          </Introduction>

          {activeSection === 'overview' && (
            <Section>
              <SectionTitle>
                <SectionIcon>♿</SectionIcon>
                Our Commitment to Accessibility
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  We believe education should be accessible to everyone. Our commitment includes:
                </Paragraph>
                <List>
                  <ListItem>Making all content accessible to screen readers</ListItem>
                  <ListItem>Providing captions and transcripts for video content</ListItem>
                  <ListItem>Ensuring proper color contrast and text visibility</ListItem>
                  <ListItem>Supporting multiple ways to interact with our platform</ListItem>
                </List>
                <Paragraph>
                  We regularly test and update our platform to ensure it meets accessibility standards
                  and provides a great experience for all users.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'features' && (
            <Section>
              <SectionTitle>
                <SectionIcon>⚡</SectionIcon>
                Accessibility Features
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  Our platform includes these accessibility features:
                </Paragraph>
                <List>
                  <ListItem>
                    <Strong>Screen Reader Support:</Strong> ARIA labels and semantic HTML
                  </ListItem>
                  <ListItem>
                    <Strong>Color Accessibility:</Strong> High contrast mode and customizable themes
                  </ListItem>
                  <ListItem>
                    <Strong>Text Scaling:</Strong> Responsive design that supports zoom up to 200%
                  </ListItem>
                  <ListItem>
                    <Strong>Alternative Text:</Strong> Descriptive text for all images and icons
                  </ListItem>
                </List>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'standards' && (
            <Section>
              <SectionTitle>
                <SectionIcon>📋</SectionIcon>
                Standards & Guidelines
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  We follow these accessibility standards:
                </Paragraph>
                <List>
                  <ListItem>WCAG 2.1 Level AA compliance</ListItem>
                  <ListItem>Section 508 of the Rehabilitation Act</ListItem>
                  <ListItem>WAI-ARIA 1.1 specifications</ListItem>
                  <ListItem>European EN 301 549 standards</ListItem>
                </List>
                <Paragraph>
                  Our team regularly audits the platform to ensure compliance with these standards
                  and implement improvements.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'keyboard' && (
            <Section>
              <SectionTitle>
                <SectionIcon>⌨️</SectionIcon>
                Keyboard Navigation
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  Common keyboard shortcuts and navigation:
                </Paragraph>
                <List>
                  <ListItem>Tab: Navigate through interactive elements</ListItem>
                  <ListItem>Enter/Space: Activate buttons and links</ListItem>
                  <ListItem>Arrow Keys: Navigate within components</ListItem>
                  <ListItem>Esc: Close modals and menus</ListItem>
                </List>
                <Paragraph>
                  All interactive elements are focusable and operable using only a keyboard.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          {activeSection === 'assistance' && (
            <Section>
              <SectionTitle>
                <SectionIcon>🤝</SectionIcon>
                Get Assistance
              </SectionTitle>
              <SectionContent>
                <Paragraph>
                  We&apos;re here to help:
                </Paragraph>
                <List>
                  <ListItem>Contact our accessibility team for support</ListItem>
                  <ListItem>Report accessibility issues or barriers</ListItem>
                  <ListItem>Request alternative formats of content</ListItem>
                  <ListItem>Provide feedback on accessibility features</ListItem>
                </List>
                <Paragraph>
                  Your feedback helps us improve accessibility for everyone.
                </Paragraph>
              </SectionContent>
            </Section>
          )}

          <ContactInfo>
            <ContactTitle>Need Accessibility Support?</ContactTitle>
            <ContactText>
              Contact our accessibility team at{' '}
              <ContactLink href="mailto:accessibility@learninghub.com">
                accessibility@learninghub.com
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

export default Accessibility; 