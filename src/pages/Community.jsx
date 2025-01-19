import { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions, animations } from '../styles/theme';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  const discussions = [
    {
      id: 1,
      author: {
        name: 'Sarah Chen',
        avatar: '👩‍💻',
        role: 'AI Expert'
      },
      title: 'Tips for Learning Machine Learning',
      content: 'What are your best practices for getting started with ML? Here are my top recommendations...',
      tags: ['Machine Learning', 'Beginners', 'Tips'],
      likes: 42,
      comments: 15,
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      author: {
        name: 'John Smith',
        avatar: '👨‍💻',
        role: 'Full Stack Developer'
      },
      title: 'React vs Vue - A Beginner&apos;s Perspective',
      content: 'After trying both frameworks, here&apos;s my comparison for beginners...',
      tags: ['React', 'Vue', 'Web Development'],
      likes: 38,
      comments: 24,
      timeAgo: '4 hours ago'
    },
    {
      id: 3,
      author: {
        name: 'Emma Davis',
        avatar: '👩‍🎨',
        role: 'UX Designer'
      },
      title: 'Design Principles Every Developer Should Know',
      content: 'Understanding these basic design principles can greatly improve your projects...',
      tags: ['Design', 'UI/UX', 'Tips'],
      likes: 56,
      comments: 18,
      timeAgo: '6 hours ago'
    }
  ];

  const activeMembers = [
    {
      name: 'Alex Johnson',
      avatar: '👨‍🚀',
      role: 'Cloud Architect',
      contributions: 156
    },
    {
      name: 'Maria Garcia',
      avatar: '👩‍🔬',
      role: 'Data Scientist',
      contributions: 142
    },
    {
      name: 'David Kim',
      avatar: '👨‍🎓',
      role: 'Student',
      contributions: 98
    }
  ];

  const upcomingEvents = [
    {
      title: 'Web Development Workshop',
      date: 'Tomorrow, 2:00 PM',
      attendees: 45,
      type: 'Workshop'
    },
    {
      title: 'AI Ethics Discussion',
      date: 'Friday, 6:00 PM',
      attendees: 32,
      type: 'Discussion'
    },
    {
      title: 'Code Review Session',
      date: 'Saturday, 11:00 AM',
      attendees: 28,
      type: 'Meetup'
    }
  ];

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <div>
            <Title>Community Hub</Title>
            <Subtitle>Connect, share, and learn together</Subtitle>
          </div>
          <HeaderActions>
            <SearchInput placeholder="Search discussions..." />
            <NewPostButton onClick={() => setShowNewPostForm(true)}>
              Start Discussion
            </NewPostButton>
          </HeaderActions>
        </HeaderContent>
      </Header>

      <MainContent>
        <LeftSection>
          <TabsContainer>
            <Tab
              $active={activeTab === 'discussions'}
              onClick={() => setActiveTab('discussions')}
            >
              Discussions
            </Tab>
            <Tab
              $active={activeTab === 'questions'}
              onClick={() => setActiveTab('questions')}
            >
              Q&A
            </Tab>
            <Tab
              $active={activeTab === 'projects'}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </Tab>
          </TabsContainer>

          <DiscussionsList>
            {discussions.map(discussion => (
              <DiscussionCard key={discussion.id}>
                <DiscussionHeader>
                  <AuthorInfo>
                    <Avatar>{discussion.author.avatar}</Avatar>
                    <div>
                      <AuthorName>{discussion.author.name}</AuthorName>
                      <AuthorRole>{discussion.author.role}</AuthorRole>
                    </div>
                  </AuthorInfo>
                  <TimeAgo>{discussion.timeAgo}</TimeAgo>
                </DiscussionHeader>

                <DiscussionContent>
                  <DiscussionTitle>{discussion.title}</DiscussionTitle>
                  <DiscussionText>{discussion.content}</DiscussionText>
                </DiscussionContent>

                <TagsContainer>
                  {discussion.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagsContainer>

                <DiscussionFooter>
                  <FooterAction>
                    <span>👍</span> {discussion.likes}
                  </FooterAction>
                  <FooterAction>
                    <span>💬</span> {discussion.comments}
                  </FooterAction>
                  <FooterAction>
                    <span>🔖</span> Save
                  </FooterAction>
                </DiscussionFooter>
              </DiscussionCard>
            ))}
          </DiscussionsList>
        </LeftSection>

        <RightSection>
          <SideCard>
            <SideCardTitle>Active Members</SideCardTitle>
            <MembersList>
              {activeMembers.map((member, index) => (
                <MemberItem key={index}>
                  <MemberInfo>
                    <Avatar>{member.avatar}</Avatar>
                    <div>
                      <MemberName>{member.name}</MemberName>
                      <MemberRole>{member.role}</MemberRole>
                    </div>
                  </MemberInfo>
                  <ContributionBadge>
                    {member.contributions} contributions
                  </ContributionBadge>
                </MemberItem>
              ))}
            </MembersList>
          </SideCard>

          <SideCard>
            <SideCardTitle>Upcoming Events</SideCardTitle>
            <EventsList>
              {upcomingEvents.map((event, index) => (
                <EventItem key={index}>
                  <EventHeader>
                    <EventTitle>{event.title}</EventTitle>
                    <EventType>{event.type}</EventType>
                  </EventHeader>
                  <EventDetails>
                    <EventDate>
                      <span>📅</span> {event.date}
                    </EventDate>
                    <EventAttendees>
                      <span>👥</span> {event.attendees} attending
                    </EventAttendees>
                  </EventDetails>
                </EventItem>
              ))}
            </EventsList>
          </SideCard>
        </RightSection>
      </MainContent>

      {showNewPostForm && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Start a Discussion</ModalTitle>
              <CloseButton onClick={() => setShowNewPostForm(false)}>✕</CloseButton>
            </ModalHeader>
            <ModalBody>
              <Input placeholder="Title" />
              <TextArea placeholder="Share your thoughts..." rows={5} />
              <Input placeholder="Add tags (comma separated)" />
              <ModalActions>
                <CancelButton onClick={() => setShowNewPostForm(false)}>
                  Cancel
                </CancelButton>
                <PostButton>Post Discussion</PostButton>
              </ModalActions>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
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
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 1rem 1.5rem;
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

const NewPostButton = styled.button`
  padding: 1rem 1.5rem;
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
`;

const MainContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid ${colors.border};
  padding-bottom: 1rem;
`;

const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.$active ? colors.primary : 'transparent'};
  color: ${props => props.$active ? 'white' : colors.text};
  border: none;
  border-radius: 100px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${transitions.default};

  &:hover {
    background: ${props => props.$active ? colors.primary : colors.background};
  }
`;

const DiscussionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const DiscussionCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid ${colors.border};
  transition: all ${transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.md};
  }
`;

const DiscussionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const AuthorName = styled.div`
  font-weight: 600;
  color: ${colors.text};
`;

const AuthorRole = styled.div`
  font-size: 0.9rem;
  color: ${colors.textLight};
`;

const TimeAgo = styled.div`
  font-size: 0.9rem;
  color: ${colors.textLight};
`;

const DiscussionContent = styled.div`
  margin-bottom: 1rem;
`;

const DiscussionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const DiscussionText = styled.p`
  color: ${colors.textLight};
  line-height: 1.5;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0.5rem 1rem;
  background: ${colors.background};
  color: ${colors.text};
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const DiscussionFooter = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const FooterAction = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.textLight};
  background: none;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all ${transitions.default};

  &:hover {
    color: ${colors.primary};
  }

  span {
    font-size: 1.1rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SideCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid ${colors.border};
`;

const SideCardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 1rem;
`;

const MembersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MemberItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MemberInfo = styled(AuthorInfo)``;

const MemberName = styled(AuthorName)``;

const MemberRole = styled(AuthorRole)``;

const ContributionBadge = styled.div`
  padding: 0.5rem 1rem;
  background: ${colors.background};
  color: ${colors.text};
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EventItem = styled.div`
  padding: 1rem;
  background: ${colors.background};
  border-radius: 12px;
  transition: all ${transitions.default};

  &:hover {
    transform: translateX(5px);
  }
`;

const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const EventTitle = styled.div`
  font-weight: 600;
  color: ${colors.text};
`;

const EventType = styled.div`
  font-size: 0.8rem;
  color: ${colors.primary};
  font-weight: 500;
`;

const EventDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: ${colors.textLight};
`;

const EventDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const EventAttendees = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  animation: ${animations.fadeIn} 0.3s ease;
`;

const ModalHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.text};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${colors.textLight};
  cursor: pointer;
  transition: all ${transitions.default};

  &:hover {
    color: ${colors.text};
    transform: rotate(90deg);
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${colors.border};
  border-radius: 8px;
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
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  transition: all ${transitions.default};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primary}20;
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const CancelButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${colors.background};
  color: ${colors.text};
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${transitions.default};

  &:hover {
    background: ${colors.border};
  }
`;

const PostButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${transitions.default};

  &:hover {
    opacity: 0.9;
  }
`;

export default Community; 