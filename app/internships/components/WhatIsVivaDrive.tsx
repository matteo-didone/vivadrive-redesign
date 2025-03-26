import React from 'react';
import { ChevronRight, Users, Rocket, Flag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatIsVivaDrive = () => {
    const { t } = useLanguage(); // Add the translation hook

    const features = [
        {
            step: "1",
            title: t('pages.internships.what_is_vivadrive.features.passionate_team.title'),
            description: t('pages.internships.what_is_vivadrive.features.passionate_team.description'),
            icon: <Users className="w-10 h-10 text-white" />,
            gradient: "from-[#13A661] to-[#12AC6C]"
        },
        {
            step: "2",
            title: t('pages.internships.what_is_vivadrive.features.complete_freedom.title'),
            description: t('pages.internships.what_is_vivadrive.features.complete_freedom.description'),
            icon: <Rocket className="w-10 h-10 text-white" />,
            gradient: "from-[#12AC6C] to-[#15BF70]"
        },
        {
            step: "3",
            title: t('pages.internships.what_is_vivadrive.features.team_vivadrive.title'),
            description: t('pages.internships.what_is_vivadrive.features.team_vivadrive.description'),
            icon: <Flag className="w-10 h-10 text-white" />,
            gradient: "from-[#15BF70] to-[#8BD9B8]"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-white to-emerald-50/50">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-emerald-600/10 text-emerald-600 border-emerald-600/20 hover:bg-emerald-600/20 py-1.5 px-4 text-sm font-medium">
                        {t('pages.internships.what_is_vivadrive.badge')}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gray-900 to-emerald-600 dark:from-white dark:to-emerald-400 bg-clip-text text-transparent">
                        {t('pages.internships.what_is_vivadrive.title')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
                        {t('pages.internships.what_is_vivadrive.description')}
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`rounded-lg border text-card-foreground shadow-sm bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-gray-100/80 dark:border-gray-800/80 overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-opacity-80 hover:border-emerald-600/30 dark:hover:border-emerald-600/20 ${index % 2 === 0 ? 'sm:translate-y-4' : ''
                                }`}
                        >
                            <div className={`h-2.5 w-full bg-gradient-to-r ${feature.gradient}`}></div>
                            <div className="p-6 sm:p-8 flex flex-col items-center text-center">
                                <div className={`mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r ${feature.gradient} shadow-lg p-5 transition-all duration-300 group-hover:shadow-xl`}>
                                    {feature.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-600 transition-colors flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 inline-flex items-center justify-center mr-2 text-sm font-bold">
                                        {feature.step}
                                    </span>
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-emerald-600 text-xl font-medium mb-5">
                        {t('pages.internships.what_is_vivadrive.cta_text')}
                    </p>

                    <a
                    
                        href="https://www.youtube.com/watch?v=uRlqZAimyzM"
                        className="inline-flex items-center text-sm px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-md hover:shadow-lg transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t('pages.internships.what_is_vivadrive.cta_button')}
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhatIsVivaDrive;