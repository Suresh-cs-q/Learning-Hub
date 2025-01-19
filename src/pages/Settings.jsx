import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions } from '../styles/theme';
import { useAuth } from '../context/AuthContext';
import { FiUser, FiBell, FiLock, FiGlobe, FiEye, FiCreditCard, FiChevronRight, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Settings = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('account');
  const [sectionVisibility, setSectionVisibility] = useState({
    password: true,
    twoFactor: true,
    visibility: true,
    connectedAccounts: true,
    dangerZone: true,
    appearance: true,
    language: true,
    learning: true
  });
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    courseReminders: true,
    mentorMessages: true,
    marketingEmails: false
  });
  const [preferences, setPreferences] = useState({
    theme: 'light',
    language: 'english',
    timezone: 'UTC',
    visibility: 'public'
  });

  const tabs = [
    { id: 'account', label: 'Account Settings', icon: <FiUser /> },
    { id: 'notifications', label: 'Notifications', icon: <FiBell /> },
    { id: 'privacy', label: 'Privacy & Security', icon: <FiLock /> },
    { id: 'preferences', label: 'Preferences', icon: <FiGlobe /> }
  ];

  const toggleSection = (section) => {
    setSectionVisibility(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <PageContainer>
      <Header>
        <Title>Settings</Title>
        <Subtitle>Manage your account settings and preferences</Subtitle>
      </Header>

      <ContentWrapper>
        <Sidebar>
          {tabs.map(tab => (
            <TabButton
              key={tab.id}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              <TabIcon>{tab.icon}</TabIcon>
              <TabText>{tab.label}</TabText>
              <ChevronIcon><FiChevronRight /></ChevronIcon>
            </TabButton>
          ))}
        </Sidebar>

        <MainContent>
          {activeTab === 'account' && (
            <Section>
              <SectionTitle>Account Settings</SectionTitle>
              <Card>
                <ProfileSection>
                  <ProfileImage src={user?.avatar} alt={user?.name} />
                  <ProfileInfo>
                    <h3>{user?.name}</h3>
                    <p>{user?.email}</p>
                  </ProfileInfo>
                  <EditButton>Change Photo</EditButton>
                </ProfileSection>
                <FormGroup>
                  <Label>Full Name</Label>
                  <Input type="text" defaultValue={user?.name} />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input type="email" defaultValue={user?.email} />
                </FormGroup>
                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input type="tel" placeholder="Add phone number" />
                </FormGroup>
                <SaveButton>Save Changes</SaveButton>
              </Card>

              <Card>
                <SectionTitle>Billing Information</SectionTitle>
                <BillingInfo>
                  <FiCreditCard />
                  <div>
                    <strong>Premium Plan</strong>
                    <p>Next billing date: April 1, 2024</p>
                  </div>
                  <EditButton>Update Plan</EditButton>
                </BillingInfo>
              </Card>
            </Section>
          )}

          {activeTab === 'notifications' && (
            <Section>
              <SectionTitle>Notification Preferences</SectionTitle>
              <Card>
                <NotificationOption>
                  <div>
                    <Label>Email Updates</Label>
                    <Description>Receive updates about your course progress</Description>
                  </div>
                  <Toggle
                    checked={notifications.emailUpdates}
                    onChange={() => setNotifications(prev => ({
                      ...prev,
                      emailUpdates: !prev.emailUpdates
                    }))}
                  />
                </NotificationOption>
                <NotificationOption>
                  <div>
                    <Label>Course Reminders</Label>
                    <Description>Get reminded about upcoming lessons</Description>
                  </div>
                  <Toggle
                    checked={notifications.courseReminders}
                    onChange={() => setNotifications(prev => ({
                      ...prev,
                      courseReminders: !prev.courseReminders
                    }))}
                  />
                </NotificationOption>
                <NotificationOption>
                  <div>
                    <Label>Mentor Messages</Label>
                    <Description>Receive notifications for mentor communications</Description>
                  </div>
                  <Toggle
                    checked={notifications.mentorMessages}
                    onChange={() => setNotifications(prev => ({
                      ...prev,
                      mentorMessages: !prev.mentorMessages
                    }))}
                  />
                </NotificationOption>
                <NotificationOption>
                  <div>
                    <Label>Marketing Emails</Label>
                    <Description>Receive updates about new courses and features</Description>
                  </div>
                  <Toggle
                    checked={notifications.marketingEmails}
                    onChange={() => setNotifications(prev => ({
                      ...prev,
                      marketingEmails: !prev.marketingEmails
                    }))}
                  />
                </NotificationOption>
              </Card>
            </Section>
          )}

          {activeTab === 'privacy' && (
            <Section>
              <SectionTitle>
                <FiLock /> Privacy & Security
              </SectionTitle>
              
              <Card>
                <SectionHeader onClick={() => toggleSection('password')}>
                  <div>
                    <h3>Password</h3>
                    <Description>Change your password or enable two-factor authentication</Description>
                  </div>
                  <ToggleIcon>{sectionVisibility.password ? <FiChevronUp /> : <FiChevronDown />}</ToggleIcon>
                </SectionHeader>
                {sectionVisibility.password && (
                  <>
                    <FormGroup>
                      <Label>Current Password</Label>
                      <Input type="password" placeholder="Enter current password" />
                    </FormGroup>
                    <FormGroup>
                      <Label>New Password</Label>
                      <Input type="password" placeholder="Enter new password" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Confirm New Password</Label>
                      <Input type="password" placeholder="Confirm new password" />
                    </FormGroup>
                    <SaveButton>Update Password</SaveButton>
                  </>
                )}
              </Card>

              <Card>
                <SectionHeader onClick={() => toggleSection('twoFactor')}>
                  <div>
                    <h3>Two-Factor Authentication</h3>
                    <Description>Add an extra layer of security to your account</Description>
                  </div>
                  <ToggleIcon>{sectionVisibility.twoFactor ? <FiChevronUp /> : <FiChevronDown />}</ToggleIcon>
                </SectionHeader>
                {sectionVisibility.twoFactor && (
                  <Toggle checked={false} onChange={() => {}} />
                )}
              </Card>

              <Card>
                <SectionHeader onClick={() => toggleSection('visibility')}>
                  <div>
                    <h3>Account Visibility</h3>
                    <Description>Control who can see your profile and activity</Description>
                  </div>
                  <ToggleIcon>{sectionVisibility.visibility ? <FiChevronUp /> : <FiChevronDown />}</ToggleIcon>
                </SectionHeader>
                {sectionVisibility.visibility && (
                  <>
                    <VisibilityGrid>
                      <VisibilityOption
                        selected={preferences.visibility === 'public'}
                        onClick={() => setPreferences(prev => ({ ...prev, visibility: 'public' }))}
                      >
                        <VisibilityIcon><FiEye /></VisibilityIcon>
                        <div>
                          <VisibilityTitle>Public</VisibilityTitle>
                          <VisibilityDescription>Your profile and activity will be visible to everyone</VisibilityDescription>
                        </div>
                      </VisibilityOption>

                      <VisibilityOption
                        selected={preferences.visibility === 'connections'}
                        onClick={() => setPreferences(prev => ({ ...prev, visibility: 'connections' }))}
                      >
                        <VisibilityIcon><FiUser /></VisibilityIcon>
                        <div>
                          <VisibilityTitle>Connections Only</VisibilityTitle>
                          <VisibilityDescription>Only your connections can see your profile and activity</VisibilityDescription>
                        </div>
                      </VisibilityOption>

                      <VisibilityOption
                        selected={preferences.visibility === 'private'}
                        onClick={() => setPreferences(prev => ({ ...prev, visibility: 'private' }))}
                      >
                        <VisibilityIcon><FiLock /></VisibilityIcon>
                        <div>
                          <VisibilityTitle>Private</VisibilityTitle>
                          <VisibilityDescription>Only you can see your profile and activity</VisibilityDescription>
                        </div>
                      </VisibilityOption>
                    </VisibilityGrid>

                    <VisibilityInfo>
                      <InfoIcon><FiEye /></InfoIcon>
                      <div>
                        <InfoTitle>What others can see</InfoTitle>
                        <VisibilityList>
                          <VisibilityItem>✓ Your profile picture and name</VisibilityItem>
                          <VisibilityItem>✓ Completed courses and achievements</VisibilityItem>
                          <VisibilityItem>✓ Learning paths and progress</VisibilityItem>
                          <VisibilityItem>✓ Community contributions</VisibilityItem>
                        </VisibilityList>
                      </div>
                    </VisibilityInfo>
                  </>
                )}
              </Card>

              <Card>
                <SectionHeader onClick={() => toggleSection('connectedAccounts')}>
                  <div>
                    <h3>Connected Accounts</h3>
                    <Description>Manage your connected social accounts and applications</Description>
                  </div>
                  <ToggleIcon>{sectionVisibility.connectedAccounts ? <FiChevronUp /> : <FiChevronDown />}</ToggleIcon>
                </SectionHeader>
                {sectionVisibility.connectedAccounts && (
                  <ConnectedAccount>
                    <div>
                      <strong>Google</strong>
                      <p>Connected on March 15, 2024</p>
                    </div>
                    <DisconnectButton>Disconnect</DisconnectButton>
                  </ConnectedAccount>
                )}
              </Card>

              <Card>
                <SectionHeader onClick={() => toggleSection('dangerZone')}>
                  <div>
                    <h3>Delete Account</h3>
                    <Description>Permanently delete your account and all data</Description>
                  </div>
                  <ToggleIcon>{sectionVisibility.dangerZone ? <FiChevronUp /> : <FiChevronDown />}</ToggleIcon>
                </SectionHeader>
                {sectionVisibility.dangerZone && (
                  <DangerZone>
                    <div>
                      <h3>Delete Account</h3>
                      <Description>Permanently delete your account and all data</Description>
                    </div>
                    <DeleteButton>Delete Account</DeleteButton>
                  </DangerZone>
                )}
              </Card>
            </Section>
          )}

          {activeTab === 'preferences' && (
            <Section>
              <SectionTitle>
                <FiGlobe /> Preferences
              </SectionTitle>
              
              <Card>
                <h3>Appearance</h3>
                <Description>Customize how Learning Hub looks on your device</Description>
                <FormGroup>
                  <Label>Theme</Label>
                  <ThemeSelector>
                    <ThemeOption selected={preferences.theme === 'light'}>
                      <ThemePreview light />
                      <span>Light</span>
                    </ThemeOption>
                    <ThemeOption selected={preferences.theme === 'dark'}>
                      <ThemePreview />
                      <span>Dark</span>
                    </ThemeOption>
                    <ThemeOption selected={preferences.theme === 'system'}>
                      <ThemePreview system />
                      <span>System</span>
                    </ThemeOption>
                  </ThemeSelector>
                </FormGroup>
              </Card>

              <Card>
                <h3>Language & Region</h3>
                <Description>Set your preferred language and regional settings</Description>
                <LanguageGrid>
                  <FormGroup>
                    <Label>Language</Label>
                    <Description>Choose your preferred language for the platform</Description>
                    <LanguageSelect
                      value={preferences.language}
                      onChange={(e) => setPreferences(prev => ({
                        ...prev,
                        language: e.target.value
                      }))}
                    >
                      <option value="english">🇺🇸 English (US)</option>
                      <option value="british">🇬🇧 English (UK)</option>
                      <option value="spanish">🇪🇸 Español</option>
                      <option value="french">🇫🇷 Français</option>
                      <option value="german">🇩🇪 Deutsch</option>
                      <option value="chinese">🇨🇳 中文</option>
                      <option value="japanese">🇯🇵 日本語</option>
                      <option value="korean">🇰🇷 한국어</option>
                    </LanguageSelect>
                  </FormGroup>

                  <FormGroup>
                    <Label>Timezone</Label>
                    <Description>Select your local timezone for accurate scheduling</Description>
                    <TimezoneSelect
                      value={preferences.timezone}
                      onChange={(e) => setPreferences(prev => ({
                        ...prev,
                        timezone: e.target.value
                      }))}
                    >
                      <option value="UTC">UTC (Coordinated Universal Time)</option>
                      <option value="EST">EST (Eastern Standard Time)</option>
                      <option value="CST">CST (Central Standard Time)</option>
                      <option value="PST">PST (Pacific Standard Time)</option>
                      <option value="GMT">GMT (Greenwich Mean Time)</option>
                      <option value="IST">IST (Indian Standard Time)</option>
                      <option value="JST">JST (Japan Standard Time)</option>
                      <option value="AEST">AEST (Australian Eastern Standard Time)</option>
                    </TimezoneSelect>
                  </FormGroup>
                </LanguageGrid>

                <RegionInfo>
                  <InfoIcon><FiGlobe /></InfoIcon>
                  <div>
                    <InfoTitle>Why is this important?</InfoTitle>
                    <InfoText>Your language and timezone settings help us provide you with localized content and accurate scheduling for your courses, deadlines, and notifications.</InfoText>
                  </div>
                </RegionInfo>
              </Card>

              <Card>
                <h3>Learning Preferences</h3>
                <Description>Customize your learning experience</Description>
                <PreferenceOption>
                  <div>
                    <Label>Show Progress Bar</Label>
                    <Description>Display your course progress on the dashboard</Description>
                  </div>
                  <Toggle checked={true} onChange={() => {}} />
                </PreferenceOption>
                <PreferenceOption>
                  <div>
                    <Label>Course Recommendations</Label>
                    <Description>Get personalized course suggestions based on your interests</Description>
                  </div>
                  <Toggle checked={true} onChange={() => {}} />
                </PreferenceOption>
                <PreferenceOption>
                  <div>
                    <Label>Learning Reminders</Label>
                    <Description>Receive daily reminders to continue your courses</Description>
                  </div>
                  <Toggle checked={false} onChange={() => {}} />
                </PreferenceOption>
              </Card>
            </Section>
          )}
        </MainContent>
      </ContentWrapper>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 4rem;
`;

const Header = styled.div`
  margin-bottom: 3rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1.5rem;
    left: 0;
    width: 60px;
    height: 4px;
    background: ${colors.primary};
    border-radius: 2px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: 0.75rem;
  letter-spacing: -0.5px;
`;

const Subtitle = styled.p`
  color: ${colors.textLight};
  font-size: 1.1rem;
  max-width: 500px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3rem;
  min-height: calc(100vh - 200px);
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: sticky;
  top: 2rem;
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: ${props => props.isActive ? `${colors.primary}10` : 'transparent'};
  border: 1px solid ${props => props.isActive ? colors.primary : 'transparent'};
  border-radius: 12px;
  color: ${props => props.isActive ? colors.primary : colors.text};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${transitions.fast};
  width: 100%;
  text-align: left;
  position: relative;

  &:hover {
    background: ${colors.primary}10;
    border-color: ${colors.primary};
    transform: translateX(4px);
  }
`;

const TabIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${colors.background};
  border-radius: 10px;
  font-size: 1.25rem;
`;

const TabText = styled.span`
  flex: 1;
`;

const ChevronIcon = styled.span`
  opacity: 0.5;
  transition: all ${transitions.fast};
  ${TabButton}:hover & {
    opacity: 1;
    transform: translateX(4px);
  }
`;

const MainContent = styled.div`
  background: ${colors.surface};
  border-radius: 16px;
  border: 1px solid ${colors.border};
  box-shadow: ${shadows.sm};
`;

const Section = styled.div`
  padding: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: ${colors.primary};
  }
`;

const Card = styled.div`
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: all ${transitions.fast};

  &:hover {
    border-color: ${colors.primary}40;
    box-shadow: ${shadows.md};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid ${colors.border};
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: ${shadows.md};
`;

const ProfileInfo = styled.div`
  flex: 1;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${colors.text};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${colors.textLight};
    font-size: 1rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: ${colors.textLight};
  margin-top: 0.5rem;
  line-height: 1.5;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid ${colors.border};
  border-radius: 10px;
  font-size: 1rem;
  color: ${colors.text};
  background: ${colors.background};
  transition: all ${transitions.fast};

  &:hover {
    border-color: ${colors.primary}40;
  }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 4px ${colors.primary}20;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid ${colors.border};
  border-radius: 10px;
  font-size: 1rem;
  color: ${colors.text};
  background: ${colors.background};
  cursor: pointer;
  transition: all ${transitions.fast};

  &:hover {
    border-color: ${colors.primary}40;
  }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 4px ${colors.primary}20;
  }
`;

const EditButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 2px solid ${colors.border};
  border-radius: 10px;
  color: ${colors.text};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${transitions.fast};

  &:hover {
    background: ${colors.background};
    border-color: ${colors.primary};
    color: ${colors.primary};
    transform: translateY(-2px);
  }
`;

const SaveButton = styled.button`
  padding: 1rem 2rem;
  background: ${colors.primary};
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${transitions.fast};
  box-shadow: 0 4px 12px ${colors.primary}40;

  &:hover {
    background: ${colors.primary}ee;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px ${colors.primary}40;
  }
`;

const DeleteButton = styled.button`
  padding: 1rem 2rem;
  background: ${colors.error}10;
  border: 2px solid ${colors.error};
  border-radius: 10px;
  color: ${colors.error};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${transitions.fast};

  &:hover {
    background: ${colors.error};
    color: white;
    transform: translateY(-2px);
  }
`;

const NotificationOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${colors.border};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }
`;

const Toggle = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  width: 52px;
  height: 28px;
  margin: 0;
  cursor: pointer;
  appearance: none;
  background: ${props => props.checked ? colors.primary : colors.border};
  border-radius: 14px;
  transition: all ${transitions.fast};

  &:before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    top: 2px;
    left: ${props => props.checked ? '26px' : '2px'};
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all ${transitions.fast};
  }

  &:hover {
    opacity: 0.9;
  }
`;

const BillingInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  background: ${colors.background};
  border-radius: 12px;

  svg {
    font-size: 2rem;
    color: ${colors.primary};
  }

  strong {
    display: block;
    color: ${colors.text};
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${colors.textLight};
    font-size: 0.875rem;
  }
`;

const DangerZone = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.error}05;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid ${colors.error}20;
`;

const ConnectedAccount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
  border-bottom: 1px solid ${colors.border};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }

  strong {
    display: block;
    font-size: 1rem;
    color: ${colors.text};
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.875rem;
    color: ${colors.textLight};
  }
`;

