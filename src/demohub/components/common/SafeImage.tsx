'use client';

import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSvg?: React.ReactNode;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackSvg,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-neutral-900 overflow-hidden relative ${containerClassName}`}>
        {fallbackSvg || (
          <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-950 flex items-center justify-center p-4">
            <span className="text-xs text-neutral-500 font-mono text-center">{alt || 'Image Preview'}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${containerClassName}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-900/60 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt || ''}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
};
