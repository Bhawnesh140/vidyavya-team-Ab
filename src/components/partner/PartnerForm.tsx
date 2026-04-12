
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, Building2, User } from 'lucide-react';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
    orgName: z.string().min(2, 'Organization name must be at least 2 characters'),
    orgType: z.enum(['company', 'college'], {
        required_error: 'Please select an organization type',
    }),
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    designation: z.string().min(2, 'Designation is required'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    email: z.string().email('Please enter a valid email address'),
});

type FormValues = z.infer<typeof formSchema>;

interface PartnerFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const PartnerForm = ({ open, onOpenChange }: PartnerFormProps) => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            orgName: '',
            fullName: '',
            designation: '',
            phone: '',
            email: '',
        },
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Form submitted:', data);
        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset after showing success for a moment
        setTimeout(() => {
            setIsSuccess(false);
            setStep(1);
            form.reset();
            onOpenChange(false);
        }, 10000);
    };

    const nextStep = async () => {
        const fieldsToValidate = step === 1 ? ['orgName', 'orgType'] : [];
        // @ts-ignore - trigger expects field names but types are tricky with dynamic lists
        const isValid = await form.trigger(fieldsToValidate as any);
        if (isValid) {
            setStep(2);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden gap-0">
                <div className="bg-primary/5 p-6 border-b">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-heading text-primary">Partner With Us</DialogTitle>
                        <DialogDescription className="text-base mt-2">
                            Join us in shaping the next generation of industry-ready tech talent.
                        </DialogDescription>
                    </DialogHeader>

                    {/* Progress Steps */}
                    {!isSuccess && (
                        <div className="flex items-center gap-2 mt-6">
                            <div className={`h-2 flex-1 rounded-full transition-colors ${step >= 1 ? 'bg-primary' : 'bg-muted'}`} />
                            <div className={`h-2 flex-1 rounded-full transition-colors ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
                        </div>
                    )}
                </div>

                <div className="p-6">
                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center py-8 text-center"
                        >
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle2 className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Thank You!</h3>
                            <p className="text-muted-foreground">
                                We've received your details. Our team will get back to you shortly.
                            </p>
                        </motion.div>
                    ) : (
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <AnimatePresence mode="wait">
                                    {step === 1 ? (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ duration: 0.2 }}
                                            className="space-y-4"
                                        >
                                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                                                <Building2 className="w-4 h-4" />
                                                <span>Organization Details</span>
                                            </div>

                                            <FormField
                                                control={form.control}
                                                name="orgName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Organisation Name*</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter organization name" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="orgType"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Organisation Type*</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Choose an option" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="company">Company</SelectItem>
                                                                <SelectItem value="college">College</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <div className="pt-4 flex justify-end">
                                                <Button type="button" onClick={nextStep} className="w-full">
                                                    Next
                                                </Button>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.2 }}
                                            className="space-y-4"
                                        >
                                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                                                <User className="w-4 h-4" />
                                                <span>Contact Person Details</span>
                                            </div>

                                            <FormField
                                                control={form.control}
                                                name="fullName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Full Name*</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter your full name" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="designation"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Designation*</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter your designation" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Phone Number*</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter phone number" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email*</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter email address" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <div className="pt-4 flex gap-3">
                                                <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                                                    Back
                                                </Button>
                                                <Button type="submit" className="flex-1" disabled={isSubmitting}>
                                                    {isSubmitting ? (
                                                        <>
                                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                            Submitting...
                                                        </>
                                                    ) : (
                                                        'Submit'
                                                    )}
                                                </Button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </Form>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PartnerForm;
