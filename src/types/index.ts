export type Currency = 'USD' | 'EUR' | 'GBP' | 'INR';

export type PageId =
  | 'home'
  | 'domains'
  | 'web-hosting'
  | 'cloud-hosting'
  | 'wordpress-hosting'
  | 'vps-hosting'
  | 'reseller-hosting'
  | 'website-builder'
  | 'email-hosting'
  | 'security'
  | 'support'
  | 'status'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'elementor-export';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  rate: number; // multiplier from USD
}

export interface HostingPlan {
  id: string;
  name: string;
  tagline: string;
  category: 'web' | 'cloud' | 'vps' | 'wordpress';
  popular?: boolean;
  bestValue?: boolean;
  monthlyPrices: {
    '48': number;
    '24': number;
    '12': number;
    '1': number;
  };
  originalPrices: {
    '48': number;
    '24': number;
    '12': number;
    '1': number;
  };
  discountPercentage: number;
  freeMonthsBonus?: number;
  specs: {
    websites: string;
    storage: string;
    bandwidth: string;
    ram: string;
    vCpu: string;
    inactivityTimeout?: string;
  };
  keyFeatures: string[];
  allFeatures: {
    category: string;
    items: { name: string; included: boolean; note?: string }[];
  }[];
}

export interface DomainTld {
  extension: string;
  regularPrice: number;
  salePrice: number;
  discount: string;
  popular?: boolean;
  badge?: string;
}

export interface DatacenterLocation {
  id: string;
  name: string;
  country: string;
  region: 'North America' | 'Europe' | 'Asia' | 'South America';
  baseLatencyMs: number;
  tier: string;
  hardware: string;
  status: 'operational' | 'degraded';
}

export interface CartItem {
  id: string;
  planId: string;
  planName: string;
  category: string;
  billingMonths: 48 | 24 | 12 | 1;
  pricePerMonth: number;
  domainName?: string;
  domainPrice?: number;
  datacenterLocation: string;
  addons: {
    id: string;
    name: string;
    price: number;
  }[];
}
