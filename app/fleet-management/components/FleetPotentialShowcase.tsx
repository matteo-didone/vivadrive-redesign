import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const FleetPotentialShowcase = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const featureCardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100/50 py-16">
            {/* Background decorative elements */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-100 rounded-full opacity-30 blur-lg" />
            <div className="absolute bottom-40 right-20 w-32 h-32 bg-yellow-100 rounded-full opacity-30 blur-lg" />

            {/* Showcase intro section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium mb-4">
                        <span>Fleet Optimization</span>
                    </div>
                </div>

                <motion.div
                    className="text-center space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.p className="text-xl md:text-2xl text-emerald-600 font-medium" variants={itemVariants}>
                        Made to make you productive
                    </motion.p>

                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                        variants={itemVariants}
                    >
                        Discover your fleet's <span className="text-emerald-500">full potential!</span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className="pt-4">
                        <motion.button
                            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20 text-lg"
                        >
                            Get Started
                            <ChevronRight className="h-5 w-5" />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Feature cards section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Card 1 - Replace your cars */}
                    <motion.div
                        className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow group overflow-hidden"
                        variants={featureCardVariants}
                        whileHover={{ y: -5 }}
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
                        <div className="p-6 space-y-4 flex flex-col items-center text-center h-full justify-between">
                            <div className="w-20 h-20 mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                                {/* Icon placeholder */}
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="85" height="85" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><path d="M43,172c-23.74824,0 -43,-19.25176 -43,-43v-86c0,-23.74824 19.25176,-43 43,-43h86c23.74824,0 43,19.25176 43,43v86c0,23.74824 -19.25176,43 -43,43z" fill="#10b070"></path><g fill="#ffffff"><path d="M46.05737,124.48607h-16.94024c-2.30697,0 -4.17713,-1.87042 -4.17713,-4.17791v-52.38791c0,-2.30749 1.87016,-4.17817 4.17687,-4.17817h16.94024c2.30671,0 4.17687,1.87068 4.17687,4.17817v52.38791c0.00026,2.30749 -1.8699,4.17791 -4.17661,4.17791zM33.294,116.12998h8.58624v-44.03157h-8.58624z"></path><path d="M76.89945,124.48607h-16.94024c-2.30671,0 -4.17687,-1.87068 -4.17687,-4.17817v-35.30468c0,-2.30749 1.87016,-4.17817 4.17687,-4.17817h16.94024c2.30671,0 4.17687,1.87068 4.17687,4.17817v35.30468c0.00026,2.30775 -1.8699,4.17817 -4.17687,4.17817zM64.13608,116.12998h8.5865v-26.9486h-8.5865z"></path><path d="M104.97557,24.94h-13.53914v8.35635h3.41988l-26.14777,26.02696l-30.49164,-16.72026l-4.01587,7.32746l33.23125,18.2225c1.56929,0.86058 3.69335,0.55293 4.95421,-0.70219l28.41221,-28.2807v3.61454h8.354v-13.66648c0,-2.30749 -1.87016,-4.17817 -4.17713,-4.17817z"></path><path d="M147.06,120.40548c0,-4.00961 -2.99612,-7.33999 -8.43437,-9.58381c2.63289,-3.57279 4.192,-7.96781 4.192,-12.71848c0,-11.93018 -9.80796,-21.63612 -21.86339,-21.63612c-3.22131,0 -6.27926,0.69854 -9.03531,1.94192v-20.25052c0,-2.30749 -1.8699,-4.17817 -4.17687,-4.17817h-16.94076c-2.30697,0 -4.17687,1.87068 -4.17687,4.17817v62.14943c0,2.30749 1.8699,4.17817 4.17687,4.17817h4.04666v9.99349c0,8.64364 13.53262,12.58045 26.10602,12.58045c12.57314,0 26.10576,-3.9368 26.10576,-12.58045v-14.06363c0,-0.00365 0.00026,-0.00705 0.00026,-0.01044zM110.76244,117.23663c3.04543,1.59513 6.51281,2.50294 10.19154,2.50294c3.67873,0 7.14611,-0.90781 10.19154,-2.50294c4.36344,0.9874 6.69807,2.40326 7.40887,3.17329c-1.27574,1.41691 -7.36373,4.21992 -17.60068,4.21992c-10.23694,0 -16.32494,-2.80302 -17.60068,-4.21992c0.71106,-0.7703 3.04595,-2.18616 7.4094,-3.17329zM120.95398,84.82342c7.44906,0 13.50966,5.95726 13.50966,13.27977c0,7.3225 -6.06034,13.27977 -13.50966,13.27977c-7.44906,0 -13.50966,-5.95726 -13.50966,-13.27977c0.00026,-7.3225 6.0606,-13.27977 13.50966,-13.27977zM94.97843,62.3369h8.5865v22.67205c-2.80432,3.63803 -4.47434,8.17604 -4.47434,13.0945c0,4.75068 1.55886,9.14569 4.192,12.71848c-3.36039,1.38638 -5.78583,3.18817 -7.15054,5.30831h-1.15362zM120.95398,138.70365c-10.73247,0 -16.90475,-3.08118 -17.75202,-4.41563v-4.34465c4.95291,2.06012 11.47197,3.0423 17.75202,3.0423c6.28005,0 12.79885,-0.98218 17.75176,-3.0423v4.34439c-0.84701,1.33497 -7.01929,4.41589 -17.75176,4.41589z"></path><path d="M122.04497,96.11796c-1.89521,-0.77369 -1.89521,-1.06464 -1.89521,-1.3214c0,-0.24607 0.14117,-0.65887 1.08551,-0.65887c1.12674,0 2.32211,0.5545 3.2307,1.20607l1.33367,-3.47833c-0.89163,-0.56494 -1.98732,-1.07586 -2.98881,-1.24521v-2.11544h-3.57123v2.33594c-1.95888,0.65183 -3.16259,2.23939 -3.16259,4.20349c0,2.65976 2.22791,3.86531 4.16539,4.61708c1.65827,0.66227 1.65827,1.13744 1.65827,1.42108c0,0.55084 -0.53258,0.90677 -1.35663,0.90677c-1.29244,0 -2.6154,-0.67844 -3.59654,-1.4944l-1.28356,3.52974c0.99601,0.79326 2.16789,1.30731 3.42849,1.5111v2.18929h3.59158v-2.39934c2.0202,-0.67923 3.30924,-2.37377 3.30924,-4.38771c0.00052,-2.898 -2.2527,-4.13877 -3.94829,-4.81983c-1.89521,-0.77369 1.69559,0.68105 0,0c-1.89521,-0.77369 1.69559,0.68105 0,0c-1.89521,-0.77369 1.69559,0.68105 0,0c-1.89521,-0.77369 1.69559,0.68105 0,0z"></path></g></g></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Replace your cars</h3>
                            <p className="text-gray-600">
                                See which cars can be replaced by EVs and how many replacement options there are available.
                            </p>
                            <div className="pt-4">
                                <div className="text-emerald-500 font-medium flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                                    Learn more <ChevronRight className="h-4 w-4" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 - Find the best charging strategy */}
                    <motion.div
                        className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow group overflow-hidden"
                        variants={featureCardVariants}
                        whileHover={{ y: -5 }}
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
                        <div className="p-6 space-y-4 flex flex-col items-center text-center h-full justify-between">
                            <div className="w-20 h-20 mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                                {/* Icon placeholder */}
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="85" height="85" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><path d="M43,172c-23.74824,0 -43,-19.25176 -43,-43v-86c0,-23.74824 19.25176,-43 43,-43h86c23.74824,0 43,19.25176 43,43v86c0,23.74824 -19.25176,43 -43,43z" fill="#10b070"></path><g fill="#ffffff"><path d="M44.72,35.54667c-5.06827,0 -9.17333,4.10507 -9.17333,9.17333v82.56c0,5.06827 4.10507,9.17333 9.17333,9.17333h7.13979c-1.57781,-2.71072 -2.55312,-5.81589 -2.55312,-9.17333v-82.56c0,-3.35744 0.97531,-6.46261 2.55312,-9.17333zM67.65333,35.54667c-5.06827,0 -9.17333,4.10507 -9.17333,9.17333v82.56c0,5.06827 4.10507,9.17333 9.17333,9.17333h59.62667c5.06827,0 9.17333,-4.10507 9.17333,-9.17333v-61.92c0,-1.21547 -0.48146,-2.38062 -1.34375,-3.24292l-25.22667,-25.22667c-0.86229,-0.86229 -2.02745,-1.34375 -3.24292,-1.34375zM104.34667,44.28104l23.37229,23.37229h-18.78562c-2.53184,0 -4.58667,-2.05483 -4.58667,-4.58667zM81.41333,86h32.10667c2.53184,0 4.58667,2.05483 4.58667,4.58667c0,2.53184 -2.05483,4.58667 -4.58667,4.58667h-32.10667c-2.53184,0 -4.58667,-2.05483 -4.58667,-4.58667c0,-2.53184 2.05483,-4.58667 4.58667,-4.58667zM81.41333,104.34667h22.93333c2.53184,0 4.58667,2.05483 4.58667,4.58667c0,2.53184 -2.05483,4.58667 -4.58667,4.58667h-22.93333c-2.53184,0 -4.58667,-2.05483 -4.58667,-4.58667c0,-2.53184 2.05483,-4.58667 4.58667,-4.58667z"></path></g></g></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Find the best charging strategy</h3>
                            <p className="text-gray-600">
                                Check out how to deploy your EV charging infrastructure such that you can still perform your transportation tasks.
                            </p>
                            <div className="pt-4">
                                <div className="text-emerald-500 font-medium flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                                    Learn more <ChevronRight className="h-4 w-4" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3 - Build an EV deployment plan */}
                    <motion.div
                        className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow group overflow-hidden"
                        variants={featureCardVariants}
                        whileHover={{ y: -5 }}
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
                        <div className="p-6 space-y-4 flex flex-col items-center text-center h-full justify-between">
                            <div className="w-20 h-20 mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                                {/* Icon placeholder */}
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="85" height="85" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><path d="M43,172c-23.74824,0 -43,-19.25176 -43,-43v-86c0,-23.74824 19.25176,-43 43,-43h86c23.74824,0 43,19.25176 43,43v86c0,23.74824 -19.25176,43 -43,43z" fill="#10b070"></path><g fill="#ffffff"><path d="M86,30.96c-10.922,0 -19.8144,9.8728 -19.8144,22.016c0,12.1432 8.8924,22.016 19.8144,22.016c10.9306,0 19.8144,-9.8728 19.8144,-22.016c0,-12.1432 -8.8838,-22.016 -19.8144,-22.016zM86,77.3312c-11.3778,0 -19.7456,1.4018 -28.0016,4.6096c-3.4142,1.3244 -5.504,4.6956 -7.912,8.6c-0.5504,0.8858 -1.1094,1.806 -1.72,2.752c-0.9202,1.4104 -1.9608,3.0186 -3.096,4.7472c-4.6698,7.1208 -10.4576,15.953 -12.4528,19.8144c-2.1328,4.1366 -2.2532,7.4562 -0.4128,11.008c1.462,2.838 3.5002,6.5446 6.0544,11.008l0.688,1.1696h13.8288v-2.2016c0,-15.8068 14.7834,-28.6208 33.024,-28.6208c18.2406,0 33.024,12.814 33.024,28.6208v2.2016h13.8288l0.688,-1.1696c2.537,-4.429 4.5666,-8.1356 6.0544,-11.008c1.8404,-3.5518 1.72,-6.8714 -0.4128,-11.008c-1.419,-2.7434 -4.8332,-7.9292 -8.4624,-13.4848c-2.623,-4.0248 -5.3406,-8.1872 -7.0176,-11.008l-0.9632,-1.5824c-2.6746,-4.558 -4.9278,-8.5398 -8.7376,-9.9072c-7.6024,-2.7348 -15.308,-4.5408 -28.0016,-4.5408zM86,119.024c-13.3558,0 -24.2176,8.9354 -24.2176,19.8144v2.2016h48.4352v-2.2016c0,-10.879 -10.8704,-19.8144 -24.2176,-19.8144z"></path></g></g></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Build an EV deployment plan</h3>
                            <p className="text-gray-600">
                                We will prepare for you a personalized EV deployment and business plan that will allow you to save money and meet sustainability criteria.
                            </p>
                            <div className="pt-4">
                                <div className="text-emerald-500 font-medium flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                                    Learn more <ChevronRight className="h-4 w-4" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4 - Manage EV fleet and reduce TCO */}
                    <motion.div
                        className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow group overflow-hidden"
                        variants={featureCardVariants}
                        whileHover={{ y: -5 }}
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
                        <div className="p-6 space-y-4 flex flex-col items-center text-center h-full justify-between">
                            <div className="w-20 h-20 mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                                {/* Icon placeholder */}
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="85" height="85" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><path d="M43,172c-23.74824,0 -43,-19.25176 -43,-43v-86c0,-23.74824 19.25176,-43 43,-43h86c23.74824,0 43,19.25176 43,43v86c0,23.74824 -19.25176,43 -43,43z" fill="#10b070"></path><g fill="#ffffff"><path d="M108.22948,28.75628c-1.02308,0 -1.85245,0.82937 -1.85245,1.85245h-5.55736c-4.09055,0.00429 -7.40553,3.31927 -7.40982,7.40982v3.70491h-14.81963c-4.09055,0.00429 -7.40553,3.31927 -7.40982,7.40982c-0.00235,2.04519 -1.65972,3.70256 -3.70491,3.70491h-20.377c-4.09233,0 -7.40982,3.31749 -7.40982,7.40982c0,4.09233 3.31749,7.40982 7.40982,7.40982h20.377c2.04616,0 3.70491,1.65874 3.70491,3.70491c0,2.04616 -1.65874,3.70491 -3.70491,3.70491h-18.52454c-6.1357,0.00674 -11.10799,4.97903 -11.11473,11.11473v5.55736c0,1.02308 0.82937,1.85245 1.85245,1.85245c1.02308,0 1.85245,-0.82937 1.85245,-1.85245v-5.55736c0.00429,-4.09055 3.31927,-7.40553 7.40982,-7.40982h18.52454c4.09233,0 7.40982,-3.31749 7.40982,-7.40982c0,-4.09233 -3.31749,-7.40982 -7.40982,-7.40982h-20.377c-2.04616,0 -3.70491,-1.65874 -3.70491,-3.70491c0,-2.04616 1.65874,-3.70491 3.70491,-3.70491h20.377c4.09055,-0.00429 7.40553,-3.31927 7.40982,-7.40982c0.00235,-2.04519 1.65972,-3.70256 3.70491,-3.70491h14.81963v3.70491c0.00429,4.09055 3.31927,7.40553 7.40982,7.40982h5.55736c0,1.02308 0.82937,1.85245 1.85245,1.85245h7.40982c1.02308,0 1.85245,-0.82937 1.85245,-1.85245v-3.70491h7.40982c1.02308,0 1.85245,-0.82937 1.85245,-1.85245c0,-1.02308 -0.82937,-1.85245 -1.85245,-1.85245h-7.40982v-11.11473h7.40982c1.02308,0 1.85245,-0.82937 1.85245,-1.85245c0,-1.02308 -0.82937,-1.85245 -1.85245,-1.85245h-7.40982v-3.70491c0,-1.02308 -0.82937,-1.85245 -1.85245,-1.85245zM108.28375,36.1661c1.00183,0.02936 1.79861,0.8502 1.79818,1.85245v11.11473c0,1.02308 -0.82937,1.85245 -1.85245,1.85245c-1.02308,0 -1.85245,-0.82937 -1.85245,-1.85245v-11.11473c-0.00021,-0.50085 0.20239,-0.98044 0.56162,-1.32945c0.35923,-0.34901 0.84447,-0.53768 1.34511,-0.523zM102.72639,38.01855c1.00183,0.02936 1.79861,0.8502 1.79818,1.85245v7.40982c0,1.02308 -0.82937,1.85245 -1.85245,1.85245c-1.02308,0 -1.85245,-0.82937 -1.85245,-1.85245v-7.40982c-0.00021,-0.50085 0.20239,-0.98044 0.56162,-1.32945c0.35923,-0.34901 0.84447,-0.53768 1.34511,-0.523zM65.37338,84.32991c-2.16649,-0.03242 -4.29784,0.54965 -6.14711,1.67879l-11.30287,7.27595l-3.20561,2.13828l-6.03133,-0.23517c-0.22298,-0.0064 -0.44549,0.02417 -0.65849,0.09045c-4.54062,1.50754 -7.60418,5.75511 -7.60158,10.53945v17.4138c0,1.02308 0.82937,1.85245 1.85245,1.85245h7.55816c-0.76976,-5.04524 1.49149,-10.0728 5.77699,-12.84433c4.28551,-2.77153 9.79818,-2.77153 14.08369,0c4.28551,2.77153 6.54675,7.79909 5.77699,12.84433h37.34577c-0.76976,-5.04524 1.49149,-10.0728 5.77699,-12.84433c4.28551,-2.77153 9.79818,-2.77153 14.08369,0c4.28551,2.77153 6.54675,7.79909 5.77699,12.84433h7.55816c3.06785,-0.00337 5.55399,-2.48951 5.55736,-5.55736v-8.687c0.01876,-3.48159 -1.93092,-6.67503 -5.03636,-8.24921c-9.97483,-4.82517 -20.93284,-7.27116 -32.01273,-7.1457h-1.18673l-10.69141,-8.84981c-1.99212,-1.52277 -4.4435,-2.3216 -6.95032,-2.26491zM58.16256,93.61751c0.50506,-0.02036 0.99651,0.16654 1.3604,0.51738l5.01465,5.01465h32.57715c1.02308,0 1.85245,0.82937 1.85245,1.85245c0,1.02308 -0.82937,1.85245 -1.85245,1.85245h-33.34418c-0.4913,0.00007 -0.96248,-0.19517 -1.30974,-0.54271l-5.55736,-5.55736c-0.50649,-0.52521 -0.6575,-1.29881 -0.38571,-1.97594c0.27179,-0.67713 0.91575,-1.13165 1.6448,-1.16093zM52.65585,113.96918c-5.11541,0 -9.26227,4.14686 -9.26227,9.26227c0,5.11541 4.14686,9.26227 9.26227,9.26227c5.11541,0 9.26227,-4.14686 9.26227,-9.26227c-0.00602,-5.11291 -4.14936,-9.25625 -9.26227,-9.26227zM115.6393,113.96918c-5.11541,0 -9.26227,4.14686 -9.26227,9.26227c0,5.11541 4.14686,9.26227 9.26227,9.26227c5.11541,0 9.26227,-4.14686 9.26227,-9.26227c-0.00602,-5.11291 -4.14936,-9.25625 -9.26227,-9.26227zM52.50028,119.53016c1.00864,-0.04239 1.99091,0.32865 2.71962,1.02731c0.72872,0.69867 1.14077,1.66444 1.14086,2.67398c-0.00235,2.04519 -1.65972,3.70256 -3.70491,3.70491c-2.01276,-0.0043 -3.6539,-1.61477 -3.69617,-3.62709c-0.04227,-2.01232 1.52979,-3.69028 3.54059,-3.77911zM115.48372,119.53016c1.00864,-0.04239 1.99091,0.32865 2.71962,1.02731c0.72872,0.69867 1.14077,1.66444 1.14086,2.67398c-0.00235,2.04519 -1.65972,3.70256 -3.70491,3.70491c-2.01276,-0.0043 -3.6539,-1.61477 -3.69617,-3.62709c-0.04227,-2.01232 1.52979,-3.69028 3.54059,-3.77911z"></path></g></g></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Manage EV fleet and reduce TCO</h3>
                            <p className="text-gray-600">
                                Our fleet management tools can manage your hybrid fleet consisting of traditional combustion engine cars and electric ones.
                            </p>
                            <div className="pt-4">
                                <div className="text-emerald-500 font-medium flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                                    Learn more <ChevronRight className="h-4 w-4" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default FleetPotentialShowcase;