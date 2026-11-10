import { BusinessStat, TestimonialItem } from '../types';

export const verifiedStats: BusinessStat[] = [
  {
    id: 'responsive',
    label: 'Responsive Architecture',
    value: '100%',
    description: 'Every layout engineered to render across 320px mobile to 4K ultrawide displays.'
  },
  {
    id: 'performance',
    label: 'Target Performance Benchmark',
    value: '< 1s',
    description: 'Sub-second target page loads and zero cumulative layout shifts (CLS < 0.05).'
  },
  {
    id: 'disciplines',
    label: 'Core Digital Disciplines',
    value: '8+',
    description: 'From enterprise platforms to high-converting landing pages and custom UI/UX systems.'
  },
  {
    id: 'availability',
    label: 'Client Inquiry Response',
    value: '< 24h',
    description: 'Direct communication with lead engineer Umair on WhatsApp and professional email.'
  }
];

export const initialTestimonials: TestimonialItem[] = [
  {
    id: 't-1',
    clientName: 'Client Review Portal Active',
    clientRole: 'Verified Client Feedback System',
    companyName: 'Decent Web Engineering Open Portal',
    content: 'We uphold absolute integrity and transparency: we do not display fabricated testimonials or fake endorsements. As we collaborate with you and deliver your project, your verified review and results will be proudly showcased here.',
    rating: 5,
    projectType: 'Integrity Notice',
    date: 'Current Season',
    isVerified: true
  }
];

export const getStoredTestimonials = (): TestimonialItem[] => {
  try {
    const saved = localStorage.getItem('dwe_testimonials');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to parse testimonials from localStorage', e);
  }
  return initialTestimonials;
};

export const saveTestimonial = (item: Omit<TestimonialItem, 'id' | 'date'>) => {
  try {
    const current = getStoredTestimonials();
    const newItem: TestimonialItem = {
      ...item,
      id: `t-${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      isVerified: true
    };
    const updated = [newItem, ...current];
    localStorage.setItem('dwe_testimonials', JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to save testimonial', e);
    return [];
  }
};
