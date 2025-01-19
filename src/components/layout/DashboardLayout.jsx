import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { colors, transitions } from '../../styles/theme';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) setIsSidebarOpen(false);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <LayoutContainer>
      <Navbar onToggleSidebar={toggleSidebar} isMobile={isMobile} />
      <MainWrapper>
        <Sidebar isOpen={isSidebarOpen} isMobile={isMobile} />
        <MainContainer $isSidebarOpen={isSidebarOpen} $isMobile={isMobile}>
          <MainContent>
            {children}
          </MainContent>
        </MainContainer>
      </MainWrapper>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: ${colors.background};
  position: relative;
  overflow-x: hidden;
`;

const MainWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 72px);
  margin-top: 72px;
  position: relative;
`;

const MainContainer = styled.div`
  flex: 1;
  margin-left: ${props => props.$isMobile ? '0' : (props.$isSidebarOpen ? '280px' : '0')};
  width: ${props => props.$isMobile ? '100%' : 'auto'};
  transition: all ${transitions.default};
  min-height: 100%;
  max-width: ${props => props.$isSidebarOpen ? 'calc(100% - 280px)' : '100%'};
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    max-width: 100%;
  }
`;

const MainContent = styled.main`
  padding: 2rem;
  background-color: ${colors.background};
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout; 