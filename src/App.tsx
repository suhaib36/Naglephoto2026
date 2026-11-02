import React from 'react';
import { useApp } from './context/AppContext';
import { IPhoneFrame } from './components/IPhoneFrame';
import { BottomNav } from './components/BottomNav';
import { Toast } from './components/Toast';

import { SplashScreen } from './screens/SplashScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ProjectsScreen } from './screens/ProjectsScreen';
import { ProjectDetailScreen } from './screens/ProjectDetailScreen';
import { GalleriesScreen } from './screens/GalleriesScreen';
import { GalleryDetailScreen } from './screens/GalleryDetailScreen';
import { PhotoViewerModal } from './screens/PhotoViewerModal';
import { BookingWizardScreen } from './screens/BookingWizardScreen';
import { MessagesScreen } from './screens/MessagesScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { ProfileScreen } from './screens/ProfileScreen';

export const AppContent: React.FC = () => {
  const { currentScreen, activeTab } = useApp();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'book_shoot':
        return <BookingWizardScreen />;
      case 'notifications':
        return <NotificationsScreen />;
      case 'project_detail':
        return <ProjectDetailScreen />;
      case 'gallery_detail':
        return <GalleryDetailScreen />;
      case 'main':
      default:
        switch (activeTab) {
          case 'home':
            return <HomeScreen />;
          case 'projects':
            return <ProjectsScreen />;
          case 'galleries':
            return <GalleriesScreen />;
          case 'messages':
            return <MessagesScreen />;
          case 'profile':
            return <ProfileScreen />;
          default:
            return <HomeScreen />;
        }
    }
  };

  return (
    <IPhoneFrame>
      <Toast />
      {renderScreen()}
      {currentScreen === 'main' && <BottomNav />}
      <PhotoViewerModal />
    </IPhoneFrame>
  );
};

export const App: React.FC = () => {
  return <AppContent />;
};

export default App;