const ConnectButton = styled(EditButton)`
  background: ${colors.primary}10;
  border-color: ${colors.primary};
  color: ${colors.primary};
`;

const DisconnectButton = styled(EditButton)`
  background: ${colors.error}10;
  border-color: ${colors.error};
  color: ${colors.error};
`;

const ThemeSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

const ThemeOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border: 2px solid ${props => props.selected ? colors.primary : colors.border};
  border-radius: 12px;
  cursor: pointer;
  transition: all ${transitions.fast};

  &:hover {
    border-color: ${colors.primary};
    transform: translateY(-2px);
  }

  span {
    font-size: 0.875rem;
    color: ${colors.text};
    font-weight: 500;
  }
`;

const ThemePreview = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 8px;
  background: ${props => props.light ? '#ffffff' : props.system ? 'linear-gradient(to right, #ffffff 50%, #1a1a1a 50%)' : '#1a1a1a'};
  border: 1px solid ${colors.border};
`;

const PreferenceOption = styled(NotificationOption)`
  padding: 1.5rem 0;

  ${Label} {
    margin-bottom: 0.25rem;
  }

  ${Description} {
    margin-top: 0;
  }
`;

const LanguageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const LanguageSelect = styled(Select)`
  font-size: 1.1rem;
  padding: 1.25rem;
  background: ${colors.background};
  border-width: 2px;
  
  &:hover {
    border-color: ${colors.primary};
  }

  option {
    padding: 1rem;
  }
`;

