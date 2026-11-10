import { BrandConfig } from '../types';

export const initialBrandConfig: BrandConfig = {
  brandName: 'Decent Web Engineering.com',
  ownerName: 'Umair Web Designer',
  tagline: 'We Build Your Digital Future.',
  email: 'muhammedumairamjadkhan85@gmail.com',
  whatsappNumber: '+923166097993',
  whatsappDisplay: '0316 6097993',
  location: 'Global Remote / International Client Services',
  socials: {
    linkedin: 'https://linkedin.com/in/umair-web-designer',
    github: 'https://github.com/umair-web-designer',
    twitter: 'https://twitter.com/umair_webdev',
    dribbble: 'https://dribbble.com/umair_webdev',
  },
};

export const getStoredBrandConfig = (): BrandConfig => {
  try {
    const saved = localStorage.getItem('dwe_brand_config');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Migrate brand name to include .com
      if (!parsed.brandName || !parsed.brandName.endsWith('.com')) {
        parsed.brandName = 'Decent Web Engineering.com';
      }
      // Migrate old placeholder if present
      if (parsed.whatsappNumber === '+923001234567' || !parsed.whatsappNumber) {
        parsed.whatsappNumber = '+923166097993';
        parsed.whatsappDisplay = '0316 6097993';
      }
      if (!parsed.email || parsed.email.includes('example.com')) {
        parsed.email = 'muhammedumairamjadkhan85@gmail.com';
      }
      return { ...initialBrandConfig, ...parsed };
    }
  } catch (e) {
    console.error('Failed to parse brand config from localStorage', e);
  }
  return initialBrandConfig;
};

export const saveBrandConfig = (config: BrandConfig) => {
  try {
    localStorage.setItem('dwe_brand_config', JSON.stringify(config));
  } catch (e) {
    console.error('Failed to save brand config', e);
  }
};
