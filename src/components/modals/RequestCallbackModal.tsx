
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useRequestCallback } from '@/context/RequestCallbackContext';
import { toast } from 'sonner';

const formSchema = z.object({
    firstName: z.string().trim().min(1, 'First Name is required'),
    lastName: z.string().trim().min(1, 'Last Name is required'),
    email: z.string().trim().min(1, 'Email Address is required').regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address.'),
    phone: z.string().trim().regex(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits.'),
    degree: z.string().min(1, 'Please select your qualification'),
    description: z.string().min(1, 'Please select an option'),
});

const RequestCallbackModal = () => {
    const { isOpen, closeModal } = useRequestCallback();
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            degree: '',
            description: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);

        const formData = {
            firstName: values.firstName.trim(),
            lastName: values.lastName.trim(),
            email: values.email ? values.email.trim() : '',
            phone: values.phone.trim(),
            degree: values.degree,
            description: values.description
        };

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbyucUbxhj89icCPL6JwgVN32sP82Nwenc_usLT7rTzWkgzEQVPc8hVy8kQ47HPPNokj/exec", {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8", // Use text/plain to avoid CORS preflight issues with GAS
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.status === "success") {
                console.log('Form Submitted:', values);
                toast.success('Request submitted! We will call you back shortly.');
                form.reset();
                closeModal();
            } else {
                console.error("Submission error:", data);
                toast.error('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error('Failed to submit. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-xl md:text-2xl text-center font-heading text-foreground">
                        Request a CallBack
                    </DialogTitle>
                    <DialogDescription className="text-center font-body text-muted-foreground mt-2">
                        Want to understand if Vidyavya is right for you? <br />
                        Share your details and we'll call you back shortly.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-body text-foreground">First Name*</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter first name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-body text-foreground">Last Name*</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter last name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-body text-foreground">Email Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter email address" type="email" {...field} />
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
                                    <FormLabel className="font-body text-foreground">Phone Number*</FormLabel>
                                    <FormControl>
                                        <div className="flex">
                                            <div className="flex items-center justify-center px-3 border border-r-0 border-input bg-muted rounded-l-md text-muted-foreground text-sm font-medium">
                                                +91
                                            </div>
                                            <Input
                                                placeholder="Enter phone number"
                                                className="rounded-l-none"
                                                {...field}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="degree"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-body text-foreground">Qualification*</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Qualification" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="B.Tech">B.Tech</SelectItem>
                                            <SelectItem value="M.Tech">M.Tech</SelectItem>
                                            <SelectItem value="BCA">BCA</SelectItem>
                                            <SelectItem value="MCA">MCA</SelectItem>
                                            <SelectItem value="B.Sc">B.Sc</SelectItem>
                                            <SelectItem value="Other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-body text-foreground">What Best Describes You?*</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Option" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="student">I'm a Student</SelectItem>
                                            <SelectItem value="working">I'm Working</SelectItem>
                                            <SelectItem value="job_seeker">I've Graduated and Looking for Work</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full mt-4" variant="cta" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Submitting
                                </>
                            ) : (
                                'Request Callback'
                            )}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default RequestCallbackModal;
