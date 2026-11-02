import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  ProjectItem, 
  GalleryItem, 
  PhotoItem, 
  ChatMessage, 
  NotificationItem, 
  ClientProfile, 
  PhotoApprovalStatus,
  ServiceCategory
} from '../types';
import { 
  INITIAL_CLIENT_PROFILE, 
  INITIAL_PROJECTS, 
  INITIAL_GALLERIES, 
  INITIAL_MESSAGES, 
  INITIAL_NOTIFICATIONS 
} from '../data/mockData';

export type MainTab = 'home' | 'projects' | 'galleries' | 'messages' | 'profile';
export type ScreenView = 
  | 'splash'
  | 'main'
  | 'notifications'
  | 'book_shoot'
  | 'project_detail'
  | 'gallery_detail';

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'info' | 'warning';
}

interface AppContextType {
  // Navigation
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
  currentScreen: ScreenView;
  setCurrentScreen: (screen: ScreenView) => void;
  selectedProjectId: string | null;
  selectedGalleryId: string | null;
  selectedPhoto: PhotoItem | null;
  isPhotoViewerOpen: boolean;
  deviceMode: 'framed' | 'fullscreen';
  setDeviceMode: (mode: 'framed' | 'fullscreen') => void;

  // Navigation handlers
  openProject: (projectId: string) => void;
  openGallery: (galleryId: string) => void;
  openPhotoViewer: (photo: PhotoItem, galleryId: string) => void;
  closePhotoViewer: () => void;
  openChatForProject: (projectId: string) => void;
  openBookingWizard: (initialCategory?: ServiceCategory) => void;
  bookingInitialCategory?: ServiceCategory;
  goBack: () => void;

  // Data & State
  clientProfile: ClientProfile;
  updateProfile: (profile: Partial<ClientProfile>) => void;
  projects: ProjectItem[];
  galleries: GalleryItem[];
  messages: Record<string, ChatMessage[]>;
  activeChatProjectId: string;
  setActiveChatProjectId: (id: string) => void;
  notifications: NotificationItem[];
  unreadNotificationCount: number;
  
  // Selection State
  selectedPhotoIds: string[];
  toggleSelectPhoto: (photoId: string) => void;
  selectAllInCurrentGallery: () => void;
  clearSelection: () => void;

  // Actions
  toggleFavoritePhoto: (galleryId: string, photoId: string) => void;
  updatePhotoApproval: (galleryId: string, photoId: string, status: PhotoApprovalStatus, revisionNote?: string) => void;
  batchApproveSelected: (galleryId: string) => void;
  submitBatchForApproval: (galleryId: string) => void;
  addPhotoComment: (galleryId: string, photoId: string, text: string) => void;
  downloadSelectedPhotos: () => void;
  downloadSinglePhoto: (photo: PhotoItem) => void;
  createProject: (projectData: Partial<ProjectItem>) => string;
  sendChatMessage: (projectId: string, text: string) => void;
  markAllNotificationsAsRead: () => void;
  markNotificationAsRead: (id: string) => void;

  // Toast
  toast: ToastState;
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation State
  const [activeTab, setActiveTab] = useState<MainTab>('home');
  const [currentScreen, setCurrentScreen] = useState<ScreenView>('splash');
  const [navigationHistory, setNavigationHistory] = useState<ScreenView[]>(['main']);
  
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>('proj-01');
  const [selectedGalleryId, setSelectedGalleryId] = useState<string | null>('gal-01');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [isPhotoViewerOpen, setIsPhotoViewerOpen] = useState(false);
  const [bookingInitialCategory, setBookingInitialCategory] = useState<ServiceCategory | undefined>(undefined);
  const [deviceMode, setDeviceMode] = useState<'framed' | 'fullscreen'>('framed');

  // Core Data
  const [clientProfile, setClientProfile] = useState<ClientProfile>(INITIAL_CLIENT_PROFILE);
  const [projects, setProjects] = useState<ProjectItem[]>(INITIAL_PROJECTS);
  const [galleries, setGalleries] = useState<GalleryItem[]>(INITIAL_GALLERIES);
  const [messages, setMessages] = useState<Record<string, ChatMessage[]>>(INITIAL_MESSAGES);
  const [activeChatProjectId, setActiveChatProjectId] = useState<string>('proj-01');
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [selectedPhotoIds, setSelectedPhotoIds] = useState<string[]>([]);

