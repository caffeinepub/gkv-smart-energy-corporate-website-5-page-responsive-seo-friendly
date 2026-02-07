export interface Project {
  title: string;
  location: string;
  capacity: string;
  image: string;
  benefits: string[];
}

export const projects: Project[] = [
  {
    title: 'Residential Rooftop Installation',
    location: 'Mumbai, Maharashtra',
    capacity: '5 kW',
    image: '/assets/generated/gkv-project-01.dim_1200x800.png',
    benefits: [
      '80% reduction in monthly electricity bills',
      'Complete energy independence during daytime',
      'Government subsidy of ₹78,000 availed',
      'System payback period of 4 years',
    ],
  },
  {
    title: 'Commercial Solar Power Plant',
    location: 'Pune, Maharashtra',
    capacity: '100 kW',
    image: '/assets/generated/gkv-project-02.dim_1200x800.png',
    benefits: [
      'Annual savings of ₹12 lakhs on electricity',
      'Reduced carbon footprint by 120 tons/year',
      'Enhanced corporate sustainability profile',
      'ROI achieved in 3.5 years',
    ],
  },
  {
    title: 'Industrial Solar Installation',
    location: 'Ahmedabad, Gujarat',
    capacity: '250 kW',
    image: '/assets/generated/gkv-project-03.dim_1200x800.png',
    benefits: [
      'Peak demand reduction of 70%',
      'Annual cost savings of ₹30 lakhs',
      'Uninterrupted power supply for operations',
      'Accelerated depreciation tax benefits',
    ],
  },
  {
    title: 'Residential Community Project',
    location: 'Bangalore, Karnataka',
    capacity: '15 kW',
    image: '/assets/generated/gkv-project-01.dim_1200x800.png',
    benefits: [
      'Shared solar benefits for 3 families',
      'Net metering setup with grid backup',
      '75% reduction in combined electricity costs',
      'Increased property value',
    ],
  },
  {
    title: 'Warehouse Solar System',
    location: 'Delhi NCR',
    capacity: '150 kW',
    image: '/assets/generated/gkv-project-02.dim_1200x800.png',
    benefits: [
      'Complete daytime power independence',
      'Reduced operational costs by 60%',
      'Improved warehouse temperature control',
      'Green building certification achieved',
    ],
  },
  {
    title: 'Educational Institution',
    location: 'Hyderabad, Telangana',
    capacity: '75 kW',
    image: '/assets/generated/gkv-project-03.dim_1200x800.png',
    benefits: [
      'Annual savings of ₹8 lakhs on power bills',
      'Educational tool for renewable energy',
      'Reduced carbon emissions by 90 tons/year',
      'Government incentives fully utilized',
    ],
  },
];
