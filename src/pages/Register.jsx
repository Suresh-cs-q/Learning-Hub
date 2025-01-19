import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';
import { colors, gradients, shadows, animations, transitions } from '../styles/theme';
import { Button, Input, FormGroup, Label, ErrorText } from '../components/common/StyledComponents';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    try {
      const result = await register(formData.email, formData.password, formData.name);
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.error || 'Failed to register');
      }
    } catch (err) {
      setError('An error occurred during registration');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RegisterContainer>
      <ContentWrapper>
        <BrandSection>
          <LogoWrapper>
            <Logo>🎓</Logo>
            <BrandName>Learning Hub</BrandName>
          </LogoWrapper>
          <TagLine>Join our learning community today</TagLine>
          <BenefitsList>
            <BenefitItem>
              <BenefitIcon>🚀</BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Accelerate Your Growth</BenefitTitle>
                <BenefitText>Access curated learning paths designed for your success</BenefitText>
              </BenefitContent>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon>🌟</BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Learn from Experts</BenefitTitle>
                <BenefitText>Connect with industry professionals and mentors</BenefitText>
              </BenefitContent>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon>🤝</BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Community Support</BenefitTitle>
                <BenefitText>Join a network of passionate learners</BenefitText>
              </BenefitContent>
            </BenefitItem>
          </BenefitsList>
        </BrandSection>

        <FormSection>
          <FormCard>
            <FormHeader>Create Account</FormHeader>
            <FormSubHeader>Start your learning journey today</FormSubHeader>

            {error && <ErrorMessage>{error}</ErrorMessage>}
            
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  disabled={isLoading}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                  disabled={isLoading}
                />
                <HelperText>Must be at least 6 characters long</HelperText>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                  disabled={isLoading}
                />
              </FormGroup>

              <Button
                type="submit"
                $variant="primary"
                disabled={isLoading}
                style={{ width: '100%' }}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>

              <SignInPrompt>
                Already have an account?{' '}
                <Link to="/login">Sign in here</Link>
              </SignInPrompt>
            </Form>
          </FormCard>
        </FormSection>
      </ContentWrapper>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
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

const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  box-shadow: ${shadows.sm};
  transition: transform ${transitions.default};

  &:hover {
    transform: translateX(10px);
  }
`;

const BenefitIcon = styled.span`
  font-size: 2rem;
  line-height: 1;
`;

const BenefitContent = styled.div`
  flex: 1;
`;

const BenefitTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const BenefitText = styled.p`
  font-size: 0.95rem;
  color: ${colors.textLight};
  line-height: 1.4;
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

const HelperText = styled.span`
  font-size: 0.875rem;
  color: ${colors.textLight};
  margin-top: 0.25rem;
`;

const SignInPrompt = styled.p`
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

export default Register; 