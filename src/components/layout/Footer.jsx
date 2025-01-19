import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, transitions, media } from '../../styles/theme';
import { FiGithub, FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <BrandSection>
          <BrandName>Learning Hub</BrandName>
          <BrandDescription>
            Empowering learners worldwide with cutting-edge education and personalized learning experiences.
          </BrandDescription>
          <SocialLinks>
            <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FiTwitter />
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </SocialLink>
            <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FiYoutube />
            </SocialLink>
          </SocialLinks>
        </BrandSection>

        <LinksSection>
          <LinkColumn>
            <ColumnTitle>Platform</ColumnTitle>
            <FooterLink to="/courses">Courses</FooterLink>
            <FooterLink to="/learning-paths">Learning Paths</FooterLink>
            <FooterLink to="/mentors">Mentors</FooterLink>
            <FooterLink to="/enterprise">Enterprise</FooterLink>
          </LinkColumn>

          <LinkColumn>
            <ColumnTitle>Support</ColumnTitle>
            <FooterLink to="/help-center">Help Center</FooterLink>
            <FooterLink to="/faq">FAQ</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
            <FooterLink to="/feedback">Feedback</FooterLink>
          </LinkColumn>

          <LinkColumn>
            <ColumnTitle>Legal</ColumnTitle>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
            <FooterLink to="/cookie-policy">Cookie Policy</FooterLink>
            <FooterLink to="/security">Security</FooterLink>
          </LinkColumn>
        </LinksSection>
      </FooterContent>

      <BottomBar>
        <Copyright>© {currentYear} Learning Hub. All rights reserved.</Copyright>
        <BottomLinks>
          <FooterLink to="/sitemap">Sitemap</FooterLink>
          <FooterLink to="/accessibility">Accessibility</FooterLink>
        </BottomLinks>
      </BottomBar>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${colors.surface};
  border-top: 1px solid ${colors.border};
  padding: 4rem 2rem 1rem;
  color: ${colors.text};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${media.md} {
    grid-template-columns: 2fr 3fr;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BrandName = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.primary};
`;

const BrandDescription = styled.p`
  color: ${colors.textLight};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${colors.textLight};
  font-size: 1.25rem;
  transition: color ${transitions.fast};

  &:hover {
    color: ${colors.primary};
  }
`;

const LinksSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 2rem;
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ColumnTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const FooterLink = styled(Link)`
  color: ${colors.textLight};
  font-size: 0.875rem;
  transition: color ${transitions.fast};

  &:hover {
    color: ${colors.primary};
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid ${colors.border};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  ${media.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  color: ${colors.textLight};
  font-size: 0.875rem;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export default Footer; 