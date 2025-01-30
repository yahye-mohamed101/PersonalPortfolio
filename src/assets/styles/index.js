import './global.css';
import './Navigation.css';
import './AboutMe.css';
import './Portfolio.css';
import './Contact.css';
import './Resume.css';
import './Footer.css';

// Export any shared style constants or theme values
export const theme = {
  colors: {
    primary: '#3B82F6',
    primaryHover: '#2563EB',
    background: '#111827',
    surface: '#1F2937',
    text: '#F9FAFB',
    textSecondary: '#D1D5DB',
  },
  transitions: {
    default: 'all 0.3s ease',
    smooth: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
};