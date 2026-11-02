import { 
  ProjectItem, 
  GalleryItem, 
  ChatMessage, 
  NotificationItem, 
  ClientProfile,
  ServiceCategory
} from '../types';

export const PHOTO_ASSETS = {
  mandolin: '/photos/mandolin_studio.png',
  restaurant: '/photos/restaurant_event.png',
  garden: '/photos/garden_lifestyle.png',
  denim: '/photos/denim_apparel.png',
  centralCamera: '/photos/central_camera_chicago.png',
};

export const INITIAL_CLIENT_PROFILE: ClientProfile = {
  id: 'client-01',
  name: 'Marcus Vance',
  company: 'Vance & Co. Luxury Goods',
  title: 'Creative Director',
  email: 'm.vance@vanceatelier.com',
  phone: '+1 (312) 555-0194',
  avatar: '/photos/central_camera_chicago.png',
  city: 'Chicago, IL',
  notificationsEnabled: {
    galleryUploads: true,
    revisions: true,
    shootReminders: true,
    marketing: false,
  }
};

export const SERVICE_CATEGORIES: {
  id: ServiceCategory;
  name: string;
  tagline: string;
  image: string;
  typicalDelivery: string;
}[] = [
  {
    id: 'Product Photography',
    name: 'Product Photography',
    tagline: 'Textural apparel, craftsmanship macro, and commercial studio silos.',
    image: PHOTO_ASSETS.denim,
    typicalDelivery: '3–5 business days'
  },
  {
    id: 'Advertising Photography',
    name: 'Advertising Photography',
    tagline: 'High-impact commercial campaigns & Chicago architectural heritage.',
    image: PHOTO_ASSETS.centralCamera,
    typicalDelivery: '5–7 business days'
  },
  {
    id: 'Lifestyle Photography',
    name: 'Lifestyle Photography',
    tagline: 'Authentic narrative moments, consumer product staging & garden scenes.',
    image: PHOTO_ASSETS.garden,
    typicalDelivery: '4–6 business days'
  },
  {
    id: 'Food Photography',
    name: 'Food & Beverage',
    tagline: 'Wine collections, dining hospitality & culinary ambiance.',
    image: PHOTO_ASSETS.restaurant,
    typicalDelivery: '3–5 business days'
  },
  {
    id: 'Corporate Photography',
    name: 'Corporate & PR',
    tagline: 'Urban architectural storytelling & brand presence in the city.',
    image: PHOTO_ASSETS.centralCamera,
    typicalDelivery: '2–4 business days'
  },
  {
    id: 'People & Portrait',
    name: 'People & Portraits',
    tagline: 'Editorial portraits, artisans in action & environmental lifestyle.',
    image: PHOTO_ASSETS.garden,
    typicalDelivery: '2–3 business days'
  },
  {
    id: 'Event Photography',
    name: 'Event Photography',
    tagline: 'Gala receptions, wine tastings & luxury restaurant activations.',
    image: PHOTO_ASSETS.restaurant,
    typicalDelivery: '48 hours expedited'
  },
  {
    id: 'Other',
    name: 'Bespoke Craft Commissions',
    tagline: 'Musical instruments, fine craftsmanship & sculptural lighting.',
    image: PHOTO_ASSETS.mandolin,
    typicalDelivery: 'Custom schedule'
  }
];

