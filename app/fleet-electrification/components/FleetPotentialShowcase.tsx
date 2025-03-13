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
    <div className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50 opacity-40 -skew-x-12 transform -translate-x-24" />
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-100 rounded-full opacity-30 blur-lg" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-yellow-100 rounded-full opacity-30 blur-lg" />

      {/* Showcase intro section */}
      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center space-y-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium mb-2"
              variants={itemVariants}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2h9m3-4v-2H6v2h12z" />
              </svg>
              <span>Fleet Optimization</span>
            </motion.div>

            <motion.p className="text-xl md:text-2xl text-emerald-600 font-medium" variants={itemVariants}>
              Made to make you productive
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Discover your fleet's <span className="text-emerald-500">full potential!</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20 text-lg"
              >
                Get Started
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Feature cards section */}
      <div className="py-16 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Card 1 */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow group overflow-hidden"
              variants={featureCardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
              <div className="p-6 space-y-4 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" className="w-full h-full">
                    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <path d="M43,172c-23.74824,0 -43,-19.25176 -43,-43v-86c0,-23.74824 19.25176,-43 43,-43h86c23.74824,0 43,19.25176 43,43v86c0,23.74824 -19.25176,43 -43,43z" fill="#01bb6f"></path>
                      <g fill="#ebf5e3">
                        <path d="M31.82034,66.64976c0,-3.20599 2.59897,-5.80496 5.80496,-5.80496h15.4799v-3.86998h-15.4799c-5.34067,0.0064 -9.66854,4.33427 -9.67494,9.67494v9.67494h3.86998zM27.95036,87.93463h3.86998v11.60993h-3.86998zM27.95036,80.19468h3.86998v3.86998h-3.86998zM134.3747,56.97482h-15.4799v3.86998h15.4799c3.20599,0 5.80496,2.59897 5.80496,5.80496v9.67494h3.86998v-9.67494c-0.0064,-5.34067 -4.33427,-9.66854 -9.67494,-9.67494zM140.17966,87.93463h3.86998v11.60993h-3.86998zM140.17966,80.19468h3.86998v3.86998h-3.86998zM86,85.99964c16.02997,0 29.02482,-12.99485 29.02482,-29.02482c0,-16.02997 -12.99485,-29.02482 -29.02482,-29.02482c-16.02997,0 -29.02482,12.99485 -29.02482,29.02482c0.01919,16.02201 13.00281,29.00563 29.02482,29.02482zM72.66793,59.97405l11.60993,-23.21986c0.40657,-0.79366 1.30287,-1.2067 2.17036,-1.00016c0.86749,0.20654 1.48149,0.97918 1.48677,1.8709v13.54492h9.67494c0.67065,0.00203 1.29243,0.35119 1.64326,0.92276c0.35083,0.57158 0.38067,1.28406 0.07888,1.88297l-11.60993,23.21986c-0.32788,0.6507 -0.9935,1.06203 -1.72214,1.06424c-0.15022,-0.00024 -0.29979,-0.01975 -0.44505,-0.05805c-0.87093,-0.20583 -1.48708,-0.98203 -1.48994,-1.87694v-13.54492h-9.67494c-0.67065,-0.00203 -1.29243,-0.35119 -1.64326,-0.92276c-0.35083,-0.57158 -0.38067,-1.28406 -0.07888,-1.88297zM118.89479,103.41453h-5.10837c-2.96053,-2.41873 -17.55034,-13.54492 -35.52638,-13.54492c-17.97604,0 -32.5465,11.12618 -35.52638,13.54492h-8.97834c-3.20202,0.00956 -5.7954,2.60294 -5.80496,5.80496v11.60993c-0.00094,0.37992 0.1138,0.75112 0.32895,1.06424l7.73995,11.60993c0.35601,0.54061 0.95875,0.8674 1.60604,0.87074h7.9141c0.93911,5.58388 5.77348,9.67309 11.43578,9.67309c5.6623,0 10.49667,-4.08921 11.43578,-9.67309h37.11307c0.93911,5.58388 5.77348,9.67309 11.43578,9.67309c5.6623,0 10.49667,-4.08921 11.43578,-9.67309h13.71906c1.06866,0 1.93499,-0.86632 1.93499,-1.93499v-3.86998c-0.0128,-13.88733 -11.26751,-25.14204 -25.15484,-25.15484zM36.58041,115.02446h-4.76007v-1.93499h6.05651zM56.97518,140.1793c-4.27466,0 -7.73995,-3.46529 -7.73995,-7.73995c0,-4.27466 3.46529,-7.73995 7.73995,-7.73995c4.27466,0 7.73995,3.46529 7.73995,7.73995c0,4.27466 -3.46529,7.73995 -7.73995,7.73995zM76.32506,103.41453h-26.97373c8.00889,-5.48013 17.3033,-8.78718 26.97373,-9.59754zM80.19503,103.41453v-9.59754c11.43578,0.5805 21.42032,5.94041 26.97373,9.59754zM116.95981,140.1793c-4.27466,0 -7.73995,-3.46529 -7.73995,-7.73995c0,-4.27466 3.46529,-7.73995 7.73995,-7.73995c4.27466,0 7.73995,3.46529 7.73995,7.73995c0,4.27466 -3.46529,7.73995 -7.73995,7.73995zM127.67964,115.02446l-1.29644,-1.93499h7.08206c0.64689,0.61168 1.26052,1.2576 1.83824,1.93499z"></path>
                      </g>
                    </g>
                  </svg>
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

            {/* Card 2 */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow group overflow-hidden"
              variants={featureCardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
              <div className="p-6 space-y-4 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" className="w-full h-full">
                    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <path d="M43,172c-23.74824,0 -43,-19.25176 -43,-43v-86c0,-23.74824 19.25176,-43 43,-43h86c23.74824,0 43,19.25176 43,43v86c0,23.74824 -19.25176,43 -43,43z" fill="#01bb6f"></path>
                      <g>
                        <path d="M120.57917,121.11667h-7.525c-5.53338,0 -10.03333,-4.49995 -10.03333,-10.03333v-25.08333c0,-2.76669 -2.24998,-5.01667 -5.01667,-5.01667h-5.01667v-5.01667h5.01667c5.53338,0 10.03333,4.49995 10.03333,10.03333v25.08333c0,2.76669 2.24998,5.01667 5.01667,5.01667h7.525c2.76669,0 5.01667,-2.24997 5.01667,-5.01667v-37.625h5.01667v37.625c0,5.53338 -4.49995,10.03333 -10.03333,10.03333z" fill="#ebf5e3"></path>
                        <path d="M135.62917,45.86667h-5.01667v15.05h5.01667zM125.59583,45.86667h-5.01667v15.05h5.01667z" fill="#ebf5e3"></path>
                        <path d="M140.64583,68.44167c0,4.1538 -3.36869,7.525 -7.525,7.525h-10.03333c-4.15631,0 -7.525,-3.3712 -7.525,-7.525v-12.54167h25.08333z" fill="#ebf5e3"></path>
                        <path d="M35.29583,128.64167v-85.28333c0,-5.51833 4.515,-10.03333 10.03333,-10.03333h37.625c5.51833,0 10.03333,4.515 10.03333,10.03333v85.28333c0,5.51833 -4.515,10.03333 -10.03333,10.03333h-37.625c-5.51833,0 -10.03333,-4.515 -10.03333,-10.03333z" fill="#ebf5e3"></path>
                        <path d="M82.95417,40.85h-37.625c-1.505,0 -2.50833,1.00333 -2.50833,2.50833v32.60833c0,1.505 1.00333,2.50833 2.50833,2.50833h37.625c1.505,0 2.50833,-1.00333 2.50833,-2.50833v-32.60833c0,-1.505 -1.00333,-2.50833 -2.50833,-2.50833z" fill="#01bb6f"></path>
                        <path d="M75.42917,58.30298h-10.34688l4.13875,-14.94465l-16.36687,17.66368h10.34687l-4.13875,14.94465z" fill="#ebf5e3"></path>
                        <path d="M98.00417,138.675h-67.725c-1.3846,0 -2.50833,-1.12373 -2.50833,-2.50833v-7.525c0,-1.3846 1.12373,-2.50833 2.50833,-2.50833h67.725c1.3846,0 2.50833,1.12373 2.50833,2.50833v7.525c0,1.3846 -1.12373,2.50833 -2.50833,2.50833z" fill="#ebf5e3"></path>
                        <circle cx="51.07143" cy="26.28571" transform="scale(2.50833,2.50833)" r="1" fill="#ebf5e3"></circle>
                      </g>
                    </g>
                  </svg>
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

            {/* Card 3 */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow group overflow-hidden"
              variants={featureCardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
              <div className="p-6 space-y-4 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" className="w-full h-full">
                    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <path d="M43,172c-23.74824,0 -43,-19.25176 -43,-43v-86c0,-23.74824 19.25176,-43 43,-43h86c23.74824,0 43,19.25176 43,43v86c0,23.74824 -19.25176,43 -43,43z" fill="#01bb6f"></path>
                      <g fill="#ebf5e3">
                        <path d="M112.60625,83.33937c-16.16365,0 -29.26687,13.10323 -29.26688,29.26688c0,16.16365 13.10323,29.26688 29.26688,29.26688c16.16365,0 29.26688,-13.10323 29.26688,-29.26688c-0.01826,-16.15608 -13.1108,-29.24862 -29.26688,-29.26688zM127.23449,107.56994l-17.3824,17.38241c-0.5396,0.53961 -1.28493,0.82155 -2.04658,0.77416c-0.76165,-0.04739 -1.46628,-0.41953 -1.93484,-1.02187l-8.1118,-10.42944c-0.90213,-1.15995 -0.69312,-2.83159 0.46682,-3.73372c1.15995,-0.90213 2.83159,-0.69312 3.73372,0.46682l6.26095,8.05031l15.25187,-15.25097c0.67163,-0.67426 1.65227,-0.9384 2.5717,-0.69268c0.91942,0.24572 1.63756,0.96385 1.88327,1.88327c0.24572,0.91942 -0.01842,1.90007 -0.69268,2.5717z"></path>
                        <path d="M62.3497,106.98967h-18.9197c-0.70568,-0.00011 -1.38248,0.28017 -1.88147,0.77915c-0.49899,0.49899 -0.77927,1.17579 -0.77915,1.88147v18.9197c-0.00011,0.70567 0.28017,1.38248 0.77916,1.88147c0.49899,0.49899 1.17579,0.77927 1.88147,0.77916h18.9197c0.70568,0.00011 1.38248,-0.28017 1.88147,-0.77915c0.49899,-0.49899 0.77927,-1.17579 0.77915,-1.88147v-18.9197c0.00012,-0.70568 -0.28016,-1.38249 -0.77915,-1.88148c-0.49899,-0.49899 -1.1758,-0.77927 -1.88148,-0.77915zM59.68908,125.90937h-13.59845v-13.59845h13.59845z"></path>
                        <path d="M65.01033,80.0872c0.00011,-0.70568 -0.28017,-1.38248 -0.77915,-1.88147c-0.49899,-0.49899 -1.17579,-0.77927 -1.88147,-0.77915h-18.9197c-0.70567,-0.00011 -1.38248,0.28017 -1.88147,0.77916c-0.49899,0.49899 -0.77927,1.17579 -0.77916,1.88147v18.92059c-0.00011,0.70567 0.28017,1.38248 0.77916,1.88147c0.49899,0.49899 1.17579,0.77927 1.88147,0.77916h18.9197c0.70568,0.00011 1.38248,-0.28017 1.88147,-0.77915c0.49899,-0.49899 0.77927,-1.17579 0.77915,-1.88147zM59.68908,96.34717h-13.59845v-13.59934h13.59845z"></path>
                        <path d="M65.01033,50.525c0.00011,-0.70568 -0.28017,-1.38248 -0.77915,-1.88147c-0.49899,-0.49899 -1.17579,-0.77927 -1.88147,-0.77915h-18.9197c-0.70567,-0.00011 -1.38248,0.28017 -1.88147,0.77916c-0.49899,0.49899 -0.77927,1.17579 -0.77916,1.88147v18.9197c-0.00011,0.70568 0.28017,1.38248 0.77915,1.88147c0.49899,0.49899 1.17579,0.77927 1.88147,0.77915h18.9197c0.70568,0.00012 1.38249,-0.28016 1.88148,-0.77915c0.49899,-0.49899 0.77927,-1.1758 0.77915,-1.88148zM59.68908,66.78408h-13.59845v-13.59845h13.59845z"></path>
                        <path d="M101.96375,57.32467h-28.97155c-1.46942,0 -2.66063,1.1912 -2.66063,2.66063c0,1.46942 1.1912,2.66062 2.66063,2.66062h28.97155c1.46942,0 2.66062,-1.1912 2.66062,-2.66062c0,-1.46942 -1.1912,-2.66063 -2.66062,-2.66063z"></path>
                        <path d="M72.9922,86.88688c-1.46942,0 -2.66063,1.1912 -2.66063,2.66063c0,1.46942 1.1912,2.66062 2.66063,2.66062h10.38176c1.46942,0 2.66063,-1.1912 2.66063,-2.66062c0,-1.46942 -1.1912,-2.66063 -2.66063,-2.66063z"></path>
                        <path d="M109.05875,33.67437h-13.74656v-0.88688c0,-1.46942 -1.1912,-2.66062 -2.66063,-2.66062c-1.46942,0 -2.66063,1.1912 -2.66063,2.66062v0.88688h-14.63344v-0.88688c0,-1.46942 -1.1912,-2.66062 -2.66063,-2.66062c-1.46942,0 -2.66062,1.1912 -2.66062,2.66062v0.88688h-14.63344v-0.88688c0,-1.46942 -1.1912,-2.66062 -2.66063,-2.66062c-1.46942,0 -2.66063,1.1912 -2.66063,2.66062v0.88688h-13.74656c-3.42693,0.00414 -6.20398,2.78119 -6.20812,6.20812v95.7825c0.00414,3.42693 2.78119,6.20398 6.20812,6.20813h50.2522c1.46942,0 2.66062,-1.1912 2.66062,-2.66062c0,-1.46942 -1.1912,-2.66063 -2.66062,-2.66063h-50.2522c-0.48967,-0.00033 -0.88654,-0.39721 -0.88687,-0.88688v-95.7825c0.00033,-0.48967 0.39721,-0.88654 0.88687,-0.88687h13.74656v0.88687c0,1.46942 1.1912,2.66063 2.66063,2.66063c1.46942,0 2.66063,-1.1912 2.66063,-2.66063v-0.88687h14.63344v0.88687c0,1.46942 1.1912,2.66063 2.66062,2.66063c1.46942,0 2.66063,-1.1912 2.66063,-2.66063v-0.88687h14.63344v0.88687c0,1.46942 1.1912,2.66063 2.66063,2.66063c1.46942,0 2.66063,-1.1912 2.66063,-2.66063v-0.88687h13.74656c0.48967,0.00033 0.88654,0.39721 0.88687,0.88687v35.475c0,1.46942 1.1912,2.66062 2.66063,2.66062c1.46942,0 2.66062,-1.1912 2.66062,-2.66062v-35.475c-0.00414,-3.42693 -2.78119,-6.20398 -6.20812,-6.20812z"></path>
                      </g>
                    </g>
                  </svg>
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

            {/* Card 4 */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow group overflow-hidden"
              variants={featureCardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
              <div className="p-6 space-y-4 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" className="w-full h-full">
                    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <path d="M43,172c-23.74824,0 -43,-19.25176 -43,-43v-86c0,-23.74824 19.25176,-43 43,-43h86c23.74824,0 43,19.25176 43,43v86c0,23.74824 -19.25176,43 -43,43z" fill="#01bb6f"></path>
                      <g fill="#ebf5e3">
                        <path d="M34.02244,36.98c-2.73006,0 -4.95024,2.22018 -4.95024,4.95024v71.77854c0,2.73006 2.22018,4.95024 4.95024,4.95024h103.95512c2.73006,0 4.95024,-2.22018 4.95024,-4.95024v-71.77854c0,-2.73006 -2.22018,-4.95024 -4.95024,-4.95024zM34.02244,41.93024h103.95512l0.00483,71.77854h-0.00483v-14.85073h-103.95512zM125.60195,106.28341h4.95024v4.95024h-4.95024zM71.14927,123.60927v4.95024h-7.42537c-4.95024,0 -7.42537,2.47512 -7.42537,7.42537v2.47512h59.40293v-2.47512c0,-4.95024 -2.47512,-7.42537 -7.42537,-7.42537h-7.42537v-4.95024z"></path>
                      </g>
                    </g>
                  </svg>
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
    </div>
  );
};

export default FleetPotentialShowcase;