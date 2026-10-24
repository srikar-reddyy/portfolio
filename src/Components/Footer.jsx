import Socials from './ui/Socials';
import { profile } from '../constants';

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-page py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-bold text-white">{profile.name}</p>
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} · {profile.headline} · {profile.location}
          </p>
        </div>
        <Socials />
      </div>
    </footer>
  );
}

export default Footer;
