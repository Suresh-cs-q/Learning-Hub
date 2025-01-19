import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { colors, shadows, transitions } from '../styles/theme';
import { FiMail, FiLock } from 'react-icons/fi';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <PageContainer>
      <LeftSection>
        <BrandSection>
          <LogoWrapper>
            <LogoIcon>🎓</LogoIcon>
            <BrandName>Learning Hub</BrandName>
          </LogoWrapper>
          <Tagline>Your personalized learning journey starts here</Tagline>
        </BrandSection>
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
            <FeatureIcon>💎</FeatureIcon>
            <FeatureText>Collaborative learning community</FeatureText>
          </FeatureItem>
        </FeatureList>
      </LeftSection>

      <RightSection>
        <LoginContainer>
          <LoginHeader>
            <Title>Welcome Back</Title>
            <Subtitle>Sign in to continue your learning journey</Subtitle>
          </LoginHeader>

          <Form onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            
            <FormGroup>
              <Label>Email</Label>
              <InputWrapper>
                <InputIcon><FiMail /></InputIcon>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
            </FormGroup>

            <FormGroup>
              <LabelWrapper>
                <Label>Password</Label>
                <ForgotPassword to="/forgot-password">Forgot password?</ForgotPassword>
              </LabelWrapper>
              <InputWrapper>
                <InputIcon><FiLock /></InputIcon>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
            </FormGroup>

            <SubmitButton type="submit">
              Sign In
            </SubmitButton>
          </Form>

          <SignupPrompt>
            Don't have an account? <SignupLink to="/register">Create one now</SignupLink>
          </SignupPrompt>
        </LoginContainer>
      </RightSection>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: white;
`;

const LeftSection = styled.div`
  flex: 1;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.primary}dd);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const BrandSection = styled.div`
  margin-bottom: 2rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const LogoIcon = styled.div`
  font-size: 2.5rem;
`;

const BrandName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const Tagline = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
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
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: transform ${transitions.default};

  &:hover {
    transform: translateX(10px);
  }
`;

const FeatureIcon = styled.span`
  font-size: 1.5rem;
`;

const FeatureText = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${colors.background};
`;

const LoginContainer = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 2rem;
`;

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: ${colors.textLight};
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${colors.text};
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputIcon = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.textLight};
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.75rem;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  font-size: 1rem;
  transition: all ${transitions.default};
  background: white;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primary}20;
  }

  &::placeholder {
    color: ${colors.textLight};
  }
`;

const ForgotPassword = styled(Link)`
  font-size: 0.9rem;
  color: ${colors.primary};
  text-decoration: none;
  transition: opacity ${transitions.default};

  &:hover {
    opacity: 0.8;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background: ${colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${transitions.default};
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.md};
  }

  &:active {
    transform: translateY(0);
  }
`;

const ErrorMessage = styled.div`
  padding: 0.75rem;
  background: ${colors.error}10;
  border: 1px solid ${colors.error}30;
  border-radius: 8px;
  color: ${colors.error};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const SignupPrompt = styled.p`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: ${colors.textLight};
`;

const SignupLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: opacity ${transitions.default};

  &:hover {
    opacity: 0.8;
  }
`;

export default LoginPage; 