import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-background py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-xl shadow-sm border border-border">
                <div className="mb-8">
                    <Button variant="outline" asChild>
                        <Link to="/">Return to Home</Link>
                    </Button>
                </div>

                <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                    Vidyavya Terms of Service
                </h1>

                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none font-body text-foreground/90 space-y-6">
                    <section>
                        <h2 className="text-xl font-bold mb-3">Terms of Service</h2>
                        <p>
                            These Terms of Service (“Terms”) govern your access to and use of the Vidyavya website, programs, services, and related offerings (collectively, the “Services”). By accessing, browsing, or using the Services, or by enrolling in any Vidyavya program, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                        </p>
                        <p className="mt-2">
                            If you do not agree to these Terms, you must discontinue use of the Services immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">About Vidyavya</h2>
                        <p>
                            Vidyavya is an education and training platform that offers industry-aligned programs, learning resources, and partnerships focused on Data Engineering, AI/ML, and related technology domains.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Eligibility</h2>
                        <p>By using our website or enrolling in our programs, you confirm that:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>You are at least 18 years old, or have parental/guardian consent</li>
                            <li>The information you provide is accurate and complete</li>
                            <li>You are legally capable of entering into a binding agreement</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Use of the Website</h2>
                        <p>
                            You agree to use the Vidyavya website only for lawful purposes and in a manner that does not:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Violate any applicable laws or regulations</li>
                            <li>Infringe on the rights of others</li>
                            <li>Disrupt or interfere with website functionality or security</li>
                            <li>Attempt unauthorized access to systems or data</li>
                        </ul>
                        <p className="mt-2">We reserve the right to restrict or terminate access for misuse.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Program Enrollment & Participation</h2>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Enrollment in Vidyavya programs is subject to eligibility criteria and selection processes</li>
                            <li>Program structure, curriculum, duration, and delivery may evolve to stay aligned with industry needs</li>
                            <li>Active participation, attendance, and adherence to conduct guidelines are expected</li>
                            <li>Vidyavya reserves the right to suspend or remove students for misconduct, non-compliance, or unethical behavior</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Fees and Payments</h2>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Program fees, payment schedules, and related terms are communicated separately during enrollment</li>
                            <li>All payments are subject to applicable taxes</li>
                            <li>Refunds, if applicable, are governed by Vidyavya’s Refund and Cancellation Policy</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Career Support and Outcomes</h2>
                        <p>
                            Vidyavya provides training, mentorship, and career support to improve employability. However:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>We do not guarantee job placements or specific compensation</li>
                            <li>Hiring decisions are made solely by partner companies</li>
                            <li>Career outcomes depend on individual performance, effort, and market conditions</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Intellectual Property</h2>
                        <p>
                            All content on the Vidyavya website and within its programs, including text, videos, materials, logos, and branding, is the intellectual property of Vidyavya.
                        </p>
                        <p className="mt-2">
                            You may not copy, distribute, modify, or reuse any content without prior written permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Third-Party Partners</h2>
                        <p>
                            Vidyavya may collaborate with companies, colleges, or service providers. We are not responsible for:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Actions, decisions, or policies of third-party partners</li>
                            <li>Outcomes of interviews, hiring processes, or external engagements</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Limitation of Liability</h2>
                        <p>
                            Vidyavya is not liable for any indirect, incidental, or consequential damages arising from:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Use or inability to use the website or services</li>
                            <li>Delays, interruptions, or technical issues</li>
                            <li>Career or employment outcomes</li>
                        </ul>
                        <p className="mt-2">All services are provided on an “as is” basis.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Privacy</h2>
                        <p>
                            Your use of Vidyavya is also governed by our Privacy Policy, which explains how we collect and handle your personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Changes to Terms</h2>
                        <p>
                            Vidyavya may update these Terms of Service at any time. Updated terms will be posted on this page, and continued use of the website or services indicates acceptance of the revised terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Governing Law</h2>
                        <p>
                            These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of the courts in India.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Contact Us</h2>
                        <p>
                            If you have questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
