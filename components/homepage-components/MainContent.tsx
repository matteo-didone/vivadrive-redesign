import React from 'react';
import ProcessSection from '@/components/homepage-components/ProcessSection';
import CTASection from '@/components/homepage-components/CTASection';
import SolutionsSection from '@/components/homepage-components/SolutionsSection';
import BenefitsSection from '@/components/homepage-components/BenefitsSection';
import DetailedStepsSection from '@/components/homepage-components/DetailedStepsSection';
import FinalCTASection from '@/components/homepage-components/FinalCTASection';
import PartnerLogos from '@/components/homepage-components/PartnerLogos';
import IndustryTrust from '@/components/homepage-components/IndustryTrust';

const MainContent = () => {
  return (
    <main className="flex-1">
      <PartnerLogos />
      <IndustryTrust />
      <ProcessSection />
      <CTASection />
      <SolutionsSection />
      <BenefitsSection />
      <DetailedStepsSection />
      <FinalCTASection />
    </main>
  );
};

export default MainContent;