import { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions, animations } from '../styles/theme';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const categories = [
    { id: 'feature', label: 'Feature Request', icon: '💡' },
    { id: 'bug', label: 'Bug Report', icon: '🐛' },
    { id: 'content', label: 'Content Suggestion', icon: '📚' },
    { id: 'ux', label: 'UX Improvement', icon: '🎨' },
    { id: 'other', label: 'Other', icon: '✨' }
  ];

  const handleRatingHover = (hoveredRating) => {
    setHoverRating(hoveredRating);
  };

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

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
    
    // Reset form
    setRating(0);
    setSelectedCategory('');
    setFormData({
      title: '',
      description: '',
      email: ''
    });
  };

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <div>
            <Title>Share Your Feedback</Title>
            <Subtitle>Help us improve your learning experience</Subtitle>
          </div>
        </HeaderContent>
      </Header>

      <MainContent>
        {submitSuccess ? (
          <SuccessMessage>
            <SuccessIcon>🎉</SuccessIcon>
            <SuccessTitle>Thank You for Your Feedback!</SuccessTitle>
            <SuccessText>
              Your feedback helps us make Learning Hub better for everyone.
            </SuccessText>
            <NewFeedbackButton onClick={() => setSubmitSuccess(false)}>
              Submit Another Feedback
            </NewFeedbackButton>
          </SuccessMessage>
        ) : (
          <FeedbackForm onSubmit={handleSubmit}>
            <FormSection>
              <SectionTitle>How would you rate your experience?</SectionTitle>
              <RatingContainer>
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarButton
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => handleRatingHover(star)}
                    onMouseLeave={() => handleRatingHover(0)}
                    $isActive={star <= (hoverRating || rating)}
                  >
                    ⭐
                  </StarButton>
                ))}
                <RatingText>
                  {rating ? `${rating} out of 5 stars` : 'Select a rating'}
                </RatingText>
              </RatingContainer>
            </FormSection>

            <FormSection>
              <SectionTitle>What type of feedback do you have?</SectionTitle>
              <CategoryGrid>
                {categories.map(category => (
                  <CategoryButton
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    $isSelected={selectedCategory === category.id}
                  >
                    <CategoryIcon>{category.icon}</CategoryIcon>
                    {category.label}
                  </CategoryButton>
                ))}
              </CategoryGrid>
            </FormSection>

            <FormSection>
              <SectionTitle>Tell us more</SectionTitle>
              <FormGroup>
                <Label>Title</Label>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Brief summary of your feedback"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Description</Label>
                <TextArea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Provide detailed feedback..."
                  rows={5}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Email (optional)</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="We'll contact you if we need more information"
                />
              </FormGroup>
            </FormSection>

            <SubmitButton
              type="submit"
              disabled={isSubmitting || !rating || !selectedCategory}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </SubmitButton>
          </FeedbackForm>
        )}
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
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const FeedbackForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid ${colors.border};
`;

const FormSection = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${colors.border};

  &:last-of-type {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 1.5rem;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StarButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  transition: all ${transitions.default};
  opacity: ${props => props.$isActive ? 1 : 0.3};
  transform: ${props => props.$isActive ? 'scale(1.1)' : 'scale(1)'};

  &:hover {
    transform: scale(1.1);
  }
`;

const RatingText = styled.span`
  margin-left: 1rem;
  color: ${colors.textLight};
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const CategoryButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: ${props => props.$isSelected ? colors.primary : 'white'};
  color: ${props => props.$isSelected ? 'white' : colors.text};
  border: 1px solid ${props => props.$isSelected ? colors.primary : colors.border};
  border-radius: 12px;
  cursor: pointer;
  transition: all ${transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.sm};
  }
`;

const CategoryIcon = styled.span`
  font-size: 1.5rem;
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

const NewFeedbackButton = styled(SubmitButton)`
  max-width: 250px;
  margin: 0 auto;
`;

export default Feedback; 