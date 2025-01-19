import { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions, animations } from '../styles/theme';

const Enterprise = () => {
  const [selectedPlan, setSelectedPlan] = useState('team');

  const features = [
    {
      icon: '🎯',
      title: 'Custom Learning Paths',
      description: 'Create tailored learning experiences for different teams and roles.'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Track progress and measure ROI with detailed reporting and insights.'
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: '24/7 priority support and dedicated customer success manager.'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'SSO, role-based access control, and data encryption.'
    },
    {
      icon: '🎓',
      title: 'Custom Content',
      description: 'Develop custom courses and content specific to your organization.'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Insights',
      description: 'Leverage AI to optimize learning paths and predict skill gaps.'
    }
  ];

  const plans = [
    {
      id: 'team',
      name: 'Team',
      subtitle: 'For growing teams',
      price: '$29',
      unit: 'per user/month',
      features: [
        'Up to 50 users',
        'Basic analytics',
        'Standard support',
        'Core features'
      ]
    },
    {
      id: 'business',
      name: 'Business',
      subtitle: 'For medium businesses',
      price: '$49',
      unit: 'per user/month',
      features: [
        'Up to 200 users',
        'Advanced analytics',
        'Priority support',
        'Custom learning paths',
        'API access'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      subtitle: 'For large organizations',
      price: 'Custom',
      unit: 'contact for pricing',
      features: [
        'Unlimited users',
        'Full feature access',
        'Dedicated support',
        'Custom development',
        'SLA guarantee',
        'On-premise option'
      ]
    }
  ];

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <div>
            <Title>Enterprise Solutions</Title>
            <Subtitle>Transform your organization with AI-powered learning</Subtitle>
          </div>
          <ContactButton>Contact Sales</ContactButton>
        </HeaderContent>
      </Header>

      <MainContent>
        <Section>
          <SectionTitle>Why Choose Enterprise?</SectionTitle>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Section>

        <Section>
          <SectionTitle>Pricing Plans</SectionTitle>
          <PlansContainer>
            {plans.map(plan => (
              <PlanCard
                key={plan.id}
                $isSelected={selectedPlan === plan.id}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <PlanHeader>
                  <PlanName>{plan.name}</PlanName>
                  <PlanSubtitle>{plan.subtitle}</PlanSubtitle>
                </PlanHeader>
                <PlanPrice>
                  {plan.price}
                  <PlanUnit>{plan.unit}</PlanUnit>
                </PlanPrice>
                <PlanFeatures>
                  {plan.features.map((feature, index) => (
                    <PlanFeatureItem key={index}>
                      <CheckIcon>✓</CheckIcon>
                      {feature}
                    </PlanFeatureItem>
                  ))}
                </PlanFeatures>
                <PlanButton>Get Started</PlanButton>
              </PlanCard>
            ))}
          </PlansContainer>
        </Section>

        <Section>
          <ContactCard>
            <ContactContent>
              <ContactTitle>Ready to transform your organization?</ContactTitle>
              <ContactText>
                Speak with our enterprise team to learn more about custom solutions
                and pricing for your organization.
              </ContactText>
              <ContactActions>
                <PrimaryButton>Schedule Demo</PrimaryButton>
                <SecondaryButton>Download Brochure</SecondaryButton>
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

const MainContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 2rem;
  text-align: center;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  border: 1px solid ${colors.border};
  transition: all ${transitions.default};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.lg};
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: ${colors.textLight};
  line-height: 1.6;
`;

const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const PlanCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  border: 2px solid ${props => props.$isSelected ? colors.primary : colors.border};
  transition: all ${transitions.default};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.lg};
  }
`;

const PlanHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.25rem;
`;

const PlanSubtitle = styled.p`
  color: ${colors.textLight};
  font-size: 0.9rem;
`;

const PlanPrice = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: 1rem;
`;

const PlanUnit = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${colors.textLight};
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
`;

const PlanFeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${colors.text};
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
`;

const CheckIcon = styled.span`
  color: ${colors.primary};
  font-weight: bold;
`;

const PlanButton = styled.button`
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

export default Enterprise; 