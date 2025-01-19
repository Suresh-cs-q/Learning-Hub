import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';
import { colors, shadows, transitions, mixins } from '../../styles/theme';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <HeaderContainer>
      <SearchContainer>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        <SearchInput placeholder="Search courses, paths, and more..." />
      </SearchContainer>

      <Actions>
        <NotificationButton>
          <FiBell />
          <NotificationBadge>3</NotificationBadge>
        </NotificationButton>

        <ProfileSection>
          <ProfileButton onClick={() => setShowProfileMenu(!showProfileMenu)}>
            <ProfileAvatar src={user?.avatar} alt={user?.name} />
            <ProfileName>{user?.name}</ProfileName>
            <FiChevronDown />
          </ProfileButton>

          {showProfileMenu && (
            <ProfileMenu>
              <MenuItem as={Link} to="/profile">My Profile</MenuItem>
              <MenuItem as={Link} to="/settings">Settings</MenuItem>
              <MenuDivider />
              <MenuItem onClick={logout}>Logout</MenuItem>
            </ProfileMenu>
          )}
        </ProfileSection>
      </Actions>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 64px;
  padding: 0 2rem;
  background-color: ${colors.surface};
  border-bottom: 1px solid ${colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 90;
  ${mixins.glassmorphism}
`;

const SearchContainer = styled.div`
  position: relative;
  width: 400px;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.textLight};
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 1rem 0 2.5rem;
  border: 1px solid ${colors.border};
  border-radius: 20px;
  background-color: ${colors.background};
  color: ${colors.text};
  font-size: 0.875rem;
  transition: all ${transitions.fast};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primary}20;
  }

  &::placeholder {
    color: ${colors.textLight};
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NotificationButton = styled.button`
  position: relative;
  background: none;
  border: none;
  color: ${colors.text};
  font-size: 1.25rem;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ${transitions.fast};

  &:hover {
    color: ${colors.primary};
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${colors.error};
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  min-width: 18px;
  height: 18px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
`;

const ProfileSection = styled.div`
  position: relative;
`;

const ProfileButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: ${colors.text};
  transition: all ${transitions.fast};

  &:hover {
    color: ${colors.primary};
  }
`;

const ProfileAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileName = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`;

const ProfileMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  width: 200px;
  background-color: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 8px;
  box-shadow: ${shadows.md};
  overflow: hidden;
`;

const MenuItem = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  text-align: left;
  color: ${colors.text};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all ${transitions.fast};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${colors.background};
    color: ${colors.primary};
  }
`;

const MenuDivider = styled.div`
  height: 1px;
  background-color: ${colors.border};
  margin: 0.5rem 0;
`;

export default Header; 