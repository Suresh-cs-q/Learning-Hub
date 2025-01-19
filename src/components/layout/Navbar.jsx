import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';
import { colors, shadows, transitions, animations } from '../../styles/theme';
import { FiMenu, FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';

const Navbar = ({ onToggleSidebar, isMobile }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const isAuthPage = ['/login', '/register', '/forgot-password'].includes(location.pathname);

  if (isAuthPage) return null;

  return (
    <NavbarContainer $isScrolled={isScrolled}>
      <NavContent>
        <LeftSection>
          <MenuToggle onClick={onToggleSidebar}>
            <FiMenu />
          </MenuToggle>
          <LogoLink to="/dashboard">
            <LogoIcon>🎓</LogoIcon>
            {!isMobile && <LogoText>Learning Hub</LogoText>}
          </LogoLink>
        </LeftSection>

        {!isMobile && (
          <SearchContainer>
            <SearchIcon>
              <FiSearch />
            </SearchIcon>
            <SearchInput placeholder="Search courses, paths, and more..." />
          </SearchContainer>
        )}

        <RightSection>
          {isMobile && (
            <SearchButton>
              <FiSearch />
            </SearchButton>
          )}
          <NotificationBell>
            <FiBell />
            <NotificationBadge>2</NotificationBadge>
          </NotificationBell>

          <ProfileSection>
            <ProfileButton onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
              <Avatar>
                {user?.name ? user.name[0].toUpperCase() : '👤'}
              </Avatar>
              {!isMobile && <ProfileName>{user?.name || 'User'}</ProfileName>}
              {!isMobile && <FiChevronDown />}
            </ProfileButton>

            {isProfileMenuOpen && (
              <ProfileMenu>
                <MenuItem to="/profile">
                  <MenuIcon>👤</MenuIcon>
                  Profile
                </MenuItem>
                <MenuItem to="/settings">
                  <MenuIcon>⚙️</MenuIcon>
                  Settings
                </MenuItem>
                <MenuDivider />
                <MenuItem as="button" onClick={handleLogout}>
                  <MenuIcon>🚪</MenuIcon>
                  Logout
                </MenuItem>
              </ProfileMenu>
            )}
          </ProfileSection>
        </RightSection>
      </NavContent>
      {isMobile && (
        <MobileSearchBar>
          <SearchIcon>
            <FiSearch />
          </SearchIcon>
          <SearchInput placeholder="Search..." />
        </MobileSearchBar>
      )}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  background: ${props => props.$isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)'};
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${colors.border};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  display: flex;
  align-items: center;
  z-index: 1000;
  transition: all ${transitions.default};
  box-shadow: ${props => props.$isScrolled ? shadows.sm : 'none'};
`;

const NavContent = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 100%;
  
  @media (max-width: 768px) {
    padding: 0 0.5rem;
    gap: 1rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MenuToggle = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: white;
  border: 1px solid ${colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${transitions.default};
  font-size: 1.25rem;
  color: ${colors.text};

  &:hover {
    transform: scale(1.05);
    box-shadow: ${shadows.sm};
    color: ${colors.primary};
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: ${colors.text};
  transition: transform ${transitions.default};

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoIcon = styled.span`
  font-size: 1.75rem;
  animation: ${animations.pulse} 2s infinite;
`;

const LogoText = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  background: ${colors.primary};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 500px;
  margin: 0 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.textLight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 1rem 0 2.75rem;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  background: ${colors.background};
  font-size: 0.95rem;
  transition: all ${transitions.default};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primary}20;
  }

  &::placeholder {
    color: ${colors.textLight};
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NotificationBell = styled.button`
  position: relative;
  background: none;
  border: none;
  font-size: 1.25rem;
  color: ${colors.text};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all ${transitions.default};

  &:hover {
    background: ${colors.background};
    transform: scale(1.1);
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: ${colors.primary};
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileSection = styled.div`
  position: relative;
`;

const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 8px;
  transition: all ${transitions.default};

  &:hover {
    background: ${colors.background};
  }
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  transition: transform ${transitions.default};

  ${ProfileButton}:hover & {
    transform: scale(1.1);
  }
`;

const ProfileName = styled.span`
  font-weight: 500;
  color: ${colors.text};
`;

const ProfileMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: ${shadows.lg};
  min-width: 200px;
  padding: 0.5rem;
  animation: ${animations.fadeIn} 0.2s ease;
  transform-origin: top right;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: ${colors.text};
  text-decoration: none;
  font-size: 0.9rem;
  border-radius: 8px;
  transition: all ${transitions.default};

  &:hover {
    background: ${colors.background};
    transform: translateX(5px);
  }

  ${props => props.as === 'button' && `
    width: 100%;
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    color: ${colors.error};
    
    &:hover {
      background: ${colors.error}10;
    }
  `}
`;

const MenuIcon = styled.span`
  font-size: 1.1rem;
`;

const MenuDivider = styled.hr`
  border: none;
  border-top: 1px solid ${colors.border};
  margin: 0.5rem 0;
`;

const SearchButton = styled(MenuToggle)`
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileSearchBar = styled.div`
  position: relative;
  padding: 0.5rem 1rem;
  background: white;
  border-top: 1px solid ${colors.border};
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export default Navbar;