export const INITIAL_GALLERIES: GalleryItem[] = [
  {
    id: 'gal-01',
    projectId: 'proj-01',
    title: 'Commercial Denim & Apparel Catalog',
    coverImage: PHOTO_ASSETS.denim,
    category: 'Product Photography',
    uploadDate: 'Nov 1, 2026',
    photoCount: 4,
    status: 'In Review',
    description: 'Detailed textile photography highlighting folded denim weave, copper rivets, contrast stitching, and custom leather waistband embossing under studio lighting.',
    photos: [
      {
        id: 'p-101',
        galleryId: 'gal-01',
        title: 'Selvage Denim Fold & Texture Detail',
        filename: 'NAGLE_DENIM_STUDIO_001.ARW',
        url: PHOTO_ASSETS.denim,
        thumbnailUrl: PHOTO_ASSETS.denim,
        aspectRatio: 'square',
        status: 'Awaiting Review',
        isFavorite: true,
        metadata: {
          camera: 'Hasselblad H6D-100c',
          lens: 'HC 2,2/100mm Macro',
          aperture: 'f/11',
          shutter: '1/200s',
          iso: '64',
          resolution: '11600 × 8700 px (100MP)',
          colorProfile: 'ProPhoto RGB 16-bit'
        },
        comments: [
          {
            id: 'c-1',
            author: 'Joe Nagle',
            role: 'studio',
            timestamp: 'Nov 1, 2:15 PM',
            text: 'Feathered 3x4 softbox raking across the denim weave to emphasize twill diagonal ridges and copper rivet sheen. Ready for review.'
          }
        ]
      },
      {
        id: 'p-102',
        galleryId: 'gal-01',
        title: 'Leather Waistband Patch & Stitching',
        filename: 'NAGLE_DENIM_STUDIO_002.ARW',
        url: PHOTO_ASSETS.denim,
        thumbnailUrl: PHOTO_ASSETS.denim,
        aspectRatio: 'square',
        status: 'Approved',
        isFavorite: true,
        metadata: {
          camera: 'Sony α7R V',
          lens: 'FE 90mm f/2.8 Macro G OSS',
          aperture: 'f/13',
          shutter: '1/250s',
          iso: '100',
          resolution: '9504 × 6336 px',
          colorProfile: 'Display P3'
        },
        comments: [
          {
            id: 'c-2',
            author: 'Marcus Vance',
            role: 'client',
            timestamp: 'Nov 1, 4:30 PM',
            text: 'The thread contrast and genuine leather texture look incredible. Approved for catalog hero placement!'
          }
        ]
      },
      {
        id: 'p-103',
        galleryId: 'gal-01',
        title: 'Indigo Wash Contrast Study',
        filename: 'NAGLE_DENIM_STUDIO_003.ARW',
        url: PHOTO_ASSETS.denim,
        thumbnailUrl: PHOTO_ASSETS.denim,
        aspectRatio: 'square',
        status: 'Revision Requested',
        isFavorite: false,
        revisionNotes: 'Please slightly soften the shadow under the waistband fold and maintain true indigo dye tone.',
        metadata: {
          camera: 'Hasselblad H6D-100c',
          lens: 'HC 3,5/50mm II',
          aperture: 'f/9.0',
          shutter: '1/160s',
          iso: '100',
          resolution: '11600 × 8700 px',
          colorProfile: 'ProPhoto RGB 16-bit'
        },
        comments: [
          {
            id: 'c-3',
            author: 'Marcus Vance',
            role: 'client',
            timestamp: 'Nov 1, 5:10 PM',
            text: 'Can we warm the indigo tone slightly to match the physical fabric swatch in room light?'
          },
          {
            id: 'c-4',
            author: 'Elena (Lead Retoucher)',
            role: 'studio',
            timestamp: 'Nov 1, 5:45 PM',
            text: 'Adjusting color curve against your provided PANTONE 19-4024 TCX reference now.'
          }
        ]
      },
      {
        id: 'p-104',
        galleryId: 'gal-01',
        title: 'Dual Fold Composition Overhead',
        filename: 'NAGLE_DENIM_STUDIO_004.ARW',
        url: PHOTO_ASSETS.denim,
        thumbnailUrl: PHOTO_ASSETS.denim,
        aspectRatio: 'square',
        status: 'Awaiting Review',
        isFavorite: false,
        metadata: {
          camera: 'Sony α7R V',
          lens: 'FE 50mm f/1.2 GM',
          aperture: 'f/8.0',
          shutter: '1/320s',
          iso: '80',
          resolution: '9504 × 6336 px',
          colorProfile: 'ProPhoto RGB 16-bit'
        },
        comments: []
      }
    ]
  },
  {
    id: 'gal-02',
    projectId: 'proj-02',
    title: 'Outdoor Garden & Lawn Care Lifestyle',
    coverImage: PHOTO_ASSETS.garden,
    category: 'Lifestyle Photography',
    uploadDate: 'Oct 28, 2026',
    photoCount: 3,
    status: 'In Review',
    description: 'Contextual on-location shoot showcasing lawn & garden utility cart, gardening accessories, vibrant floral landscaping, and consumer interaction.',
    photos: [
      {
        id: 'p-201',
        galleryId: 'gal-02',
        title: 'Gardener Tending Red Petunias with Utility Cart',
        filename: 'NAGLE_GARDEN_LIFE_001.ARW',
        url: PHOTO_ASSETS.garden,
        thumbnailUrl: PHOTO_ASSETS.garden,
        aspectRatio: 'landscape',
        status: 'Approved',
        isFavorite: true,
        metadata: {
          camera: 'Sony α1',
          lens: 'FE 50mm f/1.2 GM',
          aperture: 'f/4.0',
          shutter: '1/800s',
          iso: '100',
          resolution: '8640 × 5760 px',
          colorProfile: 'Display P3'
        },
        comments: [
          {
            id: 'c-201',
            author: 'Joe Nagle',
            role: 'studio',
            timestamp: 'Oct 28, 11:15 AM',
            text: 'Natural midday diffused sunlight highlights the red blossoms and product storage capacity on the black utility cart.'
          }
        ]
      },
      {
        id: 'p-202',
        galleryId: 'gal-02',
        title: 'Lawn Cart Storage & Accessories Detail',
        filename: 'NAGLE_GARDEN_LIFE_002.ARW',
        url: PHOTO_ASSETS.garden,
        thumbnailUrl: PHOTO_ASSETS.garden,
        aspectRatio: 'landscape',
        status: 'Awaiting Review',
        isFavorite: false,
        metadata: {
          camera: 'Sony α1',
          lens: 'FE 85mm f/1.4 GM II',
          aperture: 'f/3.5',
          shutter: '1/1000s',
          iso: '125',
          resolution: '8640 × 5760 px',
          colorProfile: 'Display P3'
        },
        comments: []
      },
      {
        id: 'p-203',
        galleryId: 'gal-02',
        title: 'Full Backyard Contextual Staging',
        filename: 'NAGLE_GARDEN_LIFE_003.ARW',
        url: PHOTO_ASSETS.garden,
        thumbnailUrl: PHOTO_ASSETS.garden,
        aspectRatio: 'landscape',
        status: 'Approved',
        isFavorite: true,
        metadata: {
          camera: 'Canon EOS 5D Mark IV',
          lens: 'EF 35mm f/1.4L II USM',
          aperture: 'f/5.6',
          shutter: '1/500s',
          iso: '160',
          resolution: '6720 × 4480 px',
          colorProfile: 'sRGB'
        },
        comments: []
      }
    ]
  },
  {
    id: 'gal-03',
    projectId: 'proj-03',
    title: 'Chicago Architectural Heritage — Central Camera Co.',
    coverImage: PHOTO_ASSETS.centralCamera,
    category: 'Advertising Photography',
    uploadDate: 'Oct 25, 2026',
    photoCount: 3,
    status: 'In Review',
    description: 'Iconic streetscape portrait of Central Camera Co. (Since 1899) on Wabash Avenue, Chicago, featuring historic marquee, street frontage, and Joe Nagle studio signature.',
    photos: [
      {
        id: 'p-301',
        galleryId: 'gal-03',
        title: 'Central Camera Co. Storefront Heritage (Nagle Signature)',
        filename: 'NAGLE_CENTRAL_CAMERA_001.ARW',
        url: PHOTO_ASSETS.centralCamera,
        thumbnailUrl: PHOTO_ASSETS.centralCamera,
        aspectRatio: 'portrait',
        status: 'Approved',
        isFavorite: true,
        metadata: {
          camera: 'Nikon D850',
          lens: 'Nikkor 24-70mm f/2.8E ED VR',
          aperture: 'f/4.5',
          shutter: '1/320s',
          iso: '100',
          resolution: '8256 × 5504 px',
          colorProfile: 'Adobe RGB'
        },
        comments: [
          {
            id: 'c-301',
            author: 'Joe Nagle',
            role: 'studio',
            timestamp: 'Oct 25, 3:30 PM',
            text: 'Chicago architectural staple on Wabash Ave. Authentic Nagle studio watermark embedded on proof.'
          }
        ]
      },
      {
        id: 'p-302',
        galleryId: 'gal-03',
        title: 'Vintage Neon Marquee Detail Study',
        filename: 'NAGLE_CENTRAL_CAMERA_002.ARW',
        url: PHOTO_ASSETS.centralCamera,
        thumbnailUrl: PHOTO_ASSETS.centralCamera,
        aspectRatio: 'portrait',
        status: 'Awaiting Review',
        isFavorite: true,
        metadata: {
          camera: 'Nikon D850',
          lens: 'Nikkor 70-200mm f/2.8E FL ED',
          aperture: 'f/4.0',
          shutter: '1/400s',
          iso: '100',
          resolution: '8256 × 5504 px',
          colorProfile: 'Adobe RGB'
        },
        comments: []
      },
      {
        id: 'p-303',
        galleryId: 'gal-03',
        title: 'Street Level Urban Perspective',
        filename: 'NAGLE_CENTRAL_CAMERA_003.ARW',
        url: PHOTO_ASSETS.centralCamera,
        thumbnailUrl: PHOTO_ASSETS.centralCamera,
        aspectRatio: 'portrait',
        status: 'Approved',
        isFavorite: false,
        metadata: {
          camera: 'Nikon D850',
          lens: 'Nikkor 35mm f/1.4G',
          aperture: 'f/5.6',
          shutter: '1/250s',
          iso: '100',
          resolution: '8256 × 5504 px',
          colorProfile: 'Adobe RGB'
        },
        comments: []
      }
    ]
  },
  {
    id: 'gal-04',
    projectId: 'proj-04',
    title: 'Handcrafted Archtop Mandolin Studio Shoot',
    coverImage: PHOTO_ASSETS.mandolin,
    category: 'Product Photography',
    uploadDate: 'Oct 14, 2026',
    photoCount: 3,
    status: 'All Approved',
    description: 'Fine instrument studio photography with dramatic blue specular lighting, sculpted maple sides, carved f-hole, and sunburst lacquer reflection.',
    photos: [
      {
        id: 'p-401',
        galleryId: 'gal-04',
        title: 'Sunburst Archtop Mandolin & Blue Key Light',
        filename: 'NAGLE_MANDOLIN_STUDIO_001.ARW',
        url: PHOTO_ASSETS.mandolin,
        thumbnailUrl: PHOTO_ASSETS.mandolin,
        aspectRatio: 'portrait',
        status: 'Final Approved',
        isFavorite: true,
        metadata: {
          camera: 'Hasselblad H6D-100c',
          lens: 'HC 2,2/100mm',
          aperture: 'f/11',
          shutter: '1/125s',
          iso: '64',
          resolution: '11600 × 8700 px (100MP)',
          colorProfile: 'ProPhoto RGB 16-bit'
        },
        comments: [
          {
            id: 'c-401',
            author: 'Marcus Vance',
            role: 'client',
            timestamp: 'Oct 15, 10:00 AM',
            text: 'The blue edge lighting gradient against the amber wood finish is an absolute masterpiece.'
          }
        ]
      },
      {
        id: 'p-402',
        galleryId: 'gal-04',
        title: 'Engraved Tailpiece & Volume Knob Detail',
        filename: 'NAGLE_MANDOLIN_STUDIO_002.ARW',
        url: PHOTO_ASSETS.mandolin,
        thumbnailUrl: PHOTO_ASSETS.mandolin,
        aspectRatio: 'portrait',
        status: 'Final Approved',
        isFavorite: true,
        metadata: {
          camera: 'Sony α7R V',
          lens: 'FE 90mm f/2.8 Macro',
          aperture: 'f/14',
          shutter: '1/160s',
          iso: '80',
          resolution: '9504 × 6336 px',
          colorProfile: 'Display P3'
        },
        comments: []
      },
      {
        id: 'p-403',
        galleryId: 'gal-04',
        title: 'Carved F-Hole Specular Gradient',
        filename: 'NAGLE_MANDOLIN_STUDIO_003.ARW',
        url: PHOTO_ASSETS.mandolin,
        thumbnailUrl: PHOTO_ASSETS.mandolin,
        aspectRatio: 'portrait',
        status: 'Final Approved',
        isFavorite: false,
        metadata: {
          camera: 'Hasselblad H6D-100c',
          lens: 'HC 2,2/100mm',
          aperture: 'f/9.0',
          shutter: '1/200s',
          iso: '64',
          resolution: '11600 × 8700 px',
          colorProfile: 'ProPhoto RGB'
        },
        comments: []
      }
    ]
  },
  {
    id: 'gal-05',
    projectId: 'proj-05',
    title: 'Private Reserve Wine Bar & Evening Hospitality',
    coverImage: PHOTO_ASSETS.restaurant,
    category: 'Food Photography',
    uploadDate: 'Oct 02, 2026',
    photoCount: 3,
    status: 'All Approved',
    description: 'Dynamic event and fine dining ambiance capture showcasing champagne ice buckets, curated wine bottles, and motion-blurred server service.',
    photos: [
      {
        id: 'p-501',
        galleryId: 'gal-05',
        title: 'Sommelier Wine Station & Chilled Bottles',
        filename: 'NAGLE_HOSPITALITY_001.ARW',
        url: PHOTO_ASSETS.restaurant,
        thumbnailUrl: PHOTO_ASSETS.restaurant,
        aspectRatio: 'landscape',
        status: 'Final Approved',
        isFavorite: true,
        metadata: {
          camera: 'Sony α1',
          lens: 'FE 35mm f/1.4 GM',
          aperture: 'f/2.8',
          shutter: '1/15s (Intentional Motion Blur)',
          iso: '800',
          resolution: '8640 × 5760 px',
          colorProfile: 'Display P3'
        },
        comments: [
          {
            id: 'c-501',
            author: 'Joe Nagle',
            role: 'studio',
            timestamp: 'Oct 03, 11:20 AM',
            text: 'Slow shutter speed captures kinetic motion of the service team while holding the wine display in crisp focus.'
          }
        ]
      },
      {
        id: 'p-502',
        galleryId: 'gal-05',
        title: 'Stainless Ice Buckets & Champagne Presentation',
        filename: 'NAGLE_HOSPITALITY_002.ARW',
        url: PHOTO_ASSETS.restaurant,
        thumbnailUrl: PHOTO_ASSETS.restaurant,
        aspectRatio: 'landscape',
        status: 'Final Approved',
        isFavorite: true,
        metadata: {
          camera: 'Sony α1',
          lens: 'FE 50mm f/1.2 GM',
          aperture: 'f/2.0',
          shutter: '1/60s',
          iso: '640',
          resolution: '8640 × 5760 px',
          colorProfile: 'Display P3'
        },
        comments: []
      },
      {
        id: 'p-503',
        galleryId: 'gal-05',
        title: 'Evening Dining Room Lounge Atmosphere',
        filename: 'NAGLE_HOSPITALITY_003.ARW',
        url: PHOTO_ASSETS.restaurant,
        thumbnailUrl: PHOTO_ASSETS.restaurant,
        aspectRatio: 'landscape',
        status: 'Final Approved',
        isFavorite: false,
        metadata: {
          camera: 'Sony α1',
          lens: 'FE 24-70mm f/2.8 GM II',
          aperture: 'f/2.8',
          shutter: '1/50s',
          iso: '1200',
          resolution: '8640 × 5760 px',
          colorProfile: 'Display P3'
        },
        comments: []
      }
    ]
  }
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'Commercial Denim & Apparel Catalog',
    clientCompany: 'Vance & Co. Luxury Goods',
    category: 'Product Photography',
    thumbnail: PHOTO_ASSETS.denim,
    status: 'Client Review',
    tabCategory: 'active',
    shootDate: 'Oct 29, 2026',
    shootTime: '9:00 AM – 3:30 PM CST',
    shootType: 'Studio',
    locationAddress: 'Nagle Photography Studio, 1420 W Fulton Market, Chicago, IL 60607',
    description: 'Detailed textile photography highlighting folded denim weave, copper rivets, contrast stitching, and custom leather waistband embossing under studio lighting.',
    estimatedPhotos: 16,
    budgetQuote: '$4,250.00 USD (Includes Studio, Fabric Styling & Retouching)',
    createdDate: 'Oct 18, 2026',
    galleryId: 'gal-01',
    timeline: [
      { step: 1, label: 'Request Submitted', description: 'Apparel brief and sample garments received.', date: 'Oct 18', completed: true, current: false },
      { step: 2, label: 'Project Confirmed', description: 'Studio hold locked & lighting test completed.', date: 'Oct 20', completed: true, current: false },
      { step: 3, label: 'Photography Shoot', description: 'Studio textile lighting day wrapped.', date: 'Oct 29', completed: true, current: false },
      { step: 4, label: 'Photos Uploaded', description: 'Proof gallery uploaded for client review.', date: 'Nov 1', completed: true, current: false },
      { step: 5, label: 'Client Review', description: 'Color calibration & stitch detail inspection.', date: 'In Progress', completed: false, current: true },
      { step: 6, label: 'Final Delivery', description: 'Ultra-res TIFF catalog exports packaging.', completed: false, current: false },
    ],
    requirements: [
      'High-resolution 100MP captures showing textile thread weave depth.',
      'Raking sidelight to emphasize diagonal twill ridges.',
      'Accurate Pantone fabric color reproduction for digital catalog.',
      'Clipping masks for e-commerce catalog layout.'
    ],
    referenceImages: [
      PHOTO_ASSETS.denim,
      PHOTO_ASSETS.mandolin
    ]
  },
  {
    id: 'proj-02',
    title: 'Outdoor Garden & Lawn Care Lifestyle',
    clientCompany: 'Vance Living & Home',
    category: 'Lifestyle Photography',
    thumbnail: PHOTO_ASSETS.garden,
    status: 'Photos Uploaded',
    tabCategory: 'active',
    shootDate: 'Oct 24, 2026',
    shootTime: '8:00 AM – 1:30 PM CST',
    shootType: 'On Location',
    locationAddress: 'Lincoln Park Residential Garden, Chicago, IL 60614',
    description: 'Contextual on-location lifestyle shoot showcasing consumer multi-tier utility garden carts in active use with lawn care tools and vibrant red petunias.',
    estimatedPhotos: 12,
    budgetQuote: '$3,800.00 USD (Includes Location Permit & On-Set Stylist)',
    createdDate: 'Oct 12, 2026',
    galleryId: 'gal-02',
    timeline: [
      { step: 1, label: 'Request Submitted', description: 'Lawn care product launch brief.', date: 'Oct 12', completed: true, current: false },
      { step: 2, label: 'Project Confirmed', description: 'Residential garden location secured.', date: 'Oct 16', completed: true, current: false },
      { step: 3, label: 'Photography Shoot', description: 'Morning daylight production wrapped.', date: 'Oct 24', completed: true, current: false },
      { step: 4, label: 'Photos Uploaded', description: 'Proofs uploaded to private gallery.', date: 'Oct 28', completed: true, current: true },
      { step: 5, label: 'Client Review', description: 'Awaiting client image selection.', completed: false, current: false },
      { step: 6, label: 'Final Delivery', description: 'High-res master files release.', completed: false, current: false },
    ],
    requirements: [
      'Natural outdoor morning sunlight with clean highlight fill.',
      'Demonstrate capacity and utility of the cart with real gardening tools.',
      'Rich contrast with natural greenery and vibrant red petunias.'
    ],
    referenceImages: [
      PHOTO_ASSETS.garden,
      PHOTO_ASSETS.centralCamera
    ]
  },
  {
    id: 'proj-03',
    title: 'Chicago Architectural Heritage — Central Camera Co.',
    clientCompany: 'Vance Heritage Foundation',
    category: 'Advertising Photography',
    thumbnail: PHOTO_ASSETS.centralCamera,
    status: 'Confirmed',
    tabCategory: 'upcoming',
    shootDate: 'Nov 18, 2026',
    shootTime: '10:00 AM – 4:00 PM CST',
    shootType: 'On Location',
    locationAddress: '230 S Wabash Ave, Chicago, IL 60604',
    description: 'Iconic streetscape portrait of Central Camera Co. (Since 1899) on Wabash Avenue, Chicago, featuring historic marquee, street frontage, and Joe Nagle studio signature.',
    estimatedPhotos: 20,
    budgetQuote: '$5,200.00 USD (Location Production & Archival Prints)',
    createdDate: 'Oct 25, 2026',
    galleryId: 'gal-03',
    timeline: [
      { step: 1, label: 'Request Submitted', description: 'Chicago landmark series proposal.', date: 'Oct 25', completed: true, current: false },
      { step: 2, label: 'Project Confirmed', description: 'Street permit and scheduling confirmed.', date: 'Oct 30', completed: true, current: true },
      { step: 3, label: 'Photography Shoot', description: 'Scheduled for Nov 18, 2026.', date: 'Upcoming', completed: false, current: false },
      { step: 4, label: 'Photos Uploaded', description: 'Same-day proof delivery.', completed: false, current: false },
      { step: 5, label: 'Client Review', description: 'Archival print selections.', completed: false, current: false },
      { step: 6, label: 'Final Delivery', description: 'Master gallery delivery.', completed: false, current: false },
    ],
    requirements: [
      'Capture historic neon signage with architectural tilt-shift perspective.',
      'Preserve authentic Chicago urban street character and textures.',
      'Master print files formatted for large-scale exhibition displays.'
    ],
    referenceImages: [
      PHOTO_ASSETS.centralCamera
    ]
  },
  {
    id: 'proj-04',
    title: 'Handcrafted Archtop Mandolin Studio Shoot',
    clientCompany: 'Vance Artisan Instrument Guild',
    category: 'Product Photography',
    thumbnail: PHOTO_ASSETS.mandolin,
    status: 'Final Approved',
    tabCategory: 'completed',
    shootDate: 'Oct 10, 2026',
    shootTime: '1:00 PM – 5:30 PM CST',
    shootType: 'Studio',
    locationAddress: 'Nagle Photography Studio, 1420 W Fulton Market, Chicago, IL 60607',
    description: 'Fine instrument studio photography with dramatic blue specular lighting, sculpted maple sides, carved f-hole, and sunburst lacquer reflection.',
    estimatedPhotos: 10,
    budgetQuote: '$3,400.00 USD (Completed & Paid)',
    createdDate: 'Sep 28, 2026',
    galleryId: 'gal-04',
    timeline: [
      { step: 1, label: 'Request Submitted', description: 'Luthier showcase specifications.', date: 'Sep 28', completed: true, current: false },
      { step: 2, label: 'Project Confirmed', description: 'Custom blue gel lighting rig set.', date: 'Oct 02', completed: true, current: false },
      { step: 3, label: 'Photography Shoot', description: 'High-end macro & rim light shoot wrapped.', date: 'Oct 10', completed: true, current: false },
      { step: 4, label: 'Photos Uploaded', description: 'Proofs reviewed.', date: 'Oct 14', completed: true, current: false },
      { step: 5, label: 'Client Review', description: 'All selects approved.', date: 'Oct 15', completed: true, current: false },
      { step: 6, label: 'Final Delivery', description: 'Delivered in 100MP ProPhoto format.', date: 'Oct 16', completed: true, current: false },
    ],
    requirements: [
      'Precise specular highlight roll-off across the curved archtop soundboard.',
      'Deep sapphire blue gradient background separating instrument body.',
      'Macro capture of engraved nickel tailpiece.'
    ],
    referenceImages: [
      PHOTO_ASSETS.mandolin
    ]
  },
  {
    id: 'proj-05',
    title: 'Private Reserve Wine Bar & Evening Hospitality',
    clientCompany: 'Vance Hospitality Group',
    category: 'Food Photography',
    thumbnail: PHOTO_ASSETS.restaurant,
    status: 'Final Approved',
    tabCategory: 'completed',
    shootDate: 'Sep 25, 2026',
    shootTime: '6:00 PM – 10:00 PM CST',
    shootType: 'On Location',
    locationAddress: 'Reserve Lounge, 110 N Wacker Dr, Chicago, IL 60606',
    description: 'Dynamic event and fine dining ambiance capture showcasing champagne ice buckets, curated wine bottles, and motion-blurred server service.',
    estimatedPhotos: 14,
    budgetQuote: '$3,100.00 USD (Completed & Paid)',
    createdDate: 'Sep 10, 2026',
    galleryId: 'gal-05',
    timeline: [
      { step: 1, label: 'Request Submitted', description: 'Evening hospitality brief.', date: 'Sep 10', completed: true, current: false },
      { step: 2, label: 'Project Confirmed', description: 'Service hours access arranged.', date: 'Sep 15', completed: true, current: false },
      { step: 3, label: 'Photography Shoot', description: 'Live dinner service shoot wrapped.', date: 'Sep 25', completed: true, current: false },
      { step: 4, label: 'Photos Uploaded', description: 'Proofs ready.', date: 'Oct 02', completed: true, current: false },
      { step: 5, label: 'Client Review', description: 'Hero selections approved.', date: 'Oct 04', completed: true, current: false },
      { step: 6, label: 'Final Delivery', description: 'Web and editorial archives delivered.', date: 'Oct 06', completed: true, current: false },
    ],
    requirements: [
      'Kinetic motion blur conveying the energy of professional dining service.',
      'Crisp bottle labeling on champagne and vintage wine collection.',
      'Warm ambient lighting capturing modern private dining room aesthetic.'
    ],
    referenceImages: [
      PHOTO_ASSETS.restaurant
    ]
  }
];

