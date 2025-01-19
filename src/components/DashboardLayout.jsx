import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions } from '../styles/theme';
import { useAuth } from '../context/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiBook, FiMap, FiUsers, FiTarget, 
         FiMessageSquare, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import Header from './layout/Header';
import Footer from './layout/Footer';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user, logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: <FiHome />, label: 'Dashboard' },
    { path: '/courses', icon: <FiBook />, label: 'Courses' },
    { path: '/learning-paths', icon: <FiMap />, label: 'Learning Paths' },
    { path: '/mentors', icon: <FiUsers />, label: 'Mentors' },
    { path: '/community', icon: <FiMessageSquare />, label: 'Community' },
    { path: '/help-center', icon: <FiHelpCircle />, label: 'Help Center' }
  ];

  return (
    <LayoutContainer>
      <Sidebar isOpen={isSidebarOpen}>
        <SidebarHeader>
          <Logo>Learning Hub</Logo>
          <MenuButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <FiX /> : <FiMenu />}
          </MenuButton>
        </SidebarHeader>

        <UserSection>
          <UserAvatar src={user?.avatar} alt={user?.name} />
          <UserInfo isOpen={isSidebarOpen}>
            <UserName>{user?.name}</UserName>
            <UserEmail>{user?.email}</UserEmail>
          </UserInfo>
        </UserSection>

        <NavSection>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              isActive={location.pathname === item.path}
              isOpen={isSidebarOpen}
            >
              <NavIcon>{item.icon}</NavIcon>
              <NavLabel isOpen={isSidebarOpen}>{item.label}</NavLabel>
            </NavLink>
          ))}
        </NavSection>

        <LogoutButton onClick={logout} isOpen={isSidebarOpen}>
          <FiLogOut />
          <span>{isSidebarOpen && 'Logout'}</span>
        </LogoutButton>
      </Sidebar>

      <ContentWrapper isSidebarOpen={isSidebarOpen}>
        <Header />
        <MainContent>
          {children}
        </MainContent>
        <Footer />
      </ContentWrapper>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${colors.background};
`;

const Sidebar = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${props => props.isOpen ? '240px' : '80px'};
  background-color: ${colors.surface};
  border-right: 1px solid ${colors.border};
  display: flex;
  flex-direction: column;
  transition: width ${transitions.default};
  z-index: 100;
  box-shadow: ${shadows.sm};
`;

const SidebarHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.border};
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.primary};
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${colors.text};
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ${transitions.fast};

  &:hover {
    color: ${colors.primary};
  }
`;

const UserSection = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid ${colors.border};
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserInfo = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  overflow: hidden;
`;

const UserName = styled.div`
  font-weight: 600;
  color: ${colors.text};
`;

const UserEmail = styled.div`
  font-size: 0.875rem;
  color: ${colors.textLight};
`;

const NavSection = styled.nav`
  flex: 1;
  padding: 1.5rem 0;
  overflow-y: auto;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: ${props => props.isActive ? colors.primary : colors.text};
  background-color: ${props => props.isActive ? `${colors.primary}10` : 'transparent'};
  transition: all ${transitions.fast};
  gap: 1rem;

  &:hover {
    color: ${colors.primary};
    background-color: ${colors.primary}10;
  }
`;

const NavIcon = styled.div`
  font-size: 1.25rem;
  min-width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLabel = styled.span`
  display: ${props => props.isOpen ? 'block' : 'none'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  border-top: 1px solid ${colors.border};
  color: ${colors.text};
  font-size: 1rem;
  transition: all ${transitions.fast};

  &:hover {
    color: ${colors.error};
    background-color: ${colors.error}10;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-left: ${props => props.isSidebarOpen ? '240px' : '80px'};
  transition: margin-left ${transitions.default};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: ${colors.background};
`;

export default DashboardLayout; 