import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from 'react-icons/fa'

export const portfolioPageData = {
  brand: {
    logoSrc: '/images/hero/logo.png',
    illustrationSrc: '/images/banners/footer-character.png',
    headline: ['Let’s', 'Connect'],
  },
  contacts: [
    {
      id: 'email',
      iconSrc: '/icons/email-main.webp',
      label: 'Email',
      value: 'connect@growingen.com',
      href: 'mailto:connect@growingen.com',
      iconAlt: 'Email icon',
    },
    {
      id: 'phone',
      iconSrc: '/icons/whatsapp-main.webp',
      label: 'Phone',
      value: '+91 86 2591 2593',
      href: 'tel:+918625912593',
      iconAlt: 'WhatsApp icon',
    },
  ],
  services: [
    'Website Optimization',
    'Business Growth',
    'Social Media Management',
    'SEO Development',
  ],
  quickLinks: [
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Sitemap', href: '/sitemap' },
  ],
  socialLinks: [
    {
      id: 'linkedin',
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      icon: FaLinkedinIn,
      className: 'bg-[#0A66C2] text-white',
    },
    {
      id: 'instagram',
      href: 'https://instagram.com',
      label: 'Instagram',
      icon: FaInstagram,
      className: 'bg-[linear-gradient(135deg,#fcaf45_0%,#f77737_26%,#e1306c_58%,#833ab4_100%)] text-white',
    },
    {
      id: 'facebook',
      href: 'https://facebook.com',
      label: 'Facebook',
      icon: FaFacebookF,
      className: 'bg-[#1877F2] text-white',
    },
    {
      id: 'pinterest',
      href: 'https://pinterest.com',
      label: 'Pinterest',
      icon: FaPinterestP,
      className: 'bg-[#E60023] text-white',
    },
  ],
}
