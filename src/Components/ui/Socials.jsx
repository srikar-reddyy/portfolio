import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { profile } from '../../constants';

const items = [
  { icon: FaGithub, label: 'GitHub', href: profile.github },
  { icon: FaLinkedin, label: 'LinkedIn', href: profile.linkedin },
  { icon: FaEnvelope, label: 'Email', href: `mailto:${profile.email}` },
];

export default function Socials({ className = '', size = 'text-xl' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          className={`grid place-items-center w-11 h-11 rounded-full border border-white/10 text-neutral-300
                      hover:text-accent hover:border-accent/50 transition-colors ${size}`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
