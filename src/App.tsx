/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll } from 'motion/react';
import LayoutWrapper from './LayoutWrapper';
import HeroSection from './HeroSection';
import IndustryGap from './IndustryGap';
import FoundersMission from './FoundersMission';
import GrowthTimeline from './GrowthTimeline';
import LeadershipCulture from './LeadershipCulture';
import CoreValues from './CoreValues';
import InteractiveGallery from './InteractiveGallery';
import CtaSection from './CtaSection';
import NotFound from './NotFound';

const AboutUsPage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <IndustryGap />
      <FoundersMission />
      <GrowthTimeline />
      <LeadershipCulture />
      <CoreValues />
      <InteractiveGallery />
      <CtaSection />
    </div>
  );
};

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#F5A623] origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default function App() {
  return (
    <Router>
      <ScrollIndicator />
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<AboutUsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}
