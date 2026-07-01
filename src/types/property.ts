export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  type: 'House' | 'Apartment' | 'Villa' | 'Townhouse';
  features: string[];
  description: string;
  agent: Agent;
  status: 'For Sale' | 'For Rent';
  rating: number;
  yearBuilt: number;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  image: string;
  phone: string;
  email: string;
  rating: number;
  listings: number;
}

export interface Neighborhood {
  id: string;
  name: string;
  description: string;
  image: string;
  stats: {
    safety: number;
    schools: number;
    transit: number;
    entertainment: number;
  };
}