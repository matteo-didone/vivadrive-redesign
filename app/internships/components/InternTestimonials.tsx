import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';

const InternTestimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    const testimonials = [
        {
            name: "Matteo Didonè",
            position: "Frontend Developer",
            photo: "/internships/testimonials/Matteo.png",
            quote: "Time flies when you really enjoy what you do! Came to VivaDrive as a frontend intern to learn and gain experience. The flexible working culture and exploration-friendly environment made me move towards new challenges and grow as a developer.",
        },
        {
            name: "Gabriele Michelli",
            position: "Data Science Intern",
            photo: "/internships/testimonials/Gabriele.jpg",
            quote: "The best decision I ever made was to join VivaDrive as a data science intern. I learned a lot and a bit of everything, more than I asked for. I had space to learn, practice, and evolve as a professional in the data science field.",
        },
        {
            name: "Giovanni Podbersig",
            position: "AI Developer Intern",
            photo: "/internships/testimonials/Giovanni.jpg",
            quote: "I joined VivaDrive as an AI developer intern. It allowed me to gain so much practical experience on real projects that today I continue my AI development career thanks to this decision.",
        },
        {
            name: "Christina Metalouli",
            position: "Data Science Intern",
            photo: "/internships/testimonials/Christina.jpg",
            quote: "Every day starts with new technical challenges and new objectives. I discovered my true passion for data science at VivaDrive which showed my impact on real-world data projects.",
        },
        {
            name: "Gonçalo Lopes",
            position: "Backend Developer Intern",
            photo: "/internships/testimonials/Gonçalo.jpg",
            quote: "Working at VivaDrive as a backend developer intern has been an incredible journey. The collaborative environment and hands-on approach have helped me develop both my technical skills and understanding of server-side architecture.",
        },
        {
            name: "Dorian Peltier",
            position: "Frontend Developer Intern",
            photo: "/internships/testimonials/Dorian.jpg",
            quote: "My experience as a frontend developer intern at VivaDrive has been truly enriching. Being part of a collaborative team and working on real-world projects has deepened my expertise in building dynamic user interfaces and refining client-side architecture.",
        },
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
        console.log("Next slide clicked");
        handleSlideChange((currentSlide + 1) % testimonials.length);
    };

    const prevSlide = () => {
        console.log("Previous slide clicked");
        handleSlideChange((currentSlide - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index) => {
        console.log("Go to slide", index);
        handleSlideChange(index);
    };

    // Animation variants
    const slideVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.5 } }
    };

    // Create refs for navigation buttons
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    return (
        <section className="py-20 bg-gradient-to-br from-white to-emerald-50 overflow-hidden relative">
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
                <div className="text-center mb-16">
                    <div className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium text-white bg-emerald-600 mb-4">
                        Our People
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                        From <span className="text-emerald-600">Interns</span> to <span className="text-gray-900">Innovators</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our interns grow into leaders, bringing fresh perspectives and innovative solutions to VivaDrive.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto mb-16">
                    <div className="relative">
                        {/* Testimonial slides with fixed height */}
                        <div className="min-h-[550px] md:min-h-[450px] lg:min-h-[400px] relative">
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
                                        <div className="order-2 md:order-1">
                                            <div className="relative mx-auto">
                                                <div className="bg-white p-3 rounded-2xl shadow-xl transform rotate-3 mx-auto max-w-sm">
                                                    <div className="overflow-hidden rounded-xl aspect-[3/4] border-4 border-white shadow-inner">
                                                        <img
                                                            src={testimonial.photo}
                                                            alt={testimonial.name}
                                                            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full -z-10"></div>
                                                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-100 rounded-full -z-10"></div>
                                            </div>
                                        </div>

                                        {/* Quote */}
                                        <div className="order-1 md:order-2">
                                            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
                                                <Quote className="absolute top-4 left-4 h-12 w-12 text-emerald-100" />
                                                <div className="relative z-10">
                                                    <p className="text-lg md:text-xl text-gray-700 mb-6 italic relative z-10">
                                                        "{testimonial.quote}"
                                                    </p>
                                                    <div>
                                                        <h4 className="text-xl md:text-2xl font-bold text-gray-900">{testimonial.name}</h4>
                                                        <p className="text-emerald-600">{testimonial.position}</p>
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
                            {/* MODIFICATO: Aumentato z-index e dimensioni dei dot indicators per renderli più facilmente cliccabili */}
                            <div className="flex space-x-3 relative z-20">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center shadow relative z-20 ${currentSlide === index
                                            ? 'bg-emerald-600 w-8 h-3'
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
                                    className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 cursor-pointer z-50 relative"
                                    aria-label="Previous testimonial"
                                    tabIndex={0}
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                                <button
                                    type="button"
                                    ref={nextButtonRef}
                                    onClick={nextSlide}
                                    className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 cursor-pointer z-50 relative"
                                    aria-label="Next testimonial"
                                    tabIndex={0}
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InternTestimonials;