const TimezoneSelect = styled(LanguageSelect)``;

const RegionInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: ${colors.primary}08;
  border-radius: 12px;
  border: 1px solid ${colors.primary}20;
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: ${colors.primary}15;
  border-radius: 10px;
  color: ${colors.primary};
  font-size: 1.25rem;
`;

const InfoTitle = styled.h4`
  color: ${colors.text};
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  color: ${colors.textLight};
  font-size: 0.875rem;
  line-height: 1.5;
`;

const VisibilityGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin: 1.5rem 0;
`;

const VisibilityOption = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem;
  background: ${props => props.selected ? `${colors.primary}08` : colors.background};
  border: 2px solid ${props => props.selected ? colors.primary : colors.border};
  border-radius: 12px;
  cursor: pointer;
  transition: all ${transitions.fast};

  &:hover {
    border-color: ${colors.primary};
    transform: translateX(4px);
  }
`;

const VisibilityIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${colors.primary}15;
  border-radius: 10px;
  color: ${colors.primary};
  font-size: 1.25rem;
`;

const VisibilityTitle = styled.h4`
  color: ${colors.text};
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const VisibilityDescription = styled.p`
  color: ${colors.textLight};
  font-size: 0.875rem;
  line-height: 1.5;
`;

const VisibilityInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: ${colors.primary}08;
  border-radius: 12px;
  border: 1px solid ${colors.primary}20;
`;

const VisibilityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.75rem 0 0;
`;

const VisibilityItem = styled.li`
  color: ${colors.textLight};
  font-size: 0.875rem;
  line-height: 1.75;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  padding-bottom: ${props => props.isExpanded ? '1.5rem' : '0'};
  
  &:hover {
    opacity: 0.9;
  }

  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${colors.text};
  }
`;

const ToggleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${colors.background};
  color: ${colors.textLight};
  transition: all ${transitions.fast};

  &:hover {
    background: ${colors.primary}10;
    color: ${colors.primary};
  }

  svg {
    font-size: 1.25rem;
  }
`;

export default Settings; 