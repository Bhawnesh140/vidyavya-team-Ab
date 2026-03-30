import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string().trim().min(10, { message: "Please enter a valid phone number" }).max(15, { message: "Phone number must be less than 15 characters" }),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Request Submitted!",
      description: "We'll get in touch with you shortly.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="min-h-[70vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center px-4"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Thank You!
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Your callback request has been submitted. Our team will get in touch with you shortly.
            </p>
            <Button variant="cta" onClick={() => setIsSubmitted(false)}>
              Submit Another Request
            </Button>
          </motion.div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-8 md:pt-20 md:pb-12 bg-gradient-to-b from-cream to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-heading text-[1.7rem] md:text-4xl font-bold text-foreground mb-6">
              Let's Start a <span className="text-primary">Conversation</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Have questions about our programs? Ready to start your career transformation?
              <br />
              Fill out the form and our team will get in touch with you shortly.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="pt-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Talk to our team
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-body font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`font-body ${errors.name ? 'border-destructive' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive font-body">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`font-body ${errors.email ? 'border-destructive' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive font-body">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-body font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={`font-body ${errors.phone ? 'border-destructive' : ''}`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive font-body">{errors.phone}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-body font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about what you’re looking for"
                    rows={5}
                    className={`font-body resize-none ${errors.message ? 'border-destructive' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive font-body">{errors.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Submit
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground h-full">
              <h2 className="font-heading text-2xl font-semibold mb-6">
                Get in Touch
              </h2>
              <p className="font-body text-secondary-foreground/80 mb-8">
                Have questions? We're here to help.
                <br />
                Reach out to us through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Location</h3>
                    <p className="font-body text-sm text-secondary-foreground/80">
                      7th Floor, Kumar Pride Senate-1, Senapati Bapat Road, Shivajinagar, Pune, Maharashtra-411016.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:contact@vidyavya.com"
                      className="font-body text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                    >
                      contact@vidyavya.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+917722077330"
                      className="font-body text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                    >
                      +91 77220 77330
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-secondary-foreground/10">
                <h3 className="font-heading font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/vidyavya_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Vidyavya Instagram"
                    className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:scale-110 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" strokeWidth={2} />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Vidyavya/61585982198263/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Vidyavya Facebook"
                    className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" strokeWidth={2} />
                  </a>
                  <a
                    href="https://x.com/Vidyavya_"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Vidyavya X"
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" strokeWidth={2} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/vidyavya/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Vidyavya LinkedIn"
                    className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
