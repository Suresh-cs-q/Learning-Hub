import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, shadows, transitions } from '../../styles/theme';
import { useAuth } from '../../context/AuthContext';

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/courses', label: 'My Courses', icon: '📚' },
    { path: '/learning-paths', label: 'Learning Paths', icon: '🎯' },
    { path: '/mentors', label: 'Mentors', icon: '👥' },
    { path: '/community', label: 'Community', icon: '🤝' },
  ];

  return (
    <SidebarContainer $isOpen={isOpen}>
      <LogoSection>
        <Logo>🎓</Logo>
        <BrandName>Learning Hub</BrandName>
      </LogoSection>

      <NavSection>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            $isActive={location.pathname === item.path}
          >
            <NavIcon>{item.icon}</NavIcon>
            <NavLabel>{item.label}</NavLabel>
          </NavLink>
        ))}
      </NavSection>

      <LogoutSection>
        <LogoutButton onClick={logout}>
          <NavIcon>🚪</NavIcon>
          <NavLabel>Logout</NavLabel>
        </LogoutButton>
      </LogoutSection>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: white;
  border-right: 1px solid ${colors.border};
  display: flex;
  flex-direction: column;
  transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease;
  z-index: 1000;
  box-shadow: ${props => props.$isOpen ? shadows.sm : 'none'};
`;

const LogoSection = styled.div`
  height: 72px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid ${colors.border};
`;

const Logo = styled.div`
  font-size: 1.75rem;
  color: ${colors.primary};
`;

const BrandName = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.primary};
`;

const NavSection = styled.nav`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: ${props => props.$isActive ? colors.primary : colors.text};
  background: ${props => props.$isActive ? `${colors.primary}10` : 'transparent'};
  border-radius: 8px;
  transition: all ${transitions.default};

  &:hover {
    background: ${props => props.$isActive ? `${colors.primary}20` : `${colors.primary}10`};
    transform: translateX(4px);
  }
`;

const NavIcon = styled.span`
  font-size: 1.25rem;
`;

const NavLabel = styled.span`
  font-weight: 500;
`;

const LogoutSection = styled.div`
  padding: 1rem;
  border-top: 1px solid ${colors.border};
`;

const LogoutButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  color: ${colors.text};
  font-weight: 500;
  cursor: pointer;
  border-radius: 8px;
  transition: all ${transitions.default};

  &:hover {
    background: ${colors.error}10;
    color: ${colors.error};
    transform: translateX(4px);
  }
`;

export default Sidebar; 