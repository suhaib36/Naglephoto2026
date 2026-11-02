export type ProjectStatus = 
  | 'Request Submitted'
  | 'Under Review'
  | 'Quote Pending'
  | 'Confirmed'
  | 'Shoot In Progress'
  | 'Photos Uploaded'
  | 'Client Review'
  | 'Revisions Underway'
  | 'Final Approved'
  | 'Delivered';

export type PhotoApprovalStatus = 
  | 'Awaiting Review'
  | 'Approved'
  | 'Revision Requested'
  | 'Revised'
  | 'Final Approved';

export type ServiceCategory = 
  | 'Product Photography'
  | 'Advertising Photography'
  | 'Lifestyle Photography'
  | 'Food Photography'
  | 'Corporate Photography'
  | 'People & Portrait'
  | 'Event Photography'
  | 'Other';

export interface PhotoComment {
  id: string;
  author: string;
  avatar?: string;
  role: 'client' | 'studio';
  timestamp: string;
  text: string;
  type?: 'general' | 'revision' | 'approval';
}

export interface PhotoItem {
  id: string;
  galleryId: string;
  title: string;
  filename: string;
  url: string;
  thumbnailUrl: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  status: PhotoApprovalStatus;
  isFavorite: boolean;
  isSelected?: boolean;
  metadata?: {
    camera?: string;
    lens?: string;
    aperture?: string;
    shutter?: string;
    iso?: string;
    resolution?: string;
    colorProfile?: string;
  };
  comments: PhotoComment[];
  revisionNotes?: string;
  retouchVersion?: number;
}

export interface GalleryItem {
  id: string;
  projectId: string;
  title: string;
  coverImage: string;
  category: ServiceCategory;
  uploadDate: string;
  photoCount: number;
  status: 'In Review' | 'All Approved' | 'Revisions Pending' | 'Delivered';
  photos: PhotoItem[];
  description?: string;
}

export interface ProjectTimelineStep {
  step: number;
  label: string;
  description: string;
  date?: string;
  completed: boolean;
  current: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  clientCompany: string;
  category: ServiceCategory;
  thumbnail: string;
  status: ProjectStatus;
  tabCategory: 'active' | 'upcoming' | 'completed';
  shootDate: string;
  shootTime?: string;
  shootType: 'Studio' | 'On Location';
  locationAddress: string;
  description: string;
  estimatedPhotos: number;
  budgetQuote?: string;
  createdDate: string;
  timeline: ProjectTimelineStep[];
  requirements: string[];
  referenceImages: string[];
  galleryId?: string;
}

export interface ChatMessage {
  id: string;
  projectId?: string;
  senderId: string;
  senderName: string;
  senderRole: string;
  senderAvatar: string;
  text: string;
  timestamp: string;
  isClient: boolean;
  attachment?: {
    type: 'image' | 'document';
    name: string;
    url?: string;
    size?: string;
  };
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  dateGroup: 'Today' | 'Yesterday' | 'Earlier';
  isRead: boolean;
  type: 
    | 'request_received'
    | 'quote_received'
    | 'booking_confirmed'
    | 'schedule_updated'
    | 'photos_uploaded'
    | 'feedback_received'
    | 'revision_completed'
    | 'photos_approved';
  targetScreen?: 'projects' | 'galleries' | 'messages' | 'project_detail';
  targetId?: string;
}

export interface ClientProfile {
  id: string;
  name: string;
  company: string;
  title: string;
  email: string;
  phone: string;
  avatar: string;
  city: string;
  notificationsEnabled: {
    galleryUploads: boolean;
    revisions: boolean;
    shootReminders: boolean;
    marketing: boolean;
  };
}
