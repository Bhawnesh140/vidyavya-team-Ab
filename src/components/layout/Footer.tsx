import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
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
          <p className="font-body text-muted-foreground mb-6 max-w-4xl mx-auto lg:whitespace-nowrap">
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
                className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://www.facebook.com/people/Vidyavya/61585982198263/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vidyavya Facebook"
                className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
              <a
                href="https://x.com/Vidyavya_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vidyavya X"
                className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 3.239H4.293L17.607 20.65z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/vidyavya/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vidyavya LinkedIn"
                className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
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
