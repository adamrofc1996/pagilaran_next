import React from 'react';
import { KeyValuesSection } from './KeyValuesSection';
import { CertificationsSection } from './CertificationsSection';
import { NewsSection } from './NewsSection';

export const SectionsDemo: React.FC = () => {
  return (
    <div>
      {/* Import the CSS file */}
      <link rel="stylesheet" href="/src/styles/sections.css" />
      
      {/* Key Values Section */}
      <KeyValuesSection />
      
      {/* Certifications Section */}
      <CertificationsSection />
      
      {/* News Section */}
      <NewsSection />
    </div>
  );
};