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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="font-heading font-bold text-2xl text-secondary-foreground">
                Vidya<span className="text-primary">vya</span>
              </div>
            </Link>
            <p className="font-heading font-semibold text-secondary-foreground text-lg mb-2">
              Shaping Tomorrow’s Tech Leaders
            </p>
            <p className="font-body text-secondary-foreground/70 text-sm leading-relaxed mb-4">
              Industry-led training in Data Engineering and AI/ML Engineering, integrated with a 6-month paid internship.
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
                  Pune, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@vidyavya.com"
                  className="font-body text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  hello@vidyavya.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="font-body text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {['LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label={social}
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </a>
              ))}
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
