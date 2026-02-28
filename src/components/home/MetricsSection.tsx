import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const metrics = [
    { value: '100+', label: 'Students Trained' },
    { value: '6,000+', label: 'Hours of Hands-On Training' },
    { value: '55+', label: 'Students Placed' },
    { value: '20+', label: 'Students in Live Industry Projects' },
];

const AnimatedCounter = ({ value }: { value: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Extract numeric value and suffix (e.g. "6,000+" -> 6000 and "+")
    const numericPart = value.replace(/[^0-9]/g, '');
    const suffixPart = value.replace(/[0-9,]/g, '');
    const target = parseInt(numericPart, 10);

    useEffect(() => {
        if (!isInView) return;

        let startTimestamp: number;
        const duration = 2000; // 2 seconds

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // easeOutQuart easing function for rapid start and slow finish
            const easeOut = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOut * target);

            setCount(currentCount);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        };

        window.requestAnimationFrame(step);
    }, [isInView, target]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffixPart}
        </span>
    );
};

const MetricsSection = () => {
    return (
        <section className="py-12 md:py-16 bg-[#FF5757] overflow-hidden">
            <style>{`
                @keyframes mobileScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-mobile-scroll {
                    animation: mobileScroll 20s linear infinite;
                    width: max-content;
                }
                .animate-mobile-scroll:hover, .animate-mobile-scroll:active {
                    animation-play-state: paused;
                }
            `}</style>
            <div className="container-custom max-w-7xl mx-auto px-0 md:px-4">

                {/* Desktop Grid Layout (Hidden on Mobile) */}
                <div className="hidden md:grid md:grid-cols-4 w-full text-white divide-x divide-white/20">
                    {metrics.map((metric, index) => (
                        <div key={`desktop-${index}`} className="flex flex-col items-center justify-center text-center px-4 py-2 h-full">
                            <p className="font-heading text-5xl font-bold text-white mb-2">
                                <AnimatedCounter value={metric.value} />
                            </p>
                            <p className="font-heading text-base font-bold text-white uppercase tracking-wider">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile Infinite Scroll Layout (Hidden on Desktop) */}
                <div className="md:hidden overflow-hidden w-full relative">
                    <div className="flex animate-mobile-scroll">
                        {[...metrics, ...metrics].map((metric, index) => (
                            <div key={`mobile-${index}`} className="flex flex-col items-center justify-center text-center px-4 py-8 h-full shrink-0 w-[55vw]">
                                <p className="font-heading text-4xl font-bold text-white mb-2">
                                    <AnimatedCounter value={metric.value} />
                                </p>
                                <p className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                                    {metric.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MetricsSection;
