import { Property, Agent, Neighborhood } from './types/property';

export const agents: Agent[] = [
  {
    id: 'a1',
    name: 'Sarah Jenkins',
    role: 'Luxury Specialist',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25aacbe0-6bc8-4c1d-aca0-eb20154c1647/agent-female-1-1120e503-1770385459892.webp',
    phone: '(555) 123-4567',
    email: 'sarah.j@estatify.com',
    rating: 4.9,
    listings: 24
  },
  {
    id: 'a2',
    name: 'Michael Chen',
    role: 'Investment Advisor',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25aacbe0-6bc8-4c1d-aca0-eb20154c1647/agent-male-1-3002457a-1770385460909.webp',
    phone: '(555) 987-6543',
    email: 'm.chen@estatify.com',
    rating: 4.8,
    listings: 31
  }
];

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Infinity Villa',
    price: 4250000,
    location: 'Beverly Hills, CA',
    beds: 5,
    baths: 6,
    sqft: 6500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25aacbe0-6bc8-4c1d-aca0-eb20154c1647/luxury-villa-1-e1ba2d6e-1770385466232.webp',
    type: 'Villa',
    features: ['Pool', 'Smart Home', 'Guest House', 'Wine Cellar'],
    description: 'A stunning contemporary masterpiece offering breathtaking canyon views and ultimate privacy.',
    agent: agents[0],
    status: 'For Sale',
    rating: 4.9,
    yearBuilt: 2022
  },
  {
    id: '2',
    title: 'Skyline Penthouse',
    price: 2150000,
    location: 'Downtown, Miami',
    beds: 3,
    baths: 3,
    sqft: 2800,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25aacbe0-6bc8-4c1d-aca0-eb20154c1647/city-apartment-1-26ecb490-1770385460554.webp',
    type: 'Apartment',
    features: ['Concierge', 'Gym', 'Roof Deck', 'Floor-to-ceiling Windows'],
    description: 'Experience luxury living in the clouds with panoramic ocean views and world-class amenities.',
    agent: agents[1],
    status: 'For Sale',
    rating: 4.7,
    yearBuilt: 2020
  },
  {
    id: '3',
    title: 'Heritage Family Home',
    price: 850000,
    location: 'Portland, OR',
    beds: 4,
    baths: 2.5,
    sqft: 3200,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25aacbe0-6bc8-4c1d-aca0-eb20154c1647/suburban-home-1-e29c33d1-1770385461271.webp',
    type: 'House',
    features: ['Large Garden', 'Fireplace', 'Modern Kitchen', 'Detached Garage'],
    description: 'Perfect family home located in a top-rated school district with classic charm and modern updates.',
    agent: agents[0],
    status: 'For Sale',
    rating: 4.5,
    yearBuilt: 1995
  },
  {
    id: '4',
    title: 'Urban Minimalist Loft',
    price: 1200000,
    location: 'Seattle, WA',
    beds: 2,
    baths: 2,
    sqft: 1800,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25aacbe0-6bc8-4c1d-aca0-eb20154c1647/modern-interior-1-5ca82fab-1770385460589.webp',
    type: 'Apartment',
    features: ['Industrial Style', 'Open Plan', 'Exposed Brick', 'Smart Lighting'],
    description: 'Chic urban living in the heart of the city, featuring high ceilings and custom finishes.',
    agent: agents[1],
    status: 'For Sale',
    rating: 4.6,
    yearBuilt: 2018
  }
];

export const neighborhoods: Neighborhood[] = [
  {
    id: 'n1',
    name: 'Oakwood Heights',
    description: 'A serene neighborhood known for its historic homes and vibrant community spirit.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25aacbe0-6bc8-4c1d-aca0-eb20154c1647/neighborhood-1-bec21269-1770385468566.webp',
    stats: {
      safety: 95,
      schools: 90,
      transit: 70,
      entertainment: 85
    }
  }
];