  // Toast
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: '',
    type: 'success'
  });

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3200);
  };

  // Splash Screen auto-dismiss
  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('main');
      }, 1900);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  // Navigate with history tracking
  const navigateTo = (screen: ScreenView) => {
    setNavigationHistory(prev => [...prev, screen]);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (isPhotoViewerOpen) {
      setIsPhotoViewerOpen(false);
      return;
    }
    if (currentScreen === 'book_shoot' || currentScreen === 'notifications' || currentScreen === 'project_detail' || currentScreen === 'gallery_detail') {
      setCurrentScreen('main');
    } else {
      setActiveTab('home');
    }
  };

  const openProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    navigateTo('project_detail');
  };

  const openGallery = (galleryId: string) => {
    setSelectedGalleryId(galleryId);
    clearSelection();
    navigateTo('gallery_detail');
  };

  const openPhotoViewer = (photo: PhotoItem, galleryId: string) => {
    setSelectedGalleryId(galleryId);
    setSelectedPhoto(photo);
    setIsPhotoViewerOpen(true);
  };

  const closePhotoViewer = () => {
    setIsPhotoViewerOpen(false);
  };

  const openChatForProject = (projectId: string) => {
    setActiveChatProjectId(projectId);
    setActiveTab('messages');
    setCurrentScreen('main');
  };

  const openBookingWizard = (initialCategory?: ServiceCategory) => {
    setBookingInitialCategory(initialCategory);
    navigateTo('book_shoot');
  };

  // Selection handlers
  const toggleSelectPhoto = (photoId: string) => {
    setSelectedPhotoIds(prev => 
      prev.includes(photoId) 
        ? prev.filter(id => id !== photoId) 
        : [...prev, photoId]
    );
  };

  const selectAllInCurrentGallery = () => {
    const currentGal = galleries.find(g => g.id === selectedGalleryId);
    if (!currentGal) return;
    const allIds = currentGal.photos.map(p => p.id);
    if (selectedPhotoIds.length === allIds.length) {
      setSelectedPhotoIds([]);
    } else {
      setSelectedPhotoIds(allIds);
    }
  };

  const clearSelection = () => {
    setSelectedPhotoIds([]);
  };

  // Gallery photo manipulation
  const toggleFavoritePhoto = (galleryId: string, photoId: string) => {
    setGalleries(prevGalleries => 
      prevGalleries.map(gal => {
        if (gal.id !== galleryId) return gal;
        return {
          ...gal,
          photos: gal.photos.map(p => {
            if (p.id === photoId) {
              const updated = !p.isFavorite;
              showToast(updated ? 'Saved to Favorites' : 'Removed from Favorites', 'info');
              return { ...p, isFavorite: updated };
            }
            return p;
          })
        };
      })
    );

    if (selectedPhoto && selectedPhoto.id === photoId) {
      setSelectedPhoto(prev => prev ? { ...prev, isFavorite: !prev.isFavorite } : null);
    }
  };

  const updatePhotoApproval = (
    galleryId: string, 
    photoId: string, 
    status: PhotoApprovalStatus, 
    revisionNote?: string
  ) => {
    setGalleries(prevGalleries => 
      prevGalleries.map(gal => {
        if (gal.id !== galleryId) return gal;
        return {
          ...gal,
          photos: gal.photos.map(p => {
            if (p.id === photoId) {
              const updatedComments = revisionNote ? [
                ...p.comments,
                {
                  id: `comm-${Date.now()}`,
                  author: clientProfile.name,
                  role: 'client' as const,
                  timestamp: 'Just now',
                  text: revisionNote,
                  type: 'revision' as const
                }
              ] : p.comments;

              return {
                ...p,
                status,
                revisionNotes: revisionNote || p.revisionNotes,
                comments: updatedComments
              };
            }
            return p;
          })
        };
      })
    );

    if (selectedPhoto && selectedPhoto.id === photoId) {
      setSelectedPhoto(prev => prev ? {
        ...prev,
        status,
        revisionNotes: revisionNote || prev.revisionNotes
      } : null);
    }

    if (status === 'Approved' || status === 'Final Approved') {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#c59b27', '#121212', '#ffffff']
      });
      showToast('Photograph approved & studio notified', 'success');
    } else if (status === 'Revision Requested') {
      showToast('Revision request sent to studio', 'warning');
    }
  };

  const batchApproveSelected = (galleryId: string) => {
    if (selectedPhotoIds.length === 0) return;

    setGalleries(prev => 
      prev.map(gal => {
        if (gal.id !== galleryId) return gal;
        return {
          ...gal,
          photos: gal.photos.map(p => {
            if (selectedPhotoIds.includes(p.id)) {
              return { ...p, status: 'Approved' };
            }
            return p;
          })
        };
      })
    );

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#c59b27', '#121212', '#ffffff']
    });

    showToast(`${selectedPhotoIds.length} photographs approved!`, 'success');
    clearSelection();
  };

  const submitBatchForApproval = (galleryId: string) => {
    if (selectedPhotoIds.length === 0) return;
    showToast(`Submitted ${selectedPhotoIds.length} photographs for approval`, 'success');
    batchApproveSelected(galleryId);
  };

  const addPhotoComment = (galleryId: string, photoId: string, text: string) => {
    const newComment = {
      id: `comm-${Date.now()}`,
      author: clientProfile.name,
      role: 'client' as const,
      timestamp: 'Just now',
      text
    };

    setGalleries(prev => 
      prev.map(gal => {
        if (gal.id !== galleryId) return gal;
        return {
          ...gal,
          photos: gal.photos.map(p => {
            if (p.id === photoId) {
              return {
                ...p,
                comments: [...p.comments, newComment]
              };
            }
            return p;
          })
        };
      })
    );

    if (selectedPhoto && selectedPhoto.id === photoId) {
      setSelectedPhoto(prev => prev ? {
        ...prev,
        comments: [...prev.comments, newComment]
      } : null);
    }

    showToast('Feedback submitted to studio', 'success');
  };

  const downloadSelectedPhotos = () => {
    if (selectedPhotoIds.length === 0) return;
    showToast(`Downloading ${selectedPhotoIds.length} high-resolution photograph(s)...`, 'info');
    setTimeout(() => {
      showToast('Download complete. TIFF archive saved to device.', 'success');
    }, 1500);
  };

  const downloadSinglePhoto = (photo: PhotoItem) => {
    showToast(`Downloading ${photo.filename} (100MP ProPhoto)...`, 'info');
    setTimeout(() => {
      showToast(`Saved ${photo.filename} to downloads`, 'success');
    }, 1200);
  };

  // Create Project
  const createProject = (projectData: Partial<ProjectItem>): string => {
    const newId = `proj-${Date.now().toString().slice(-4)}`;
    const newProject: ProjectItem = {
      id: newId,
      title: projectData.title || 'New Photography Request',
      clientCompany: clientProfile.company,
      category: projectData.category || 'Product Photography',
      thumbnail: projectData.thumbnail || '/photos/denim_apparel.png',
      status: 'Request Submitted',
      tabCategory: 'active',
      shootDate: projectData.shootDate || 'TBD (Under Review)',
      shootType: projectData.shootType || 'Studio',
      locationAddress: projectData.locationAddress || 'Nagle Photography Studio, Chicago, IL',
      description: projectData.description || 'Custom client photography commission.',
      estimatedPhotos: projectData.estimatedPhotos || 15,
      budgetQuote: 'Estimate pending review by Joe Nagle',
      createdDate: 'Today',
      timeline: [
        { step: 1, label: 'Request Submitted', description: 'Submitted via Nagle Client App', date: 'Today', completed: true, current: true },
        { step: 2, label: 'Project Confirmed', description: 'Studio feasibility & schedule review', completed: false, current: false },
        { step: 3, label: 'Photography Shoot', description: 'Live session capture', completed: false, current: false },
        { step: 4, label: 'Photos Uploaded', description: 'Private gallery proofing', completed: false, current: false },
        { step: 5, label: 'Client Review', description: 'Image selections & retouch requests', completed: false, current: false },
        { step: 6, label: 'Final Delivery', description: 'Master asset bundle hand-off', completed: false, current: false },
      ],
      requirements: projectData.requirements || ['Brand guidelines match', 'Professional studio strobe setup'],
      referenceImages: projectData.referenceImages || []
    };

    setProjects(prev => [newProject, ...prev]);

    // Also initialize empty message thread
    setMessages(prev => ({
      ...prev,
      [newId]: [
        {
          id: `msg-${Date.now()}`,
          projectId: newId,
          senderId: 'studio-joe',
          senderName: 'Joe Nagle',
          senderRole: 'Principal Photographer',
          senderAvatar: '/photos/central_camera_chicago.png',
          text: `Hi Marcus, thank you for submitting the "${newProject.title}" request! I am reviewing the project requirements and location logistics. I will follow up with our studio calendar options and quotation shortly.`,
          timestamp: 'Just now',
          isClient: false
        }
      ]
    }));

    // Add a notification
    const newNotif: NotificationItem = {
      id: `n-${Date.now()}`,
      title: 'Project Request Received',
      message: `Your booking request for "${newProject.title}" has been assigned to Joe Nagle.`,
      timestamp: 'Just now',
      dateGroup: 'Today',
      isRead: false,
      type: 'request_received',
      targetScreen: 'project_detail',
      targetId: newId
    };
    setNotifications(prev => [newNotif, ...prev]);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });

    showToast('Photography project requested successfully!', 'success');
    return newId;
  };

  const sendChatMessage = (projectId: string, text: string) => {
    if (!text.trim()) return;

    const newMessage: ChatMessage = {
      id: `m-${Date.now()}`,
      projectId,
      senderId: clientProfile.id,
      senderName: clientProfile.name,
      senderRole: clientProfile.title,
      senderAvatar: clientProfile.avatar,
      text: text.trim(),
      timestamp: 'Just now',
      isClient: true
    };

    setMessages(prev => ({
      ...prev,
      [projectId]: [...(prev[projectId] || []), newMessage]
    }));

    // Simulated studio reply after 2 seconds
    setTimeout(() => {
      const studioReply: ChatMessage = {
        id: `m-reply-${Date.now()}`,
        projectId,
        senderId: 'studio-joe',
        senderName: 'Joe Nagle',
        senderRole: 'Principal Photographer',
        senderAvatar: '/photos/central_camera_chicago.png',
        text: 'Received your message Marcus! We are on it and will keep you posted here.',
        timestamp: 'Just now',
        isClient: false
      };

      setMessages(prev => ({
        ...prev,
        [projectId]: [...(prev[projectId] || []), studioReply]
      }));
    }, 2200);
  };

  const updateProfile = (updated: Partial<ClientProfile>) => {
    setClientProfile(prev => ({ ...prev, ...updated }));
    showToast('Client profile updated', 'success');
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
    showToast('All notifications marked as read', 'info');
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const unreadNotificationCount = notifications.filter(n => !n.isRead).length;

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        currentScreen,
        setCurrentScreen,
        selectedProjectId,
        selectedGalleryId,
        selectedPhoto,
        isPhotoViewerOpen,
        deviceMode,
        setDeviceMode,
        openProject,
        openGallery,
        openPhotoViewer,
        closePhotoViewer,
        openChatForProject,
        openBookingWizard,
        bookingInitialCategory,
        goBack,
        clientProfile,
        updateProfile,
        projects,
        galleries,
        messages,
        activeChatProjectId,
        setActiveChatProjectId,
        notifications,
        unreadNotificationCount,
        selectedPhotoIds,
        toggleSelectPhoto,
        selectAllInCurrentGallery,
        clearSelection,
        toggleFavoritePhoto,
        updatePhotoApproval,
        batchApproveSelected,
        submitBatchForApproval,
        addPhotoComment,
        downloadSelectedPhotos,
        downloadSinglePhoto,
        createProject,
        sendChatMessage,
        markAllNotificationsAsRead,
        markNotificationAsRead,
        toast,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
