import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-xl shadow-sm border border-border">
                <div className="mb-8">
                    <Button variant="outline" asChild>
                        <Link to="/">Return to Home</Link>
                    </Button>
                </div>

                <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                    Vidyavya Privacy Policy
                </h1>

                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none font-body text-foreground/90 space-y-6">
                    <section>
                        <h2 className="text-xl font-bold mb-3">Privacy Policy</h2>
                        <p>
                            At Vidyavya, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or engage with our programs.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Information We Collect</h2>
                        <p>We may collect the following types of information:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>
                                <strong>Personal Information</strong> such as your name, email address, phone number, educational background, and other details you provide when filling out forms or registering for our programs
                            </li>
                            <li>
                                <strong>Usage Information</strong> such as IP address, browser type, device information, pages visited, and interactions with our website
                            </li>
                            <li>
                                <strong>Communication Information</strong> shared through emails, calls, forms, or other communication channels
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Provide information about our programs, services, and partnerships</li>
                            <li>Process applications, inquiries, and registrations</li>
                            <li>Communicate updates, notifications, and relevant opportunities</li>
                            <li>Improve our website, offerings, and user experience</li>
                            <li>Conduct internal analysis and research</li>
                            <li>Comply with legal and regulatory requirements</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Sharing of Information</h2>
                        <p>We do not sell your personal information.</p>
                        <p>Your information may be shared only in the following cases:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>With partner companies or colleges, strictly for training, evaluation, or hiring-related purposes</li>
                            <li>With service providers who help us operate our website and systems</li>
                            <li>When required by law, regulation, or legal process</li>
                        </ul>
                        <p className="mt-2">All such sharing is done with appropriate safeguards in place.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Data Security</h2>
                        <p>
                            We take reasonable technical and organizational measures to protect your information against unauthorized access, loss, misuse, or disclosure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Cookies and Tracking</h2>
                        <p>
                            Vidyavya may use cookies or similar technologies to improve website functionality, analyze usage patterns, and enhance user experience. You can control cookie preferences through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites. Vidyavya is not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies separately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Access or update your personal information</li>
                            <li>Request deletion of your data, subject to legal and operational requirements</li>
                            <li>Opt out of non-essential communications</li>
                        </ul>
                        <p className="mt-2">You may contact us to exercise these rights.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Changes to This Policy</h2>
                        <p>
                            Vidyavya may update this Privacy Policy from time to time. Any changes will be posted on this page, and continued use of the website indicates acceptance of the updated policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Contact Us</h2>
                        <p>
                            If you have any questions or concerns about this Privacy Policy or how your information is handled, please contact us at:
                        </p>
                        <p className="mt-2">
                            <strong>Email:</strong> <a href="mailto:contact@vidyavya.com" className="text-primary hover:underline">contact@vidyavya.com</a>
                        </p>
                    </section>
                </div>

                <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    ©️ 2026 Vidyavya Solutions Pvt. Ltd. | All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
