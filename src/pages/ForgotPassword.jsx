import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, shadows, transitions, animations, gradients } from '../styles/theme';
import { Button, Input, FormGroup, Label, ErrorText } from '../components/common/StyledComponents';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (err) {
      setError('Failed to send reset instructions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <BrandSection>
          <LogoWrapper>
            <Logo>🎓</Logo>
            <BrandName>Learning Hub</BrandName>
          </LogoWrapper>
          <TagLine>Your journey to knowledge continues here</TagLine>
          <SecurityInfo>
            <SecurityItem>
              <SecurityIcon>🔒</SecurityIcon>
              <SecurityText>Secure password reset process</SecurityText>
            </SecurityItem>
            <SecurityItem>
              <SecurityIcon>⚡️</SecurityIcon>
              <SecurityText>Quick and easy recovery</SecurityText>
            </SecurityItem>
            <SecurityItem>
              <SecurityIcon>📧</SecurityIcon>
              <SecurityText>Instructions sent to your email</SecurityText>
            </SecurityItem>
          </SecurityInfo>
        </BrandSection>

        <FormSection>
          <FormCard>
            {!isSuccess ? (
              <>
                <FormHeader>Reset Password</FormHeader>
                <FormSubHeader>
                  Enter your email address and we'll send you instructions to reset your password.
                </FormSubHeader>

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      disabled={isLoading}
                    />
                  </FormGroup>

                  <Button
                    type="submit"
                    $variant="primary"
                    disabled={isLoading}
                    style={{ width: '100%', marginTop: '1rem' }}
                  >
                    {isLoading ? 'Sending Instructions...' : 'Send Reset Instructions'}
                  </Button>

                  <BackToLogin>
                    <Link to="/login">
                      <BackIcon>←</BackIcon> Back to Login
                    </Link>
                  </BackToLogin>
                </Form>
              </>
            ) : (
              <SuccessState>
                <SuccessIcon>✉️</SuccessIcon>
                <SuccessTitle>Check Your Email</SuccessTitle>
                <SuccessMessage>
                  We've sent password reset instructions to your email address.
                  Please check your inbox and follow the instructions.
                </SuccessMessage>
                <Button
                  as={Link}
                  to="/login"
                  $variant="primary"
                  style={{ width: '100%', marginTop: '1.5rem' }}
                >
                  Return to Login
                </Button>
              </SuccessState>
            )}
          </FormCard>
        </FormSection>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${gradients.background};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  animation: ${animations.fadeIn} 0.5s ease;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const BrandSection = styled.div`
  display: none;
  
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Logo = styled.div`
  font-size: 3rem;
  animation: ${animations.pulse} 2s infinite;
`;

const BrandName = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: ${gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TagLine = styled.p`
  font-size: 1.5rem;
  color: ${colors.text};
  margin-bottom: 3rem;
`;

const SecurityInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SecurityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  box-shadow: ${shadows.sm};
  transition: transform ${transitions.default};

  &:hover {
    transform: translateX(10px);
  }
`;

const SecurityIcon = styled.span`
  font-size: 1.5rem;
`;

const SecurityText = styled.span`
  font-size: 1.1rem;
  color: ${colors.text};
`;

const FormSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: ${shadows.lg};
  width: 100%;
  max-width: 450px;
`;

const FormHeader = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: 0.5rem;
  text-align: center;
`;

const FormSubHeader = styled.p`
  color: ${colors.textLight};
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ErrorMessage = styled(ErrorText)`
  text-align: center;
  padding: 0.75rem;
  background: ${colors.error}10;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const BackToLogin = styled.div`
  text-align: center;
  margin-top: 1.5rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: ${colors.primary};
    text-decoration: none;
    font-weight: 500;
    transition: all ${transitions.default};

    &:hover {
      color: ${colors.primaryHover};
      gap: 0.75rem;
    }
  }
`;

const BackIcon = styled.span`
  font-size: 1.2rem;
  transition: transform ${transitions.default};
`;

const SuccessState = styled.div`
  text-align: center;
  animation: ${animations.fadeIn} 0.5s ease;
`;

const SuccessIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  animation: ${animations.pulse} 2s infinite;
`;

const SuccessTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.p`
  color: ${colors.textLight};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export default ForgotPassword; 