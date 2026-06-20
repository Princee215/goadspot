export const business = {
  name: 'GoAdSpot',
  tagline: 'Newspaper Advertising, Simplified.',
  description:
    "GoAdSpot offers top-notch newspaper ad services for SMEs, Government Entities, and Individual Advertisers. With us, customers have the freedom to design their ads according to their preferences.",
}

export const phones = ['+91-7011822319', '+91-7065477487']
export const email = 'goadspot@gmail.com'

export const addresses = {
  office: {
    label: 'Office Address',
    lines: [
      'Shop No. 4, Sharma Market, Vill-Chaura,',
      'Opp. ESIC Hospital, Sector-22,',
      'Noida, Gautam Buddha Nagar, Uttar Pradesh - 201301',
    ],
  },
  registered: {
    label: 'Registered Office Address',
    lines: [
      'House No. I-874/18, Hari Nagar Extn,',
      'Jaitpur, Badarpur, New Delhi - 110044',
    ],
  },
}

export const audiences = [
  {
    title: 'SMEs',
    description:
      'Affordable, high-impact newspaper ad placements to help small and medium businesses reach local and national audiences.',
  },
  {
    title: 'Government Entities',
    description:
      'Compliant, well-documented public notice and tender advertisement booking across leading national and regional newspapers.',
  },
  {
    title: 'Individual Advertisers',
    description:
      'From matrimonial to obituary and classified ads, we help individuals book ads quickly in the newspaper of their choice.',
  },
]

export const features = [
  {
    title: 'Customizable Ads',
    description: 'Design your ad exactly the way you want it — your message, your layout.',
  },
  {
    title: 'Nationwide Reach',
    description: 'Book ads in renowned newspapers across India, in Hindi and English.',
  },
  {
    title: 'Reliable Booking',
    description: 'Seamless collaboration ensures your ad is booked and published on time.',
  },
]

export const newspapers = [
  'Hindustan Hindi',
  'Dainik Jagran',
  'Punjab Kesari',
  'Rashtriya Sahara',
  'Amar Ujala',
  'Business Standard',
  'The Pioneer',
  'Jansatta',
]

export function whatsappLink(phone, message) {
  const digits = phone.replace(/[^\d]/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

export function telLink(phone) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}

export function mailtoLink(to, subject) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}`
}
