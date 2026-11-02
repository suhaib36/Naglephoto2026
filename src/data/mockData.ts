import { 
  ProjectItem, 
  GalleryItem, 
  ChatMessage, 
  NotificationItem, 
  ClientProfile,
  ServiceCategory
} from '../types';

export const INITIAL_CLIENT_PROFILE: ClientProfile = {
  id: 'client-01',
  name: 'Marcus Vance',
  company: 'Vance & Co. Luxury Goods',
  title: 'Creative Director',
  email: 'm.vance@vanceatelier.com',
  phone: '+1 (312) 555-0194',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
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
    tagline: 'Clean e-commerce silos, creative lifestyle setups & macro detailing.',
    image: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/Krazy-Glue.jpg-nggid03501-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
    typicalDelivery: '3–5 business days'
  },
  {
    id: 'Advertising Photography',
    name: 'Advertising Photography',
    tagline: 'High-impact hero visual assets for national campaigns & billboards.',
    image: 'https://nagleweb.com/wp-content/gallery/homepage/In_Motion_MAIN_Home-Page.JPG?t=1578953960',
    typicalDelivery: '5–7 business days'
  },
  {
    id: 'Lifestyle Photography',
    name: 'Lifestyle Photography',
    tagline: 'Authentic narrative moments, contextual figure shoots & brand stories.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    typicalDelivery: '4–6 business days'
  },
  {
    id: 'Food Photography',
    name: 'Food & Beverage',
    tagline: 'Culinary styling, craft cocktail visuals & restaurant brand imagery.',
    image: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/yakitori_boogytori_img_2274__large.jpg-nggid03517-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
    typicalDelivery: '3–5 business days'
  },
  {
    id: 'Corporate Photography',
    name: 'Corporate & PR',
    tagline: 'Annual reports, workspace storytelling & press-ready corporate media.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    typicalDelivery: '2–4 business days'
  },
  {
    id: 'People & Portrait',
    name: 'People & Portraits',
    tagline: 'Executive portraits, editorial headshots & creative character profiles.',
    image: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/01.31.17_rick_bayless_img_1311__large.jpg-nggid03495-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
    typicalDelivery: '2–3 business days'
  },
  {
    id: 'Event Photography',
    name: 'Event Photography',
    tagline: 'Galas, brand activations, private exhibitions & corporate summits.',
    image: 'https://nagleweb.com/wp-content/gallery/personal/cache/bulls_5313__large.jpg-nggid03426-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1582080349',
    typicalDelivery: '48 hours expedited'
  },
  {
    id: 'Other',
    name: 'Bespoke Creative Endeavor',
    tagline: 'Special commissions, architectural shoots & multi-day expeditions.',
    image: 'https://nagleweb.com/wp-content/gallery/personal/cache/commuter__large.jpg-nggid03431-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1582080349',
    typicalDelivery: 'Custom schedule'
  }
];

