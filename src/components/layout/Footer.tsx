import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRequestCallback } from '@/context/RequestCallbackContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { openModal } = useRequestCallback();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Student Life', href: '/student-life' },
    { name: 'Partner With Us', href: '/partner' },
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* CTA Section */}
      <div className="container-custom py-12 md:py-16">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Ready to Start Your Career Journey with Vidyavya?
          </h3>
          <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
            Speak to our team, understand the program, and see if Vidyavya is the right fit for your goal.
          </p>
          <Button variant="cta" size="xl" onClick={openModal}>
            Request Callback
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 border-t border-secondary-foreground/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.7fr_1.1fr] gap-8 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-2">
              <img
                src="/logo.png"
                alt="Vidyavya Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="font-heading font-semibold text-secondary-foreground text-lg mb-0">
              Shaping Tomorrow’s Tech Leaders
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    target={link.href.startsWith('/privacy') || link.href.startsWith('/terms') ? "_blank" : undefined}
                    rel={link.href.startsWith('/privacy') || link.href.startsWith('/terms') ? "noopener noreferrer" : undefined}
                    className="font-body text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-secondary-foreground/80">
                  7th Floor, Kumar Pride Senate-1, Senapati Bapat Road, Shivajinagar, Pune, Maharashtra-411016.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@vidyavya.com"
                  className="font-body text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  contact@vidyavya.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+917722077330"
                  className="font-body text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  +91 77220 77330
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/vidyavya_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vidyavya Instagram"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/90 hover:text-white hover:border-white/60 hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.facebook.com/people/Vidyavya/61585982198263/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vidyavya Facebook"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/90 hover:text-white hover:border-white/60 hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://x.com/Vidyavya_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vidyavya X"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/90 hover:text-white hover:border-white/60 hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/company/vidyavya/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vidyavya LinkedIn"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/90 hover:text-white hover:border-white/60 hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-custom py-6 border-t border-secondary-foreground/10">
        <div className="flex justify-center items-center">
          <p className="font-body text-sm text-secondary-foreground/60 text-center">
            © {currentYear} Vidyavya Solutions Pvt. Ltd. | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