export const INITIAL_MESSAGES: Record<string, ChatMessage[]> = {
  'proj-01': [
    {
      id: 'm-1',
      projectId: 'proj-01',
      senderId: 'studio-joe',
      senderName: 'Joe Nagle',
      senderRole: 'Principal Photographer',
      senderAvatar: '/photos/central_camera_chicago.png',
      text: 'Good morning Marcus! We wrapped the studio session yesterday. The raking lighting on the selvage denim texture came out exceptionally sharp.',
      timestamp: 'Nov 1, 9:30 AM',
      isClient: false,
    },
    {
      id: 'm-2',
      projectId: 'proj-01',
      senderId: 'client-marcus',
      senderName: 'Marcus Vance',
      senderRole: 'Creative Director',
      senderAvatar: '/photos/central_camera_chicago.png',
      text: 'Fantastic Joe! Did you get a chance to capture the copper rivet detailing and waistband patch as we specified in the brief?',
      timestamp: 'Nov 1, 10:15 AM',
      isClient: true,
    },
    {
      id: 'm-3',
      projectId: 'proj-01',
      senderId: 'studio-joe',
      senderName: 'Joe Nagle',
      senderRole: 'Principal Photographer',
      senderAvatar: '/photos/central_camera_chicago.png',
      text: 'Yes! We used the 100mm Macro with fine directional fill. The proofs are now live in your private gallery under Commercial Denim & Apparel Catalog.',
      timestamp: 'Nov 1, 11:00 AM',
      isClient: false,
      attachment: {
        type: 'image',
        name: 'NAGLE_DENIM_STUDIO_001.ARW',
        url: PHOTO_ASSETS.denim,
        size: '18.4 MB'
      }
    },
    {
      id: 'm-4',
      projectId: 'proj-01',
      senderId: 'client-marcus',
      senderName: 'Marcus Vance',
      senderRole: 'Creative Director',
      senderAvatar: '/photos/central_camera_chicago.png',
      text: 'Incredible work! I just reviewed the gallery and submitted feedback on the indigo curve. Once that’s finalized we are ready to approve the master set.',
      timestamp: 'Nov 1, 5:15 PM',
      isClient: true,
    },
    {
      id: 'm-5',
      projectId: 'proj-01',
      senderId: 'studio-elena',
      senderName: 'Elena Rostova',
      senderRole: 'Lead Retoucher',
      senderAvatar: '/photos/mandolin_studio.png',
      text: 'Hi Marcus, I received your note on photo #003 regarding the PANTONE fabric calibration. I am finalizing the revised proof right now.',
      timestamp: 'Nov 1, 5:48 PM',
      isClient: false,
    }
  ],
  'proj-02': [
    {
      id: 'm-201',
      projectId: 'proj-02',
      senderId: 'studio-joe',
      senderName: 'Joe Nagle',
      senderRole: 'Principal Photographer',
      senderAvatar: '/photos/central_camera_chicago.png',
      text: 'Marcus, proofs from our residential garden shoot are uploaded. The natural morning light really showcased the utility cart and the red petunias beautifully.',
      timestamp: 'Oct 28, 2:00 PM',
      isClient: false,
    },
    {
      id: 'm-202',
      projectId: 'proj-02',
      senderId: 'client-marcus',
      senderName: 'Marcus Vance',
      senderRole: 'Creative Director',
      senderAvatar: '/photos/central_camera_chicago.png',
      text: 'Reviewing them now. The composition on shot #001 is exactly what we needed for the home catalog.',
      timestamp: 'Oct 28, 3:20 PM',
      isClient: true,
    }
  ],
  'proj-03': [
    {
      id: 'm-301',
      projectId: 'proj-03',
      senderId: 'studio-joe',
      senderName: 'Joe Nagle',
      senderRole: 'Principal Photographer',
      senderAvatar: '/photos/central_camera_chicago.png',
      text: 'We have finalized our schedule for Central Camera Co. on Wabash Ave for Nov 18. Looking forward to capturing the architectural marquee series.',
      timestamp: 'Oct 30, 11:45 AM',
      isClient: false,
    }
  ]
};

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'n-1',
    title: 'New Retouched Proof Ready',
    message: 'Elena updated photo NAGLE_DENIM_STUDIO_003 with requested indigo tone balance.',
    timestamp: '15 mins ago',
    dateGroup: 'Today',
    isRead: false,
    type: 'revision_completed',
    targetScreen: 'galleries',
    targetId: 'gal-01'
  },
  {
    id: 'n-2',
    title: 'New Gallery Proofs Uploaded',
    message: 'High-resolution proofs for Commercial Denim & Apparel Catalog have been published.',
    timestamp: '2 hours ago',
    dateGroup: 'Today',
    isRead: false,
    type: 'photos_uploaded',
    targetScreen: 'galleries',
    targetId: 'gal-01'
  },
  {
    id: 'n-3',
    title: 'Shoot Booking Confirmed',
    message: 'Chicago Architectural Heritage — Central Camera Co. is confirmed for Nov 18, 2026.',
    timestamp: 'Yesterday at 3:45 PM',
    dateGroup: 'Yesterday',
    isRead: true,
    type: 'booking_confirmed',
    targetScreen: 'projects',
    targetId: 'proj-03'
  },
  {
    id: 'n-4',
    title: 'Quotation Received',
    message: 'Joe Nagle attached production breakdown for Chicago Architectural Heritage series.',
    timestamp: 'Oct 30, 10:15 AM',
    dateGroup: 'Earlier',
    isRead: true,
    type: 'quote_received',
    targetScreen: 'projects',
    targetId: 'proj-03'
  },
  {
    id: 'n-5',
    title: 'Final Assets Delivered',
    message: 'Handcrafted Archtop Mandolin Studio Shoot master archive approved and delivered.',
    timestamp: 'Oct 16, 4:20 PM',
    dateGroup: 'Earlier',
    isRead: true,
    type: 'photos_approved',
    targetScreen: 'projects',
    targetId: 'proj-04'
  }
];