export const INITIAL_GALLERIES: GalleryItem[] = [
  {
    id: 'gal-01',
    projectId: 'proj-01',
    title: 'Summer Product Campaign',
    coverImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
    category: 'Product Photography',
    uploadDate: 'Nov 1, 2026',
    photoCount: 8,
    status: 'In Review',
    description: 'High-end cosmetics and skincare studio lighting series with custom specular reflection and luxury textured backdrops.',
    photos: [
      {
        id: 'p-101',
        galleryId: 'gal-01',
        title: 'Minimalist Amber Serum Hero',
        filename: 'NAGLE_PROD_SUMMER_001.ARW',
        url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85',
        thumbnailUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80',
        aspectRatio: 'portrait',
        status: 'Awaiting Review',
        isFavorite: true,
        metadata: {
          camera: 'Hasselblad H6D-100c',
          lens: 'HC 2,2/100mm',
          aperture: 'f/8.0',
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
            text: 'Key light feathered with 3x4 softbox to preserve the glass refraction along the left bevel. Ready for your review.'
          }
        ]
      },
      {
        id: 'p-102',
        galleryId: 'gal-01',
        title: 'Hydrating Botanical Mist with Droplets',
        filename: 'NAGLE_PROD_SUMMER_002.ARW',
        url: 'https://images.unsplash.com/photo-1608248597359-00109f3e4948?auto=format&fit=crop&w=1200&q=85',
        thumbnailUrl: 'https://images.unsplash.com/photo-1608248597359-00109f3e4948?auto=format&fit=crop&w=400&q=80',
        aspectRatio: 'portrait',
        status: 'Approved',
        isFavorite: true,
        metadata: {
          camera: 'Sony α7R V',
          lens: 'FE 90mm f/2.8 Macro G OSS',
          aperture: 'f/11',
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
            text: 'Love the water bead consistency here! Approved for catalog print hero.'
          }
        ]
      },
      {
        id: 'p-103',
        galleryId: 'gal-01',
        title: 'Matte Clay Jar Flat Lay Composition',
        filename: 'NAGLE_PROD_SUMMER_003.ARW',
        url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85',
        thumbnailUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80',
        aspectRatio: 'landscape',
        status: 'Revision Requested',
        isFavorite: false,
        revisionNotes: 'Please soften the drop shadow on the bottom right corner and color-match the cap to Pantone 7527 C.',
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
            text: 'Drop shadow on the bottom right feels a bit sharp. Can we soften it 15% and verify Pantone 7527 C?'
          },
          {
            id: 'c-4',
            author: 'Elena (Lead Retoucher)',
            role: 'studio',
            timestamp: 'Nov 1, 5:45 PM',
            text: 'Working on this layer now. Will update with v2 shortly!'
          }
        ]
      },
      {
        id: 'p-104',
        galleryId: 'gal-01',
        title: 'Artisan Glass Dropper Texture Close-up',
        filename: 'NAGLE_PROD_SUMMER_004.ARW',
        url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85',
        thumbnailUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80',
        aspectRatio: 'portrait',
        status: 'Awaiting Review',
        isFavorite: false,
        metadata: {
          camera: 'Sony α7R V',
          lens: 'FE 90mm f/2.8 Macro G OSS',
          aperture: 'f/5.6',
          shutter: '1/320s',
          iso: '80',
          resolution: '9504 × 6336 px',
          colorProfile: 'ProPhoto RGB 16-bit'
        },
        comments: []
      },
      {
        id: 'p-105',
        galleryId: 'gal-01',
        title: 'Trio Product Assembly on White Marble',
        filename: 'NAGLE_PROD_SUMMER_005.ARW',
        url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85',
        thumbnailUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=400&q=80',
        aspectRatio: 'landscape',
        status: 'Approved',
        isFavorite: true,
        metadata: {
          camera: 'Hasselblad H6D-100c',
          lens: 'HC 2,2/100mm',
          aperture: 'f/11',
          shutter: '1/200s',
          iso: '100',
          resolution: '11600 × 8700 px',
          colorProfile: 'ProPhoto RGB 16-bit'
        },
        comments: [
          {
            id: 'c-5',
            author: 'Marcus Vance',
            role: 'client',
            timestamp: 'Nov 1, 6:02 PM',
            text: 'Flawless balance across all three sizes.'
          }
        ]
      },
      {
        id: 'p-106',
        galleryId: 'gal-01',
        title: 'Monochrome Packaging Studio Silhouette',
        filename: 'NAGLE_PROD_SUMMER_006.ARW',
        url: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/05-SAP-permanent-marker-sharpie-pro-fine-blue-product-silo-cap-off-straight-on.jpg-nggid03519-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
        thumbnailUrl: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/05-SAP-permanent-marker-sharpie-pro-fine-blue-product-silo-cap-off-straight-on.jpg-nggid03519-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
        aspectRatio: 'landscape',
        status: 'Awaiting Review',
        isFavorite: false,
        metadata: {
          camera: 'Nikon D850',
          lens: 'Nikkor 105mm Micro f/2.8',
          aperture: 'f/16',
          shutter: '1/250s',
          iso: '64',
          resolution: '8256 × 5504 px',
          colorProfile: 'Adobe RGB (1998)'
        },
        comments: []
      },
      {
        id: 'p-107',
        galleryId: 'gal-01',
        title: 'Sculptural Furniture Detail (Nagle Archival)',
        filename: 'NAGLE_PROD_SUMMER_007.ARW',
        url: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/chalked_country_grey_dresser_after_pick__large.jpg-nggid03511-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
        thumbnailUrl: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/chalked_country_grey_dresser_after_pick__large.jpg-nggid03511-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
        aspectRatio: 'landscape',
        status: 'Approved',
        isFavorite: false,
        metadata: {
          camera: 'Nikon D850',
          lens: 'Nikkor 45mm PC-E Tilt-Shift',
          aperture: 'f/8.0',
          shutter: '1/125s',
          iso: '100',
          resolution: '8256 × 5504 px',
          colorProfile: 'Adobe RGB'
        },
        comments: []
      },
      {
        id: 'p-108',
        galleryId: 'gal-01',
        title: 'Precision Bonding Macro (Nagle Original)',
        filename: 'NAGLE_PROD_SUMMER_008.ARW',
        url: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/Krazy-Glue.jpg-nggid03501-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
        thumbnailUrl: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/Krazy-Glue.jpg-nggid03501-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
        aspectRatio: 'landscape',
        status: 'Awaiting Review',
        isFavorite: false,
        metadata: {
          camera: 'Nikon D850',
          lens: 'Nikkor 105mm Micro f/2.8',
          aperture: 'f/16',
          shutter: '1/250s',
          iso: '64',
          resolution: '8256 × 5504 px',
          colorProfile: 'Adobe RGB'
        },
        comments: []
      }
    ]
  },
  {
    id: 'gal-02',
    projectId: 'proj-02',
    title: 'Lifestyle Photography Collection',
    coverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
    category: 'Lifestyle Photography',
    uploadDate: 'Oct 28, 2026',
    photoCount: 6,
    status: 'In Review',
    description: 'Autumn luxury outerwear collection captured across Chicago urban architectural landmarks and golden hour locations.',
    photos: [
      {
        id: 'p-201',
        galleryId: 'gal-02',
        title: 'Urban Trench Coat — Michigan Avenue Bridge',
        filename: 'NAGLE_LIFE_CHI_001.ARW',
        url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85',
        thumbnailUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&q=80',
        aspectRatio: 'portrait',
        status: 'Approved',
        isFavorite: true,
        metadata: {
          camera: 'Sony α1',
          lens: 'FE 50mm f/1.2 GM',
          aperture: 'f/2.0',
          shutter: '1/1600s',
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
            text: 'Natural golden bounce off the Wrigley Building sandstone facade. Client favorite from the morning set.'
          }
        ]
      },
      {
        id: 'p-202',
        galleryId: 'gal-02',
        title: 'Tailored Cashmere Silhouette',
        filename: 'NAGLE_LIFE_CHI_002.ARW',
        url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
        thumbnailUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80',
        aspectRatio: 'portrait',
        status: 'Awaiting Review',
        isFavorite: false,
        metadata: {
          camera: 'Sony α1',
          lens: 'FE 85mm f/1.4 GM II',
          aperture: 'f/2.2',
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
        title: 'Dynamic City Transit Walk (Nagle Commuter Series)',
        filename: 'NAGLE_LIFE_CHI_003.ARW',
        url: 'https://nagleweb.com/wp-content/gallery/personal/cache/commuter__large.jpg-nggid03431-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1582080349',
        thumbnailUrl: 'https://nagleweb.com/wp-content/gallery/personal/cache/commuter__large.jpg-nggid03431-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1582080349',
        aspectRatio: 'landscape',
        status: 'Approved',
        isFavorite: true,
        metadata: {
          camera: 'Canon EOS 5D Mark IV',
          lens: 'EF 35mm f/1.4L II USM',
          aperture: 'f/4.0',
          shutter: '1/320s',
          iso: '200',
          resolution: '6720 × 4480 px',
          colorProfile: 'sRGB'
        },
        comments: []
      },
      {
        id: 'p-204',
        galleryId: 'gal-02',
        title: 'Studio On-Figure Knitwear Portrait',
        filename: 'NAGLE_LIFE_CHI_004.ARW',
        url: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85',
        thumbnailUrl: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=400&q=80',
        aspectRatio: 'portrait',
        status: 'Revision Requested',
        isFavorite: false,
        revisionNotes: 'Please touch up slight stray hair strands on the left temple and ensure wool knit color is neutral charcoal.',
        metadata: {
          camera: 'Sony α7R V',
          lens: 'FE 70-200mm f/2.8 GM OSS II',
          aperture: 'f/5.6',
          shutter: '1/200s',
          iso: '100',
          resolution: '9504 × 6336 px',
          colorProfile: 'Display P3'
        },
        comments: []
      },
      {
        id: 'p-205',
        galleryId: 'gal-02',
        title: 'Classic Wool Overcoat Movement',
        filename: 'NAGLE_LIFE_CHI_005.ARW',
        url: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=85',
        thumbnailUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=400&q=80',
        aspectRatio: 'portrait',
        status: 'Awaiting Review',
        isFavorite: false,
        metadata: {
          camera: 'Sony α1',
          lens: 'FE 50mm f/1.2 GM',
          aperture: 'f/2.8',
          shutter: '1/800s',
          iso: '100',
          resolution: '8640 × 5760 px',
          colorProfile: 'Display P3'
        },
        comments: []
      },
      {
        id: 'p-206',
        galleryId: 'gal-02',
        title: 'Minimalist Architecture & Model Perspective',
        filename: 'NAGLE_LIFE_CHI_006.ARW',
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
        thumbnailUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        aspectRatio: 'portrait',
        status: 'Approved',
        isFavorite: true,
        metadata: {
          camera: 'Sony α1',
          lens: 'FE 85mm f/1.4 GM II',
          aperture: 'f/2.0',
          shutter: '1/1250s',
          iso: '100',
          resolution: '8640 × 5760 px',
          colorProfile: 'Display P3'
        },
        comments: []
      }
    ]
  },
  {
    id: 'gal-03',
    projectId: 'proj-04',
    title: 'Culinary Artisanal Menu Series',
    coverImage: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/yakitori_boogytori_img_2274__large.jpg-nggid03517-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
    category: 'Food Photography',
    uploadDate: 'Oct 14, 2026',
    photoCount: 5,
    status: 'All Approved',
    description: 'Michelin star restaurant plating, smoke captures, and bar cocktail hero stills.',
    photos: [
      {
        id: 'p-301',
        galleryId: 'gal-03',
        title: 'Artisan Yakitori Charcoal Flame (Nagle Original)',
        filename: 'NAGLE_CULINARY_001.ARW',
        url: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/yakitori_boogytori_img_2274__large.jpg-nggid03517-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
        thumbnailUrl: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/yakitori_boogytori_img_2274__large.jpg-nggid03517-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
        aspectRatio: 'landscape',
        status: 'Final Approved',
        isFavorite: true,
        metadata: {
          camera: 'Canon EOS-1D X Mark III',
          lens: 'EF 24-70mm f/2.8L II USM',
          aperture: 'f/4.0',
          shutter: '1/250s',
          iso: '400',
          resolution: '5472 × 3648 px',
          colorProfile: 'Adobe RGB'
        },
        comments: [
          {
            id: 'c-301',
            author: 'Marcus Vance',
            role: 'client',
            timestamp: 'Oct 15, 10:00 AM',
            text: 'Stunning capture of the charcoal glow. Client printed for menu feature.'
          }
        ]
      },
      {
        id: 'p-302',
        galleryId: 'gal-03',
        title: 'Espresso Crema Pour & Roasted Beans (Nagle Original)',
        filename: 'NAGLE_CULINARY_002.ARW',
        url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85',
        thumbnailUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80',
        aspectRatio: 'portrait',
        status: 'Final Approved',
        isFavorite: false,
        metadata: {
          camera: 'Sony α7R V',
          lens: 'FE 90mm f/2.8 Macro',
          aperture: 'f/3.5',
          shutter: '1/400s',
          iso: '200',
          resolution: '9504 × 6336 px',
          colorProfile: 'Display P3'
        },
        comments: []
      },
      {
        id: 'p-303',
        galleryId: 'gal-03',
        title: 'Modern Japanese Plating Presentation',
        filename: 'NAGLE_CULINARY_003.ARW',
        url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85',
        thumbnailUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
        aspectRatio: 'landscape',
        status: 'Final Approved',
        isFavorite: true,
        metadata: {
          camera: 'Sony α7R V',
          lens: 'FE 50mm f/1.2 GM',
          aperture: 'f/4.0',
          shutter: '1/250s',
          iso: '160',
          resolution: '9504 × 6336 px',
          colorProfile: 'Display P3'
        },
        comments: []
      }
    ]
  },
  {
    id: 'gal-04',
    projectId: 'proj-05',
    title: 'Executive Portrait & Leadership Suite',
    coverImage: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/01.31.17_rick_bayless_img_1311__large.jpg-nggid03495-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
    category: 'People & Portrait',
    uploadDate: 'Oct 02, 2026',
    photoCount: 4,
    status: 'All Approved',
    description: 'Chicago leadership studio portraits with sculpted Rembrandt lighting and fine-art monochromatic grade.',
    photos: [
      {
        id: 'p-401',
        galleryId: 'gal-04',
        title: 'Rick Bayless — Renowned Chef & Restaurateur (Nagle Original)',
        filename: 'NAGLE_PORTRAIT_001.ARW',
        url: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/01.31.17_rick_bayless_img_1311__large.jpg-nggid03495-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
        thumbnailUrl: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/01.31.17_rick_bayless_img_1311__large.jpg-nggid03495-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
        aspectRatio: 'portrait',
        status: 'Final Approved',
        isFavorite: true,
        metadata: {
          camera: 'Nikon D850',
          lens: 'Nikkor 85mm f/1.4G',
          aperture: 'f/4.0',
          shutter: '1/200s',
          iso: '64',
          resolution: '8256 × 5504 px',
          colorProfile: 'Adobe RGB'
        },
        comments: []
      },
      {
        id: 'p-402',
        galleryId: 'gal-04',
        title: 'Akihiko Takashi Sensei B&W Study (Nagle Original)',
        filename: 'NAGLE_PORTRAIT_002.ARW',
        url: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/11.12.19_Akihiko_Takashi_Sensei_session7740BW.jpg-nggid03494-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
        thumbnailUrl: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/11.12.19_Akihiko_Takashi_Sensei_session7740BW.jpg-nggid03494-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
        aspectRatio: 'portrait',
        status: 'Final Approved',
        isFavorite: true,
        metadata: {
          camera: 'Nikon D850',
          lens: 'Nikkor 70-200mm f/2.8E FL ED VR',
          aperture: 'f/3.2',
          shutter: '1/250s',
          iso: '100',
          resolution: '8256 × 5504 px',
          colorProfile: 'Adobe RGB Monochrome'
        },
        comments: []
      }
    ]
  }
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'Summer Product Campaign',
    clientCompany: 'Vance & Co. Luxury Goods',
    category: 'Product Photography',
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    status: 'Client Review',
    tabCategory: 'active',
    shootDate: 'Oct 29, 2026',
    shootTime: '9:00 AM – 3:30 PM CST',
    shootType: 'Studio',
    locationAddress: 'Nagle Photography Studio, 1420 W Fulton Market, Chicago, IL 60607',
    description: 'Comprehensive studio product campaign featuring our botanical skincare bottles, amber glass serums, and matte packaging series for Q4 print and digital launches.',
    estimatedPhotos: 24,
    budgetQuote: '$4,850.00 USD (Includes Studio, Lighting Tech & Retouching)',
    createdDate: 'Oct 18, 2026',
    galleryId: 'gal-01',
    timeline: [
      { step: 1, label: 'Request Submitted', description: 'Brief and mood board submitted by Vance & Co.', date: 'Oct 18', completed: true, current: false },
      { step: 2, label: 'Project Confirmed', description: 'Quote approved & shoot dates reserved.', date: 'Oct 20', completed: true, current: false },
      { step: 3, label: 'Photography Shoot', description: 'Studio day completed with Joe Nagle & styling crew.', date: 'Oct 29', completed: true, current: false },
      { step: 4, label: 'Photos Uploaded', description: 'Raw proofs color-graded & proof gallery published.', date: 'Nov 1', completed: true, current: false },
      { step: 5, label: 'Client Review', description: 'Selecting hero shots & requesting retouching adjustments.', date: 'In Progress', completed: false, current: true },
      { step: 6, label: 'Final Delivery', description: 'Full resolution TIFFs & web assets packaged with license.', completed: false, current: false },
    ],
    requirements: [
      'High-resolution 100MP captures on pure neutral white (#FFFFFF) background and natural marble stone textures.',
      'Specular highlight alignment along curved bottle shoulders.',
      'Separation of dropper glass reflection with transparent alpha clipping paths.',
      'Deliverables in 16-bit ProPhoto TIFF + sRGB Web Optimized JPEG.'
    ],
    referenceImages: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1608248597359-00109f3e4948?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    id: 'proj-02',
    title: 'Lifestyle Photography Collection',
    clientCompany: 'Vance & Co. Luxury Goods',
    category: 'Lifestyle Photography',
    thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    status: 'Photos Uploaded',
    tabCategory: 'active',
    shootDate: 'Oct 24, 2026',
    shootTime: '7:30 AM – 1:00 PM CST',
    shootType: 'On Location',
    locationAddress: 'Michigan Avenue Bridge & Chicago Riverwalk, Chicago, IL 60601',
    description: 'Editorial urban lifestyle shoot capturing high-end outerwear and accessories in authentic downtown Chicago morning light.',
    estimatedPhotos: 18,
    budgetQuote: '$5,400.00 USD (Includes Location Permits & 2 Models)',
    createdDate: 'Oct 12, 2026',
    galleryId: 'gal-02',
    timeline: [
      { step: 1, label: 'Request Submitted', description: 'Creative brief received for Fall Lookbook.', date: 'Oct 12', completed: true, current: false },
      { step: 2, label: 'Project Confirmed', description: 'Talent booked & riverwalk permits secured.', date: 'Oct 16', completed: true, current: false },
      { step: 3, label: 'Photography Shoot', description: 'Multi-location morning shoot wrapped.', date: 'Oct 24', completed: true, current: false },
      { step: 4, label: 'Photos Uploaded', description: 'Proof gallery uploaded for client review.', date: 'Oct 28', completed: true, current: true },
      { step: 5, label: 'Client Review', description: 'Awaiting client image selection.', completed: false, current: false },
      { step: 6, label: 'Final Delivery', description: 'High-res master files release.', completed: false, current: false },
    ],
    requirements: [
      'Natural architectural angles incorporating limestone and river reflections.',
      'Candid walking and motion poses showcasing trench coat movement.',
      'Color tone: subdued cinematic warm palette consistent with brand guidelines.'
    ],
    referenceImages: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    id: 'proj-03',
    title: 'Spring Advertising Campaign',
    clientCompany: 'Vance & Co. Luxury Goods',
    category: 'Advertising Photography',
    thumbnail: 'https://nagleweb.com/wp-content/gallery/homepage/In_Motion_MAIN_Home-Page.JPG?t=1578953960',
    status: 'Confirmed',
    tabCategory: 'upcoming',
    shootDate: 'Nov 18, 2026',
    shootTime: '8:30 AM – 5:00 PM CST',
    shootType: 'Studio',
    locationAddress: 'Nagle Main Stage, 1420 W Fulton Market, Chicago, IL 60607',
    description: 'Flagship advertising campaign for Spring/Summer product line. Multi-set production involving high-speed sync strobe systems and live art direction monitor feeds.',
    estimatedPhotos: 32,
    budgetQuote: '$7,250.00 USD (Full Day Production + Equipment Rig)',
    createdDate: 'Oct 25, 2026',
    timeline: [
      { step: 1, label: 'Request Submitted', description: 'Campaign brief & storyboard delivered.', date: 'Oct 25', completed: true, current: false },
      { step: 2, label: 'Project Confirmed', description: 'Deposit received & stage hold confirmed.', date: 'Oct 30', completed: true, current: true },
      { step: 3, label: 'Photography Shoot', description: 'Scheduled for Nov 18, 2026.', date: 'Upcoming', completed: false, current: false },
      { step: 4, label: 'Photos Uploaded', description: 'Next day private proofing.', completed: false, current: false },
      { step: 5, label: 'Client Review', description: 'Client review and retouch approval.', completed: false, current: false },
      { step: 6, label: 'Final Delivery', description: 'Full asset pack delivery.', completed: false, current: false },
    ],
    requirements: [
      'High-speed strobe lighting rig to capture liquid splash dynamics.',
      'Tethered live review directly to client iPad monitors on set.',
      'Deliverables calibrated for large-format billboard print specs.'
    ],
    referenceImages: [
      'https://nagleweb.com/wp-content/gallery/homepage/In_Motion_MAIN_Home-Page.JPG?t=1578953960'
    ]
  },
  {
    id: 'proj-04',
    title: 'Culinary Artisanal Menu Series',
    clientCompany: 'Vance Hospitality Group',
    category: 'Food Photography',
    thumbnail: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/yakitori_boogytori_img_2274__large.jpg-nggid03517-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
    status: 'Final Approved',
    tabCategory: 'completed',
    shootDate: 'Oct 10, 2026',
    shootTime: '10:00 AM – 3:00 PM CST',
    shootType: 'On Location',
    locationAddress: 'Koto Robata & Grill, 830 N Michigan Ave, Chicago, IL 60611',
    description: 'Sensory gastronomy shoot focusing on robata charcoal grilling, delicate sashimi textures, and signature cocktail pairings.',
    estimatedPhotos: 15,
    budgetQuote: '$3,600.00 USD (Completed & Paid)',
    createdDate: 'Sep 28, 2026',
    galleryId: 'gal-03',
    timeline: [
      { step: 1, label: 'Request Submitted', description: 'Menu list and plating concept sent.', date: 'Sep 28', completed: true, current: false },
      { step: 2, label: 'Project Confirmed', description: 'Kitchen prep schedule matched.', date: 'Oct 02', completed: true, current: false },
      { step: 3, label: 'Photography Shoot', description: 'Live on-location kitchen shoot.', date: 'Oct 10', completed: true, current: false },
      { step: 4, label: 'Photos Uploaded', description: 'Proofs delivered.', date: 'Oct 14', completed: true, current: false },
      { step: 5, label: 'Client Review', description: 'All selections approved.', date: 'Oct 16', completed: true, current: false },
      { step: 6, label: 'Final Delivery', description: 'Ultra-res print files delivered.', date: 'Oct 18', completed: true, current: false },
    ],
    requirements: [
      'Capture authentic hot smoke rising from Binchotan coals.',
      'Shallow depth of field for elegant textural focus.',
      'Full commercial usage rights for Chicago Tribune feature & web menu.'
    ],
    referenceImages: [
      'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/yakitori_boogytori_img_2274__large.jpg-nggid03517-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193'
    ]
  },
  {
    id: 'proj-05',
    title: 'Executive Portrait & Leadership Suite',
    clientCompany: 'Vance & Co. Luxury Goods',
    category: 'People & Portrait',
    thumbnail: 'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/01.31.17_rick_bayless_img_1311__large.jpg-nggid03495-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193',
    status: 'Final Approved',
    tabCategory: 'completed',
    shootDate: 'Sep 25, 2026',
    shootTime: '1:00 PM – 4:00 PM CST',
    shootType: 'Studio',
    locationAddress: 'Nagle Photography Studio, 1420 W Fulton Market, Chicago, IL 60607',
    description: 'Executive portrait session for C-suite management team, annual report release, and Forbes feature interview editorial profile.',
    estimatedPhotos: 12,
    budgetQuote: '$2,900.00 USD (Completed & Paid)',
    createdDate: 'Sep 10, 2026',
    galleryId: 'gal-04',
    timeline: [
      { step: 1, label: 'Request Submitted', description: 'Executive bio and wardrobe guide submitted.', date: 'Sep 10', completed: true, current: false },
      { step: 2, label: 'Project Confirmed', description: 'Hair/makeup stylist booked.', date: 'Sep 15', completed: true, current: false },
      { step: 3, label: 'Photography Shoot', description: 'Studio portrait session wrapped.', date: 'Sep 25', completed: true, current: false },
      { step: 4, label: 'Photos Uploaded', description: 'Initial contact sheet uploaded.', date: 'Oct 02', completed: true, current: false },
      { step: 5, label: 'Client Review', description: '4 executive selects approved.', date: 'Oct 05', completed: true, current: false },
      { step: 6, label: 'Final Delivery', description: 'Final high-end retouches delivered.', date: 'Oct 08', completed: true, current: false },
    ],
    requirements: [
      'Rembrandt key light with subtle hair rim light against dark slate backdrop.',
      'Natural frequency separation skin retouching (retaining authentic skin texture).',
      'Both color and monochrome master exports.'
    ],
    referenceImages: [
      'https://nagleweb.com/wp-content/gallery/peopleproductetc/cache/01.31.17_rick_bayless_img_1311__large.jpg-nggid03495-ngg0dyn-800x600-00f0w010c010r110f110r010t010.jpg?t=1585860193'
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
      senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      text: 'Good morning Marcus! We wrapped the studio session yesterday. The lighting on the amber glass serum series is looking extraordinary.',
      timestamp: 'Nov 1, 9:30 AM',
      isClient: false,
    },
    {
      id: 'm-2',
      projectId: 'proj-01',
      senderId: 'client-marcus',
      senderName: 'Marcus Vance',
      senderRole: 'Creative Director',
      senderAvatar: INITIAL_CLIENT_PROFILE.avatar,
      text: 'Fantastic to hear Joe! Did you get a chance to capture the macro water bead detail on the mist bottle as we discussed in the brief?',
      timestamp: 'Nov 1, 10:15 AM',
      isClient: true,
    },
    {
      id: 'm-3',
      projectId: 'proj-01',
      senderId: 'studio-joe',
      senderName: 'Joe Nagle',
      senderRole: 'Principal Photographer',
      senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      text: 'Yes! We used the 90mm Macro with micro glycerine droplets. The proofs are now live in your private gallery under Summer Product Campaign.',
      timestamp: 'Nov 1, 11:00 AM',
      isClient: false,
      attachment: {
        type: 'image',
        name: 'NAGLE_PROD_SUMMER_002_preview.jpg',
        url: 'https://images.unsplash.com/photo-1608248597359-00109f3e4948?auto=format&fit=crop&w=600&q=80',
        size: '18.4 MB'
      }
    },
    {
      id: 'm-4',
      projectId: 'proj-01',
      senderId: 'client-marcus',
      senderName: 'Marcus Vance',
      senderRole: 'Creative Director',
      senderAvatar: INITIAL_CLIENT_PROFILE.avatar,
      text: 'Incredible work! I just reviewed the gallery and submitted feedback on the clay jar shadow. Once that’s adjusted we are ready to approve the final batch.',
      timestamp: 'Nov 1, 5:15 PM',
      isClient: true,
    },
    {
      id: 'm-5',
      projectId: 'proj-01',
      senderId: 'studio-elena',
      senderName: 'Elena Rostova',
      senderRole: 'Lead Retoucher',
      senderAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      text: 'Hi Marcus, I received your note on photo #003 regarding the Pantone 7527 C cap calibration and softened gradient. I am finalizing the revised proof right now.',
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
      senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      text: 'Marcus, proofs from our Riverwalk shoot are uploaded. The natural morning haze gave the bridge shots a wonderful cinematic texture.',
      timestamp: 'Oct 28, 2:00 PM',
      isClient: false,
    },
    {
      id: 'm-202',
      projectId: 'proj-02',
      senderId: 'client-marcus',
      senderName: 'Marcus Vance',
      senderRole: 'Creative Director',
      senderAvatar: INITIAL_CLIENT_PROFILE.avatar,
      text: 'Checking them now. The trench coat silhouette in shot #001 is perfection.',
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
      senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      text: 'We have reserved the Fulton Market Main Stage for November 18th. Our grip team will have the high-speed strobe rig built by 8:00 AM so we can begin shooting promptly at 9:00 AM.',
      timestamp: 'Oct 30, 11:45 AM',
      isClient: false,
    }
  ]
};

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'n-1',
    title: 'New Retouched Proof Ready',
    message: 'Elena updated photo NAGLE_PROD_SUMMER_003 with requested shadow gradient adjustment.',
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
    message: '8 high-resolution proofs for Summer Product Campaign have been published to your private portal.',
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
    message: 'Spring Advertising Campaign is confirmed for Nov 18, 2026 at Nagle Main Stage Studio.',
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
    message: 'Joe Nagle attached production quotation and equipment breakdown for Spring Advertising Campaign.',
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
    message: 'Culinary Artisanal Menu Series TIFF master archive has been packaged and approved.',
    timestamp: 'Oct 18, 4:20 PM',
    dateGroup: 'Earlier',
    isRead: true,
    type: 'photos_approved',
    targetScreen: 'projects',
    targetId: 'proj-04'
  }
];
