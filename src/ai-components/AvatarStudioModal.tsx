"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Sliders, Check, Download, RefreshCw, Wand2, Eye } from 'lucide-react';

interface AvatarStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyAvatar: (dataUrl: string) => void;
  currentAvatar: string;
}

export const AvatarStudioModal: React.FC<AvatarStudioModalProps> = ({
  isOpen,
  onClose,
  onApplyAvatar,
  currentAvatar,
}) => {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [sensitivity, setSensitivity] = useState(70);
  const [softness, setSoftness] = useState(25);
  const [despill, setDespill] = useState(true);
  const [viewMode, setViewMode] = useState<'processed' | 'original'>('processed');
  const [dragOver, setDragOver] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Process red background removal via canvas
  const removeRedBackground = useCallback(
    (imgSrc: string, sens: number, soft: number, applyDespill: boolean) => {
      setIsProcessing(true);
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = canvasRef.current || document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setIsProcessing(false);
          return;
        }

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Target red background values (typical KlingAI / video red backdrop: ~215, 12, 18)
        const targetR = 215;
        const targetG = 15;
        const targetB = 18;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];

          // Skip already transparent pixels
          if (a === 0) continue;

          // Euclidean distance from saturated red target
          const dist = Math.sqrt(
            Math.pow(r - targetR, 2) * 1.0 +
            Math.pow(g - targetG, 2) * 1.5 +
            Math.pow(b - targetB, 2) * 1.5
          );

          // Check if red is overwhelmingly dominant over green and blue
          const maxGB = Math.max(g, b);
          const isRedDominant = r > 110 && (r - maxGB) > 42;

          if (isRedDominant && dist < sens) {
            // Full background removal
            data[i + 3] = 0;
          } else if (isRedDominant && dist < sens + soft) {
            // Feathered soft boundary
            const factor = (dist - sens) / soft;
            data[i + 3] = Math.round(a * Math.min(1, Math.max(0, factor)));

            if (applyDespill) {
              // Despill fringe red reflection on hair and skin edges
              data[i] = Math.min(r, maxGB + 24);
            }
          } else if (applyDespill && (r - maxGB) > 80 && r > 160) {
            // Mild despill on hair rim lighting to reduce red bounce
            data[i] = Math.round(r * 0.85 + maxGB * 0.15);
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const resultUrl = canvas.toDataURL('image/png');
        setProcessedImage(resultUrl);
        setIsProcessing(false);
      };
      img.onerror = () => {
        setIsProcessing(false);
      };
      img.src = imgSrc;
    },
    []
  );

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setSourceImage(result);
      removeRedBackground(result, sensitivity, softness, despill);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handlePaste = useCallback((e: ClipboardEvent) => {
    if (e.clipboardData && e.clipboardData.files.length > 0) {
      const file = e.clipboardData.files[0];
      if (file.type.startsWith('image/')) {
        handleFileSelect(file);
      }
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('paste', handlePaste);
    }
    return () => {
      window.removeEventListener('paste', handlePaste);
    };
  }, [isOpen, handlePaste]);

  // Re-run filter when sliders change
  const handleSensitivityChange = (val: number) => {
    setSensitivity(val);
    if (sourceImage) {
      removeRedBackground(sourceImage, val, softness, despill);
    }
  };

  const handleSoftnessChange = (val: number) => {
    setSoftness(val);
    if (sourceImage) {
      removeRedBackground(sourceImage, sensitivity, val, despill);
    }
  };

  const handleDespillToggle = (val: boolean) => {
    setDespill(val);
    if (sourceImage) {
      removeRedBackground(sourceImage, sensitivity, softness, val);
    }
  };

  const handleApply = () => {
    if (processedImage) {
      onApplyAvatar(processedImage);
      try {
        localStorage.setItem('aayush_custom_avatar', processedImage);
      } catch (err) {
        console.warn('Could not save to localStorage', err);
      }
      onClose();
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;
    const link = document.createElement('a');
    link.download = 'aayush-avatar-nobg.png';
    link.href = processedImage;
    link.click();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 shadow-2xl z-10 text-[#D7E2EA] my-8"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold flex items-center gap-1.5 mb-1">
                <Wand2 className="w-4 h-4 text-[#B600A8]" />
                <span>Avatar Studio · Background Remover</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Import Your 3D Avatar (Red Screen Removal)
              </h2>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1 max-w-2xl font-light">
                Drop or select your KlingAI 3D avatar with the red background. Our real-time chroma-key engine removes the red backdrop, despills edge fringing, and applies the clean cutout to your portfolio.
              </p>
            </div>

            {/* Hidden canvas for pixel processing */}
            <canvas ref={canvasRef} className="hidden" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Left Column: Upload / Controls */}
              <div className="md:col-span-6 space-y-4">
                {/* Drag and Drop Zone */}
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-3xl p-6 text-center cursor-pointer transition-all ${
                    dragOver
                      ? 'border-[#B600A8] bg-[#B600A8]/10'
                      : 'border-white/20 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/40'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFileSelect(e.target.files[0]);
                      }
                    }}
                  />
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 text-white">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-semibold text-white uppercase tracking-wider mb-1">
                    Click or Drag &amp; Drop Your Avatar
                  </div>
                  <div className="text-xs text-[#D7E2EA]/60 font-light">
                    Supports PNG, JPG, WEBP, or Paste from clipboard (Ctrl+V)
                  </div>
                </div>

                {/* Preset Options */}
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#BBCCD7] font-semibold mb-2">
                    Or select pre-existing avatar:
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSourceImage('/images/avatar-main.webp');
                        setProcessedImage('/images/avatar-main.webp');
                      }}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-colors"
                    >
                      <div className="text-[11px] font-bold text-white uppercase truncate">Main 3D</div>
                      <div className="text-[9px] text-[#BBCCD7] truncate">Desk / Sitting</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSourceImage('/images/avatar-working.webp');
                        setProcessedImage('/images/avatar-working.webp');
                      }}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-colors"
                    >
                      <div className="text-[11px] font-bold text-white uppercase truncate">Working</div>
                      <div className="text-[9px] text-[#BBCCD7] truncate">Laptop Mode</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSourceImage('/images/github-avatar.png');
                        setProcessedImage('/images/github-avatar.png');
                      }}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-colors"
                    >
                      <div className="text-[11px] font-bold text-white uppercase truncate">GitHub</div>
                      <div className="text-[9px] text-[#BBCCD7] truncate">Real Photo</div>
                    </button>
                  </div>
                </div>

                {/* Chroma-key Fine Tuning Sliders */}
                {sourceImage && (
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-[#BBCCD7]">
                      <span className="flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-[#B600A8]" />
                        Keying Adjustments
                      </span>
                      {isProcessing && (
                        <span className="text-[10px] text-amber-400 flex items-center gap-1">
                          <RefreshCw className="w-3 h-3 animate-spin" /> Processing...
                        </span>
                      )}
                    </div>

                    {/* Sensitivity */}
                    <div>
                      <div className="flex justify-between text-xs text-[#D7E2EA] mb-1">
                        <span>Red Threshold Sensitivity</span>
                        <span className="font-mono">{sensitivity}</span>
                      </div>
                      <input
                        type="range"
                        min="30"
                        max="130"
                        value={sensitivity}
                        onChange={(e) => handleSensitivityChange(Number(e.target.value))}
                        className="w-full accent-[#B600A8]"
                      />
                    </div>

                    {/* Softness */}
                    <div>
                      <div className="flex justify-between text-xs text-[#D7E2EA] mb-1">
                        <span>Edge Softness / Feathering</span>
                        <span className="font-mono">{softness}px</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="60"
                        value={softness}
                        onChange={(e) => handleSoftnessChange(Number(e.target.value))}
                        className="w-full accent-[#7621B0]"
                      />
                    </div>

                    {/* Despill Toggle */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-[#D7E2EA]">De-spill Red Rim Light on Edges</span>
                      <button
                        type="button"
                        onClick={() => handleDespillToggle(!despill)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                          despill
                            ? 'bg-emerald-500 text-black'
                            : 'bg-white/10 text-white/60'
                        }`}
                      >
                        {despill ? 'Enabled' : 'Disabled'}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Live Interactive Preview */}
              <div className="md:col-span-6 flex flex-col items-center justify-between h-full bg-[#141414] rounded-3xl p-6 border border-white/10 min-h-[380px]">
                <div className="w-full flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Portfolio Preview</span>
                  </span>

                  {sourceImage && (
                    <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10 text-xs">
                      <button
                        type="button"
                        onClick={() => setViewMode('processed')}
                        className={`px-2.5 py-1 rounded-md uppercase tracking-wider text-[10px] font-semibold transition-colors ${
                          viewMode === 'processed'
                            ? 'bg-white text-black'
                            : 'text-[#BBCCD7] hover:text-white'
                        }`}
                      >
                        Cutout
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode('original')}
                        className={`px-2.5 py-1 rounded-md uppercase tracking-wider text-[10px] font-semibold transition-colors ${
                          viewMode === 'original'
                            ? 'bg-white text-black'
                            : 'text-[#BBCCD7] hover:text-white'
                        }`}
                      >
                        Original
                      </button>
                    </div>
                  )}
                </div>

                {/* Avatar Display Stage */}
                <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden rounded-2xl bg-[#0C0C0C] border border-white/5 p-4 min-h-[260px]">
                  {/* Subtle ambient glow behind avatar */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#7621B0]/20 via-transparent to-transparent pointer-events-none" />

                  {processedImage || currentAvatar ? (
                    <img
                      src={
                        viewMode === 'original' && sourceImage
                          ? sourceImage
                          : processedImage || currentAvatar
                      }
                      alt="Avatar Preview"
                      className="max-h-[280px] w-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                    />
                  ) : (
                    <div className="text-xs text-[#D7E2EA]/40 text-center font-light uppercase tracking-wider">
                      No avatar selected yet
                    </div>
                  )}
                </div>

                {/* Action Footer */}
                <div className="w-full pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  {processedImage && (
                    <button
                      type="button"
                      onClick={handleDownload}
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-wider text-[#D7E2EA] hover:bg-white/10 transition-colors"
                      title="Download transparent PNG"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Export PNG</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={handleApply}
                    disabled={!processedImage}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full uppercase tracking-widest text-xs font-semibold text-white shadow-lg transition-transform hover:scale-105 disabled:opacity-50 disabled:pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      outline: '2px solid white',
                      outlineOffset: '-3px',
                    }}
                  >
                    <Check className="w-4 h-4" />
                    <span>Apply to Portfolio</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
