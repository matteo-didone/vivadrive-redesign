import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRightCircle,
    Zap,
    CheckSquare,
    Settings,
    ChevronRight,
    Battery,
    MapPin,
    TrendingUp
} from 'lucide-react';

const FleetElectrificationSections = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="bg-white">
            {/* Section 1: Find out the best EV options for you */}
            <section className="py-24 overflow-hidden border-b border-gray-100 relative">
                {/* Background elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50 opacity-50 rounded-l-full transform -translate-x-1/4" />
                <div className="absolute -top-16 -left-16 w-40 h-40 bg-emerald-100 rounded-full opacity-20" />
                <div className="absolute bottom-24 right-0 w-24 h-24 bg-yellow-300 rounded-full opacity-20" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content Column */}
                        <motion.div
                            className="space-y-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerChildren}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-2"
                                variants={itemVariant}
                            >
                                <Zap className="h-4 w-4" />
                                <span>EV Fleet Transition</span>
                            </motion.div>

                            <motion.h2
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                                variants={itemVariant}
                            >
                                Find out the best
                                <span className="text-emerald-500"> EV options </span>
                                for your fleet
                            </motion.h2>

                            <motion.p
                                className="text-lg text-gray-600"
                                variants={itemVariant}
                            >
                                We will take into account your operational needs. We will test EV feasibility in
                                different roads and in different weather conditions. We will also assess your
                                charging and EV infrastructure needs.
                            </motion.p>

                            <motion.div
                                className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100"
                                variants={itemVariant}
                            >
                                <p className="text-gray-700 font-medium">
                                    The result: A comprehensive recommendation showing which vehicles can be replaced by EVs,
                                    which drivers are suitable, and what charging infrastructure gaps need to be addressed.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariant}>
                                <motion.button
                                    whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
                                >
                                    Learn More
                                    <ChevronRight className="h-5 w-5" />
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Image Column with Device Mockup */}
                        <motion.div
                            className="relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeIn}
                        >
                            <div className="relative">
                                {/* Main image with pseudo-3D effect */}
                                <motion.div
                                    className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-xl shadow-2xl transform perspective-md group"
                                    whileHover={{ y: -5, rotateY: 5, rotateX: 2 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src="/fleet-electrification/ev-recommended.png"
                                        alt="Recommended EVs"
                                        className="w-full h-auto rounded-lg"
                                    />

                                    {/* Decorative elements */}
                                    <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-emerald-500 rounded-full opacity-20 blur-xl" />
                                </motion.div>

                                {/* Floating elements */}
                                <motion.div
                                    className="absolute -bottom-10 -left-10 p-2 bg-white rounded-lg shadow-xl"
                                    initial={{ opacity: 0, x: -20, y: 20 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                >
                                    <div className="flex items-center gap-2 p-2">
                                        <Battery className="h-10 w-10 text-emerald-500" />
                                        <div>
                                            <div className="font-bold text-emerald-500">95%</div>
                                            <div className="text-xs text-gray-500">EV reliability</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="absolute -top-8 -right-6 p-2 bg-white rounded-lg shadow-xl"
                                    initial={{ opacity: 0, x: 20, y: -20 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                >
                                    <div className="text-sm font-medium text-gray-800 px-3 py-1">
                                        <span className="text-emerald-500">17% </span>
                                        reduced CO₂
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Deploy the ideal EV infrastructure */}
            <section className="py-24 overflow-hidden bg-gray-50 border-b border-gray-100 relative">
                {/* Background elements */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-200 rounded-full opacity-20" />
                <div className="absolute bottom-16 left-0 w-32 h-32 bg-yellow-100 rounded-full opacity-30" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image Column - On the left for this section */}
                        <motion.div
                            className="relative order-2 lg:order-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeIn}
                        >
                            <div className="relative">
                                {/* Main image with pseudo-3D effect */}
                                <motion.div
                                    className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-xl shadow-2xl transform perspective-md"
                                    whileHover={{ y: -5, rotateY: -5, rotateX: 2 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src="/fleet-electrification/chargers.png"
                                        alt="EV Charging Infrastructure"
                                        className="w-full h-auto rounded-lg"
                                    />

                                    {/* Decorative elements */}
                                    <div className="absolute -top-3 -left-3 w-24 h-24 bg-emerald-500 rounded-full opacity-20 blur-xl" />
                                </motion.div>

                                {/* Floating elements */}
                                <motion.div
                                    className="absolute -bottom-8 right-8 p-3 bg-white rounded-lg shadow-xl"
                                    initial={{ opacity: 0, x: 20, y: 20 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-6 w-6 text-emerald-500" />
                                        <div className="text-sm font-medium text-gray-800">
                                            Optimal locations
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Content Column - On the right for this section */}
                        <motion.div
                            className="space-y-6 order-1 lg:order-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerChildren}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-2"
                                variants={itemVariant}
                            >
                                <MapPin className="h-4 w-4" />
                                <span>Charging Network</span>
                            </motion.div>

                            <motion.h2
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                                variants={itemVariant}
                            >
                                Deploy the
                                <span className="text-emerald-500"> ideal infrastructure </span>
                                for your fleet
                            </motion.h2>

                            <motion.p
                                className="text-lg text-gray-600"
                                variants={itemVariant}
                            >
                                VivaDrive will allow you to design and implement a cost effective EV charging
                                infrastructure for your EV fleet - we will assess charging site suitability and
                                estimate the cost of infrastructure installation.
                            </motion.p>

                            <motion.div
                                className="space-y-4 pt-2"
                                variants={itemVariant}
                            >
                                <motion.div
                                    className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                                        <CheckSquare className="text-emerald-500 h-5 w-5 flex-shrink-0" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Home location charging solutions</span>
                                </motion.div>

                                <motion.div
                                    className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                                        <CheckSquare className="text-emerald-500 h-5 w-5 flex-shrink-0" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Office location optimization</span>
                                </motion.div>

                                <motion.div
                                    className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                                        <CheckSquare className="text-emerald-500 h-5 w-5 flex-shrink-0" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Public charging station mapping</span>
                                </motion.div>

                                <motion.div
                                    className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                                        <CheckSquare className="text-emerald-500 h-5 w-5 flex-shrink-0" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Stop location analysis for 45+ minutes</span>
                                </motion.div>
                            </motion.div>

                            <motion.div variants={itemVariant}>
                                <motion.button
                                    whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
                                >
                                    Learn More
                                    <ChevronRight className="h-5 w-5" />
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Manage everything in one place */}
            <section className="py-24 overflow-hidden relative">
                {/* Background elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-16 left-16 w-64 h-64 bg-emerald-100 rounded-full opacity-20 blur-xl" />
                    <div className="absolute bottom-32 right-32 w-48 h-48 bg-yellow-200 rounded-full opacity-15 blur-xl" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content Column */}
                        <motion.div
                            className="space-y-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerChildren}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-2"
                                variants={itemVariant}
                            >
                                <Settings className="h-4 w-4" />
                                <span>Unified Management</span>
                            </motion.div>

                            <motion.h2
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                                variants={itemVariant}
                            >
                                Manage
                                <span className="text-emerald-500"> everything </span>
                                in one place
                            </motion.h2>

                            <motion.p
                                className="text-lg text-gray-600"
                                variants={itemVariant}
                            >
                                Manage your combustion engine and electric vehicles in one place. Track where,
                                when and how they are being used, Manage your EV fleet including cost optimization,
                                charging management and route optimization.
                            </motion.p>

                            <motion.div
                                className="p-4 bg-emerald-50 rounded-lg border border-emerald-100"
                                variants={itemVariant}
                            >
                                <p className="text-gray-700 font-medium">
                                    Learn how to effectively reduce costs with help of Big Data and our AI technologies
                                    that optimize fleet operations in real-time.
                                </p>
                            </motion.div>

                            <motion.div
                                className="space-y-4 pt-2"
                                variants={itemVariant}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <motion.div
                                        className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                                            <Settings className="text-emerald-500 h-5 w-5 flex-shrink-0" />
                                        </div>
                                        <span className="text-gray-700 font-medium">Fleet management</span>
                                    </motion.div>

                                    <motion.div
                                        className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                                            <Zap className="text-emerald-500 h-5 w-5 flex-shrink-0" />
                                        </div>
                                        <span className="text-gray-700 font-medium">Charging management</span>
                                    </motion.div>

                                    <motion.div
                                        className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                                            <ArrowRightCircle className="text-emerald-500 h-5 w-5 flex-shrink-0" />
                                        </div>
                                        <span className="text-gray-700 font-medium">Route optimization</span>
                                    </motion.div>

                                    <motion.div
                                        className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                                            <TrendingUp className="text-emerald-500 h-5 w-5 flex-shrink-0" />
                                        </div>
                                        <span className="text-gray-700 font-medium">Cost analytics</span>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariant}>
                                <motion.button
                                    whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
                                >
                                    Learn More
                                    <ChevronRight className="h-5 w-5" />
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Image Column */}
                        <motion.div
                            className="relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeIn}
                        >
                            <div className="relative">
                                {/* Main image with pseudo-3D effect */}
                                <motion.div
                                    className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-xl shadow-2xl transform perspective-md"
                                    whileHover={{ y: -5, rotateY: 5, rotateX: -2 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src="/fleet-electrification/laptop.png"
                                        alt="Fleet Management Dashboard"
                                        className="w-full h-auto rounded-lg"
                                    />

                                    {/* Decorative elements */}
                                    <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-emerald-500 rounded-full opacity-20 blur-xl" />
                                </motion.div>

                                {/* Floating stats card */}
                                <motion.div
                                    className="absolute -bottom-6 -left-6 p-4 bg-white rounded-lg shadow-xl"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                >
                                    <div className="flex flex-col">
                                        <div className="text-xs text-gray-500 mb-1">Cost Reduction</div>
                                        <div className="text-2xl font-bold text-emerald-500">27%</div>
                                        <div className="w-24 h-2 bg-gray-100 rounded-full mt-2">
                                            <div className="w-3/4 h-full bg-emerald-500 rounded-full" />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating notification */}
                                <motion.div
                                    className="absolute -top-4 right-8 p-3 bg-white rounded-lg shadow-xl flex items-center gap-2"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                >
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                                    <div className="text-sm font-medium text-gray-800">Real-time updates</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FleetElectrificationSections;