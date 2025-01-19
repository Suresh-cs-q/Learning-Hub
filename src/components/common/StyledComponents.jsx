import styled, { css } from 'styled-components';
import { colors, shadows, transitions, animations, mixins, gradients } from '../../styles/theme';

export const Card = styled.div`
  ${mixins.card}
  transition: transform ${transitions.default}, box-shadow ${transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.lg};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all ${transitions.default};
  border: none;
  gap: 0.5rem;

  ${props => props.$variant === 'primary' && `
    background: ${colors.primary};
    color: white;

    &:hover {
      background: ${colors.primaryHover};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  `}

  ${props => props.$variant === 'secondary' && `
    background: ${colors.background};
    color: ${colors.text};
    border: 1px solid ${colors.border};

    &:hover {
      background: ${colors.backgroundHover};
      border-color: ${colors.primary};
    }
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  font-size: 1rem;
  transition: all ${transitions.default};
  background: white;
  color: ${colors.text};

  &::placeholder {
    color: ${colors.textLight};
  }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primary}20;
  }

  &:disabled {
    background: ${colors.background};
    cursor: not-allowed;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 500;
  color: ${colors.text};
  font-size: 0.9rem;
`;

export const ErrorText = styled.span`
  color: ${colors.error};
  font-size: 0.9rem;
  font-weight: 500;
`;

export const LoadingSpinner = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid ${colors.background};
  border-top-color: ${colors.primary};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  
  ${props => props.$variant === 'success' && `
    background: ${colors.success}20;
    color: ${colors.success};
  `}
  
  ${props => props.$variant === 'error' && `
    background: ${colors.error}20;
    color: ${colors.error};
  `}
  
  ${props => props.$variant === 'warning' && `
    background: ${colors.warning}20;
    color: ${colors.warning};
  `}
  
  ${props => props.$variant === 'info' && `
    background: ${colors.info}20;
    color: ${colors.info};
  `}
`;

export const Avatar = styled.div`
  width: ${props => props.$size || '40px'};
  height: ${props => props.$size || '40px'};
  border-radius: 50%;
  background: ${gradients.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: ${props => props.$fontSize || '1rem'};
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${colors.border};
  margin: 1.5rem 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: 1.5rem;
`;

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  &:hover::after {
    content: '${props => props.text}';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 0.85rem;
    border-radius: 4px;
    white-space: nowrap;
    z-index: 1000;
  }
`; 