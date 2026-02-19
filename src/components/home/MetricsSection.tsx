import Section from '@/components/ui/Section';

const metrics = [
    { value: '100+', label: 'Students Trained' },
    { value: '6,000+', label: 'Hours of Hands-On Training' },
    { value: '55+', label: 'Students Placed' },
    { value: '20+', label: 'Students in Live Industry Projects' },
];

const MetricsSection = () => {
    return (
        <section className="py-12 md:py-16 bg-[#FF5757]">
            <div className="container-custom max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 w-full text-white md:divide-x divide-white/20">
                    {metrics.map((metric, index) => (
                        <div key={index} className="flex flex-col items-center justify-center text-center px-4 py-6 md:py-2 h-full">
                            <p className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
                                {metric.value}
                            </p>
                            <p className="font-heading text-sm md:text-base font-bold text-white uppercase tracking-wider">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MetricsSection;
