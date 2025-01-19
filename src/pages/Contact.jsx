import { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions, animations } from '../styles/theme';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const officeLocations = [
    {
      city: 'San Francisco',
      address: '123 Tech Street, SF, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@learninghub.com',
      timezone: 'PST (UTC-8)'
    },
    {
      city: 'London',
      address: '456 Innovation Lane, London, UK EC1A 1BB',
      phone: '+44 20 7123 4567',
      email: 'london@learninghub.com',
      timezone: 'GMT (UTC+0)'
    },
    {
      city: 'Singapore',
      address: '789 Digital Road, Singapore 123456',
      phone: '+65 6789 0123',
      email: 'sg@learninghub.com',
      timezone: 'SGT (UTC+8)'
    }
  ];

  const supportChannels = [
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7'
    },
    {
      icon: '📧',
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 24 hours'
    },
    {
      icon: '📞',
      title: 'Phone Support',
      description: 'Speak directly with our team',
      availability: 'Mon-Fri, 9AM-6PM'
    }
  ];

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <div>
            <Title>Contact Us</Title>
            <Subtitle>Get in touch with our team</Subtitle>
          </div>
        </HeaderContent>
      </Header>

      <MainContent>
        <ContentGrid>
          <LeftSection>
            <SectionTitle>Send us a message</SectionTitle>
            {submitSuccess ? (
              <SuccessMessage>
                <SuccessIcon>✅</SuccessIcon>
                <SuccessTitle>Message Sent!</SuccessTitle>
                <SuccessText>
                  Thank you for contacting us. We'll get back to you shortly.
                </SuccessText>
                <NewMessageButton onClick={() => setSubmitSuccess(false)}>
                  Send Another Message
                </NewMessageButton>
              </SuccessMessage>
            ) : (
              <ContactForm onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Subject</Label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Message</Label>
                  <TextArea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                  />
                </FormGroup>

                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </SubmitButton>
              </ContactForm>
            )}
          </LeftSection>

          <RightSection>
            <SupportSection>
              <SectionTitle>Support Channels</SectionTitle>
              <SupportGrid>
                {supportChannels.map((channel, index) => (
                  <SupportCard key={index}>
                    <SupportIcon>{channel.icon}</SupportIcon>
                    <SupportInfo>
                      <SupportTitle>{channel.title}</SupportTitle>
                      <SupportDescription>{channel.description}</SupportDescription>
                      <SupportAvailability>{channel.availability}</SupportAvailability>
                    </SupportInfo>
                  </SupportCard>
                ))}
              </SupportGrid>
            </SupportSection>

            <OfficesSection>
              <SectionTitle>Our Offices</SectionTitle>
              <OfficesGrid>
                {officeLocations.map((office, index) => (
                  <OfficeCard key={index}>
                    <OfficeCity>{office.city}</OfficeCity>
                    <OfficeDetails>
                      <DetailItem>
                        <DetailIcon>📍</DetailIcon>
                        {office.address}
                      </DetailItem>
                      <DetailItem>
                        <DetailIcon>📞</DetailIcon>
                        {office.phone}
                      </DetailItem>
                      <DetailItem>
                        <DetailIcon>📧</DetailIcon>
                        {office.email}
                      </DetailItem>
                      <DetailItem>
                        <DetailIcon>🕒</DetailIcon>
                        {office.timezone}
                      </DetailItem>
                    </OfficeDetails>
                  </OfficeCard>
                ))}
              </OfficesGrid>
            </OfficesSection>
          </RightSection>
        </ContentGrid>
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const LeftSection = styled.div``;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 1.5rem;
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid ${colors.border};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all ${transitions.default};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primary}20;
  }
`;

const SubmitButton = styled.button`
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

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  background: white;
  padding: 3rem 2rem;
  border-radius: 20px;
  text-align: center;
  border: 1px solid ${colors.border};
  animation: ${animations.fadeIn} 0.3s ease;
`;

const SuccessIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: ${animations.pulse} 2s infinite;
`;

const SuccessTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 1rem;
`;

const SuccessText = styled.p`
  color: ${colors.textLight};
  margin-bottom: 2rem;
`;

const NewMessageButton = styled(SubmitButton)`
  max-width: 250px;
  margin: 0 auto;
`;

const SupportSection = styled.section`
  margin-bottom: 2rem;
`;

const SupportGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

const SupportCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid ${colors.border};
  display: flex;
  gap: 1.5rem;
  transition: all ${transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.sm};
  }
`;

const SupportIcon = styled.div`
  font-size: 2rem;
`;

const SupportInfo = styled.div`
  flex: 1;
`;

const SupportTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const SupportDescription = styled.p`
  color: ${colors.textLight};
  margin-bottom: 0.5rem;
`;

const SupportAvailability = styled.div`
  color: ${colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
`;

const OfficesSection = styled.section``;

const OfficesGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const OfficeCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid ${colors.border};
  transition: all ${transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.sm};
  }
`;

const OfficeCity = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 1rem;
`;

const OfficeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: ${colors.textLight};
  font-size: 0.95rem;
`;

const DetailIcon = styled.span`
  font-size: 1.1rem;
`;

export default Contact; 