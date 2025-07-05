
import React from 'react';

interface OfficeMapProps {
  embedUrl: string;
  mapUrl: string;
  name: string;
}

export const OfficeMap: React.FC<OfficeMapProps> = ({ embedUrl, mapUrl, name }) => {
  if (!embedUrl || !mapUrl) {
    return null; // Jangan render jika URL tidak ada
  }

  return (
    <div
      className="mt-4 rounded-lg overflow-hidden cursor-pointer relative h-[150px] bg-gray-200"
      onClick={() => window.open(mapUrl, '_blank', 'noopener,noreferrer')}
      role="link"
      aria-label={`Lihat peta ${name}`}
    >
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Peta ${name}`}
      ></iframe>
    </div>
  );
};
