"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';

// Dynamically import ForceGraph2D to prevent SSR issues
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

const graphData = {
  nodes: [
    // Main Role
    { id: "Aayush", group: 0, val: 30, color: "#fbbf24" }, // Primary yellow
    
    // Core AI Skills
    { id: "RAG Systems", group: 1, val: 20, color: "#171717" },
    { id: "Multi-Agent AI", group: 1, val: 20, color: "#171717" },
    { id: "Edge AI / CV", group: 1, val: 20, color: "#171717" },
    { id: "System Design", group: 1, val: 20, color: "#171717" },
    
    // Projects
    { id: "CiteSynth", group: 2, val: 15, color: "#e5e7eb" },
    { id: "TriageMesh", group: 2, val: 15, color: "#e5e7eb" },
    { id: "MAITRI", group: 2, val: 15, color: "#e5e7eb" },
    { id: "X-Ray Triage Edge", group: 2, val: 15, color: "#e5e7eb" },
    
    // Tools & Tech
    { id: "LangChain", group: 3, val: 10, color: "#d1d5db" },
    { id: "Vector DBs", group: 3, val: 10, color: "#d1d5db" },
    { id: "TFLite", group: 3, val: 10, color: "#d1d5db" },
    { id: "Next.js", group: 3, val: 10, color: "#d1d5db" },
    { id: "Raspberry Pi", group: 3, val: 10, color: "#d1d5db" }
  ],
  links: [
    // Aayush to Skills
    { source: "Aayush", target: "RAG Systems" },
    { source: "Aayush", target: "Multi-Agent AI" },
    { source: "Aayush", target: "Edge AI / CV" },
    { source: "Aayush", target: "System Design" },
    
    // Projects to Skills
    { source: "CiteSynth", target: "RAG Systems" },
    { source: "CiteSynth", target: "Multi-Agent AI" },
    { source: "TriageMesh", target: "System Design" },
    { source: "TriageMesh", target: "Edge AI / CV" },
    { source: "MAITRI", target: "Edge AI / CV" },
    { source: "MAITRI", target: "System Design" },
    { source: "X-Ray Triage Edge", target: "Edge AI / CV" },
    
    // Projects/Skills to Tools
    { source: "CiteSynth", target: "LangChain" },
    { source: "CiteSynth", target: "Vector DBs" },
    { source: "X-Ray Triage Edge", target: "TFLite" },
    { source: "X-Ray Triage Edge", target: "Raspberry Pi" },
    { source: "MAITRI", target: "Raspberry Pi" },
    { source: "TriageMesh", target: "Next.js" },
    { source: "CiteSynth", target: "Next.js" }
  ]
};

export default function KnowledgeGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const graphRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 });

  useEffect(() => {
    // Repel nodes from each other so they don't cluster
    if (graphRef.current) {
      graphRef.current.d3Force('charge').strength(-500);
      graphRef.current.d3Force('link').distance(60);
    }
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: 400
      });
    }

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: 400
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full bg-gray-50 border border-border rounded-2xl overflow-hidden mb-12 shadow-sm relative" ref={containerRef}>
      <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border text-xs font-semibold text-foreground">
        Interactive Skill Map
      </div>
        <div className="absolute top-4 right-4 z-10 text-xs text-muted font-medium bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
          Drag to interact
        </div>
        <ForceGraph2D
          ref={graphRef}
          width={dimensions.width}
        height={dimensions.height}
        graphData={graphData}
        nodeLabel="id"
        nodeColor={(node: Record<string, unknown>) => node.color as string}
        nodeRelSize={6}
        linkColor={() => "#e5e7eb"}
        linkWidth={1.5}
        backgroundColor="#f9fafb" // gray-50
        onNodeDragEnd={(node: Record<string, unknown>) => {
          node.fx = node.x;
          node.fy = node.y;
        }}
      />
    </div>
  );
}
