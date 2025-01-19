import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import GlobalStyles from './styles/GlobalStyles';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import LearningPaths from './pages/LearningPaths';
import Mentors from './pages/Mentors';
import Enterprise from './pages/Enterprise';
import HelpCenter from './pages/HelpCenter';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Security from './pages/Security';
import Sitemap from './pages/Sitemap';
import Accessibility from './pages/Accessibility';
import Community from './pages/Community';
import DashboardLayout from './components/DashboardLayout';
import { colors } from './styles/theme';
import Settings from './pages/Settings';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: colors.background,
        color: colors.text
      }}>
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
};

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
        <Route path="/learning-paths" element={<ProtectedRoute><LearningPaths /></ProtectedRoute>} />
        <Route path="/mentors" element={<ProtectedRoute><Mentors /></ProtectedRoute>} />
        <Route path="/enterprise" element={<ProtectedRoute><Enterprise /></ProtectedRoute>} />
        <Route path="/help-center" element={<ProtectedRoute><HelpCenter /></ProtectedRoute>} />
        <Route path="/faq" element={<ProtectedRoute><FAQ /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/feedback" element={<ProtectedRoute><Feedback /></ProtectedRoute>} />
        <Route path="/privacy-policy" element={<ProtectedRoute><PrivacyPolicy /></ProtectedRoute>} />
        <Route path="/terms-of-service" element={<ProtectedRoute><TermsOfService /></ProtectedRoute>} />
        <Route path="/cookie-policy" element={<ProtectedRoute><CookiePolicy /></ProtectedRoute>} />
        <Route path="/security" element={<ProtectedRoute><Security /></ProtectedRoute>} />
        <Route path="/sitemap" element={<ProtectedRoute><Sitemap /></ProtectedRoute>} />
        <Route path="/accessibility" element={<ProtectedRoute><Accessibility /></ProtectedRoute>} />
        <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
