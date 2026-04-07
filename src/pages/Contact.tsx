import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react';
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
            className="lg:col-span-3 h-full"
          >
            <div className="bg-card rounded-2xl p-8 shadow-card h-full flex flex-col">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Talk to our team
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                <div className="space-y-6 flex-grow">
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
                </div>
                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full mt-8"
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
            className="lg:col-span-2 h-full"
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
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
