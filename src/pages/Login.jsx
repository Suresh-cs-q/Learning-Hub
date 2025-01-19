import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';
import { colors, gradients, shadows, animations, transitions } from '../styles/theme';
import { Button, Input, FormGroup, Label, ErrorText } from '../components/common/StyledComponents';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const result = await login(email, password);
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.error || 'Failed to login');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginContainer>
      <ContentWrapper>
        <BrandSection>
          <LogoWrapper>
            <Logo>🎓</Logo>
            <BrandName>Learning Hub</BrandName>
          </LogoWrapper>
          <TagLine>Your personalized learning journey starts here</TagLine>
          <FeatureList>
            <FeatureItem>
              <FeatureIcon>🎯</FeatureIcon>
              <FeatureText>Personalized learning paths</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>📚</FeatureIcon>
              <FeatureText>Expert-curated content</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>🤝</FeatureIcon>
              <FeatureText>Collaborative learning community</FeatureText>
            </FeatureItem>
          </FeatureList>
        </BrandSection>

        <FormSection>
          <FormCard>
            <FormHeader>Welcome Back</FormHeader>
            <FormSubHeader>Sign in to continue your learning journey</FormSubHeader>

            {error && <ErrorMessage>{error}</ErrorMessage>}
            
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
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

              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  disabled={isLoading}
                />
              </FormGroup>

              <ForgotPasswordLink>
                <Link to="/forgot-password">Forgot password?</Link>
              </ForgotPasswordLink>

              <Button
                type="submit"
                $variant="primary"
                disabled={isLoading}
                style={{ width: '100%' }}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>

              <SignUpPrompt>
                Don't have an account?{' '}
                <Link to="/register">Create one now</Link>
              </SignUpPrompt>
            </Form>
          </FormCard>
        </FormSection>
      </ContentWrapper>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  min-height: 100vh;
  min-height: -webkit-fill-available;
  width: 100%;
  background: ${gradients.background};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  @supports (-webkit-touch-callout: none) {
    padding-bottom: env(safe-area-inset-bottom);
  }
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

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FeatureItem = styled.div`
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

const FeatureIcon = styled.span`
  font-size: 1.5rem;
`;

const FeatureText = styled.span`
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

const ForgotPasswordLink = styled.div`
  text-align: right;
  margin-top: -0.5rem;

  a {
    color: ${colors.primary};
    text-decoration: none;
    font-size: 0.9rem;
    transition: color ${transitions.default};

    &:hover {
      color: ${colors.primaryHover};
      text-decoration: underline;
    }
  }
`;

const SignUpPrompt = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: ${colors.textLight};

  a {
    color: ${colors.primary};
    text-decoration: none;
    font-weight: 500;
    transition: color ${transitions.default};

    &:hover {
      color: ${colors.primaryHover};
      text-decoration: underline;
    }
  }
`;

export default Login; 