import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection = () => {
    const features = [
        {
            id: 1,
            title: "Replace your cars",
            description: "See which cars can be replaced by EVs and how many replacement options there are available.",
            icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
                    <path fill="currentColor" d="M16,6L19,10H21C22.11,10 23,10.89 23,12V15H21A3,3 0 0,1 18,18A3,3 0 0,1 15,15H9A3,3 0 0,1 6,18A3,3 0 0,1 3,15H1V12C1,10.89 1.89,10 3,10L6,6H16M10.5,7.5H6.75L4.86,10H10.5V7.5M12,7.5V10H17.14L15.25,7.5H12M6,13.5A1.5,1.5 0 0,0 4.5,15A1.5,1.5 0 0,0 6,16.5A1.5,1.5 0 0,0 7.5,15A1.5,1.5 0 0,0 6,13.5M18,13.5A1.5,1.5 0 0,0 16.5,15A1.5,1.5 0 0,0 18,16.5A1.5,1.5 0 0,0 19.5,15A1.5,1.5 0 0,0 18,13.5Z" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Find the best charging strategy",
            description: "Check out how to deploy your EV charging infrastructure such that you can still perform your transportation tasks and you extend EV battery life resulting in higher resell value. ($, ❤️)",
            icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
                    <path fill="currentColor" d="M19.77,7.23L19.78,7.22L16.06,3.5L15,4.56L17.11,6.67C16.17,7.03 15.5,7.93 15.5,9A2.5,2.5 0 0,0 18,11.5C19.07,11.5 20,10.83 20.36,9.89L21.67,11.2L22.73,10.13L21.67,9.08L22.73,8.03L21.67,6.97L22.73,5.92L21.67,4.87L20.62,5.92L19.57,4.87L18.52,5.92L17.47,4.87L16.42,5.92L17.47,6.97L16.42,8.03L17.47,9.08L18.52,8.03L19.57,9.08L18.52,10.13L19.57,11.2L18.53,12.23L19.58,13.28L18.53,14.33L19.58,15.38L20.63,14.33L21.68,15.38L22.73,14.33L21.68,13.28L22.73,12.23L21.68,11.18L19.77,7.23M17,10A1,1 0 0,1 16,9A1,1 0 0,1 17,8A1,1 0 0,1 18,9A1,1 0 0,1 17,10M7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12H7M12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5Z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Build an EV deployment plan",
            description: "We will prepare for you a personalized EV deployment and business and we make sure that your new EV fleet will allow you to save money in a long term and meet sustainability criteria.",
            icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
                    <path fill="currentColor" d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7M12,17V15H17V17H12M12,11V9H17V11H12M8,9V11H10V9H8M8,15V17H10V15H8" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Manage EV fleet and reduce TCO",
            description: "Our fleet management tools can manage your hybrid fleet consisting of traditional combustion engine cars as well as electric ones. We will make sure that your EV fleet can operate effective thanks to our charging planning tool and EV route optimization.🏆",
            icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
                    <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />
                </svg>
            )
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="w-full py-24 bg-gradient-to-b from-[#e4f7ef] to-[#f0faf6] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Background decoration elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-emerald-300/10 to-emerald-500/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/4"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-400/10 to-emerald-600/5 rounded-full blur-3xl -z-10 transform translate-x-1/3 translate-y-1/4"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 mx-auto text-center"
                >
                    <span className="text-emerald-500 text-xl font-medium mb-3 inline-block">Made to make you productive</span>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
                        Discover your fleet's
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600 block mt-1">
                            full potential!
                        </span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            variants={item}
                            className="group border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
                        >
                            <div className="flex justify-center mb-8">
                                <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-md shadow-emerald-500/10 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300 group-hover:scale-105">
                                    {feature.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors text-center mx-auto">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Decorative dots pattern */}
                <div className="absolute bottom-12 left-0 hidden lg:block opacity-10">
                    <div className="grid grid-cols-6 gap-2">
                        {[...Array(24)].map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;