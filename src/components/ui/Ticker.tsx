"use client";

import React from 'react';

export const Ticker = () => {
  const items = "SOFTWARE · AI · SYSTEMS · FULL-STACK · COMPUTER VISION · EDGE AI · AUTOMATION · DEVELOPER TOOLS · FREELANCER · BUILDER · ";
  const repeated = items.repeat(6);
  return (
    <div className="border-y border-ink bg-coral overflow-hidden whitespace-nowrap">
      <div className="ticker-track text-ink">
        {repeated}
      </div>
    </div>
  );
};
