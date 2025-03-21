import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Quote, Linkedin } from 'lucide-react';

const InternTestimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    
    // Create refs for navigation buttons
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    // Detect if we're on a mobile device
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const testimonials = [
        {
            name: "Patrik Zigó",
            position: "Full Stack Developer Intern",
            photo: "/internships/testimonials/Patrik.jpg",
            quote: "Joining VivaDrive as a full stack intern has been transformative for my career. The opportunity to work across the entire technology stack allowed me to discover my strengths and develop a holistic understanding of software development that would have taken years to gain elsewhere.",
            country: "Slovakia",
            flag: "🇸🇰",
            linkedin: "https://www.linkedin.com/in/patrik-zig%C3%B3-420430319/"
        },
        {
            name: "Matteo Didonè",
            position: "Frontend Developer Intern",
            photo: "/internships/testimonials/Matteo.png",
            quote: "Time flies when you really enjoy what you do! Came to VivaDrive as a frontend intern to learn and gain experience. The flexible working culture and exploration-friendly environment made me move towards new challenges and grow as a developer.",
            country: "Italy",
            flag: "🇮🇹",
            linkedin: "https://www.linkedin.com/in/matteo-didon%C3%A8-477b4b290/"
        },
        {
            name: "Gabriele Michelli",
            position: "Data Science Intern",
            photo: "/internships/testimonials/Gabriele.jpg",
            quote: "The best decision I ever made was to join VivaDrive as a data science intern. I learned a lot and a bit of everything, more than I asked for. I had space to learn, practice, and evolve as a professional in the data science field.",
            country: "Italy",
            flag: "🇮🇹",
            linkedin: "https://www.linkedin.com/in/gabriele-michelli-99051430b/"
        },
        {
            name: "Giovanni Podbersig",
            position: "AI Developer Intern",
            photo: "/internships/testimonials/Giovanni.jpg",
            quote: "I joined VivaDrive as an AI developer intern. It allowed me to gain so much practical experience on real projects that today I continue my AI development career thanks to this decision.",
            country: "Italy",
            flag: "🇮🇹",
            linkedin: "https://www.linkedin.com/in/giovanni-podbersig-8449ba1a4/"
        },
        {
            name: "Christina Metalouli",
            position: "Data Science Intern",
            photo: "/internships/testimonials/Christina.jpg",
            quote: "Every day starts with new technical challenges and new objectives. I discovered my true passion for data science at VivaDrive which showed my impact on real-world data projects.",
            country: "Greece",
            flag: "🇬🇷",
            linkedin: "https://www.linkedin.com/in/cmetalouli/"
        },
        {
            name: "Gonçalo Lopes",
            position: "Backend Developer Intern",
            photo: "/internships/testimonials/Gonçalo.jpg",
            quote: "Working at VivaDrive as a backend developer intern has been an incredible journey. The collaborative environment and hands-on approach have helped me develop both my technical skills and understanding of server-side architecture.",
            country: "Portugal",
            flag: "🇵🇹",
            linkedin: "https://www.linkedin.com/in/goncalo-lopes-8008732b4/"
        },
        {
            name: "Dorian Peltier",
            position: "Frontend Developer Intern",
            photo: "/internships/testimonials/Dorian.jpg",
            quote: "My experience as a frontend developer intern at VivaDrive has been truly enriching. Being part of a collaborative team and working on real-world projects has deepened my expertise in building dynamic user interfaces and refining client-side architecture.",
            country: "France",
            flag: "🇫🇷",
            linkedin: "https://www.linkedin.com/in/dorian-peltier-47684624b/"
        }
    ];

    // Auto advance slides
    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [autoplay, testimonials.length]);

    // Enhanced navigation functions with debounce to prevent rapid clicking
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleSlideChange = (newIndex) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setAutoplay(false);
        setCurrentSlide(newIndex);

        // Reset transition state after animation completes
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500); // Match duration with animation timing

        // Riattiva l'autoplay dopo 8 secondi di inattività
        setTimeout(() => {
            setAutoplay(true);
        }, 8000);
    };

    const nextSlide = () => {
        handleSlideChange((currentSlide + 1) % testimonials.length);
    };

    const prevSlide = () => {
        handleSlideChange((currentSlide - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index) => {
        handleSlideChange(index);
    };

    // Animation variants
    const slideVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.5 } }
    };

    // Mobile-specific swipe handlers
    const handleDragStart = (e) => {
        if (!isMobile) return;
        const touch = e.touches[0];
        dragStartX.current = touch.clientX;
    };

    const handleDragEnd = (e) => {
        if (!isMobile) return;
        const touch = e.changedTouches[0];
        const dragEndX = touch.clientX;
        const dragThreshold = 50;
        const dragDifference = dragStartX.current - dragEndX;
        
        if (Math.abs(dragDifference) > dragThreshold) {
            if (dragDifference > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    };
    
    const dragStartX = useRef(0);

    // RENDER TWO DIFFERENT LAYOUTS BASED ON SCREEN SIZE
    
    // 1. MOBILE LAYOUT - Simplified for better mobile experience
    const MobileLayout = () => (
        <div className="max-w-6xl mx-auto mb-10">
            {/* Mobile Carousel */}
            <div className="relative">
                {/* Simplified structure for mobile */}
                <div 
                    className="mb-8"
                    onTouchStart={handleDragStart}
                    onTouchEnd={handleDragEnd}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`transition-opacity duration-500 ${currentSlide === index ? 'block opacity-100' : 'hidden opacity-0'}`}
                        >
                            <div className="flex flex-col space-y-6">
                                {/* Quote Box */}
                                <div className="rounded-lg border border-gray-100/80 bg-white/80 backdrop-blur-sm p-5 shadow-md">
                                    <div className="h-2.5 w-full bg-gradient-to-r from-[#13A661] to-[#12AC6C] absolute top-0 left-0"></div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#13A661] to-[#12AC6C] shadow-lg p-2.5">
                                            <Quote className="h-5 w-5 text-white" />
                                        </div>
                                        <div className="text-2xl" title={testimonial.country}>
                                            {testimonial.flag}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-base text-gray-600 mb-5 italic">
                                            "{testimonial.quote}"
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="text-lg font-bold">{testimonial.name}</h4>
                                                <p className="text-emerald-600 text-sm">{testimonial.position}</p>
                                            </div>
                                            {testimonial.linkedin && (
                                                <a 
                                                    href={testimonial.linkedin} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
                                                    aria-label={`Visit ${testimonial.name}'s LinkedIn profile`}
                                                >
                                                    <Linkedin className="h-5 w-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Photo Card - No rotation on mobile */}
                                <div className="mx-auto max-w-sm">
                                    <div className="bg-white/80 p-3 rounded-2xl shadow-xl mx-auto">
                                        <div className="overflow-hidden rounded-xl aspect-[3/4] border-4 border-white shadow-inner relative">
                                            <img
                                                src={testimonial.photo}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover object-center"
                                            />
                                            {/* Flag in the corner */}
                                            <div className="absolute top-3 right-3 bg-white rounded-full shadow-lg p-2 z-10">
                                                <div className="text-xl" title={testimonial.country}>
                                                    {testimonial.flag}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dot indicators proper positioning for mobile */}
                <div className="flex justify-center mt-2 mb-16">
                    <div className="flex space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`rounded-full transition-all duration-300 cursor-pointer shadow ${
                                    currentSlide === index
                                        ? 'bg-gradient-to-r from-[#13A661] to-[#15BF70] w-6 h-3'
                                        : 'bg-gray-300 w-3 h-3 hover:bg-emerald-400'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-pressed={currentSlide === index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
    
    // 2. DESKTOP LAYOUT - Original complex layout with more styling
    const DesktopLayout = () => (
        <div className="max-w-6xl mx-auto mb-16">
            <div className="relative">
                {/* Testimonial slides with fixed height */}
                <div className="min-h-[450px] lg:min-h-[400px] relative">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate={currentSlide === index ? "visible" : "hidden"}
                            variants={slideVariants}
                            className={`absolute inset-0 ${currentSlide === index ? 'z-10' : '-z-10'}`}
                        >
                            <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                                {/* Photo */}
                                <div className="order-1">
                                    <div className="relative mx-auto">
                                        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-3 rounded-2xl shadow-xl transform rotate-3 mx-auto max-w-sm">
                                            <div className="overflow-hidden rounded-xl aspect-[3/4] border-4 border-white shadow-inner relative">
                                                <img
                                                    src={testimonial.photo}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                                                />
                                                {/* Flag in the corner */}
                                                <div className="absolute top-3 right-3 bg-white rounded-full shadow-lg p-2 transform rotate-3 z-10">
                                                    <div className="text-2xl" title={testimonial.country}>
                                                        {testimonial.flag}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-50 rounded-full -z-10 opacity-80"></div>
                                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-50 rounded-full -z-10 opacity-80"></div>
                                    </div>
                                </div>

                                {/* Quote */}
                                <div className="order-2">
                                    <div className="rounded-lg border text-card-foreground shadow-sm bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-gray-100/80 dark:border-gray-800/80 p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-opacity-80 hover:border-emerald-600/30 dark:hover:border-emerald-600/20 relative group">
                                        <div className="h-2.5 w-full bg-gradient-to-r from-[#13A661] to-[#12AC6C] absolute top-0 left-0"></div>
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#13A661] to-[#12AC6C] shadow-lg p-3 transition-all duration-300 group-hover:shadow-xl">
                                                <Quote className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="text-3xl" title={testimonial.country}>
                                                {testimonial.flag}
                                            </div>
                                        </div>
                                        <div className="relative z-10">
                                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 italic relative z-10">
                                                "{testimonial.quote}"
                                            </p>
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <h4 className="text-xl md:text-2xl font-bold group-hover:text-emerald-600 transition-colors">{testimonial.name}</h4>
                                                    <p className="text-emerald-600">{testimonial.position}</p>
                                                </div>
                                                {testimonial.linkedin && (
                                                    <a 
                                                        href={testimonial.linkedin} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="p-2 text-blue-600 hover:text-blue-800 transition-colors bg-white/80 rounded-full shadow-md hover:shadow-lg"
                                                        aria-label={`Visit ${testimonial.name}'s LinkedIn profile`}
                                                    >
                                                        <Linkedin className="h-6 w-6" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation buttons - Fixed position at the bottom of the container */}
                <div className="flex justify-between items-center py-6 mt-4">
                    {/* Dot indicators with increased size for better clickability */}
                    <div className="flex space-x-3 relative z-20">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center shadow relative z-20 ${currentSlide === index
                                        ? 'bg-gradient-to-r from-[#13A661] to-[#15BF70] w-8 h-3'
                                        : 'bg-gray-300 w-3 h-3 hover:bg-emerald-400'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-pressed={currentSlide === index}
                                tabIndex={0}
                                style={{ minWidth: '12px', minHeight: '12px' }}
                            />
                        ))}
                    </div>

                    <div className="flex space-x-4">
                        <button
                            type="button"
                            ref={prevButtonRef}
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white flex items-center justify-center hover:shadow-lg transition-all duration-300 shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 cursor-pointer z-50 relative"
                            aria-label="Previous testimonial"
                            tabIndex={0}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            type="button"
                            ref={nextButtonRef}
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white flex items-center justify-center hover:shadow-lg transition-all duration-300 shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 cursor-pointer z-50 relative"
                            aria-label="Next testimonial"
                            tabIndex={0}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-12 md:py-20 bg-gradient-to-br from-white to-emerald-50/50 overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-200 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute bottom-20 left-20 w-40 h-40 bg-emerald-300 rounded-full opacity-10 blur-lg"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%">
                        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10" data-testid="testimonial-container">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
                    <div className="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-emerald-600/10 text-emerald-600 border-emerald-600/20 hover:bg-emerald-600/20 py-1.5 px-4 text-sm font-medium">
                        Our People
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 md:mb-6 bg-gradient-to-r from-gray-900 to-emerald-600 dark:from-white dark:to-emerald-400 bg-clip-text text-transparent">
                        From Interns to Innovators
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-xl">
                        Our interns grow into leaders, bringing fresh perspectives and innovative solutions to VivaDrive.
                    </p>
                </div>

                {/* Conditional rendering based on screen size */}
                {isMobile ? <MobileLayout /> : <DesktopLayout />}

                {/* Call to Action - Clear separation from the carousel */}
                <div className="text-center max-w-2xl mx-auto pt-4 md:pt-0">
                    <p className="text-emerald-600 text-lg md:text-xl font-medium mb-6 md:mb-8">
                        Interested in joining our intern program?
                    </p>
                    <a
                        href="/internship-opportunities"
                        className="inline-flex items-center text-sm px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        View Opportunities
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InternTestimonials;