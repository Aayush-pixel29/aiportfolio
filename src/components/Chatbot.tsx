"use client";

import { useState } from "react";
import { MessageCircle, X, Send, User, Mail, MessageSquare, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xlgqrkel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Close after 3 seconds on success
        setTimeout(() => setIsOpen(false), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (status === "success") setStatus("idle");
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className={`fixed bottom-6 right-6 p-4 bg-primary text-primary-dark rounded-full shadow-lg hover:shadow-xl transition-all z-40 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageCircle size={28} className="text-white" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-full max-w-[350px] bg-white border border-border shadow-2xl rounded-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-foreground text-background p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageSquare size={20} className="text-primary" />
                <h3 className="font-semibold">Leave a Message</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-background/80 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Form Area */}
            <div className="p-5 bg-gray-50">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 text-center space-y-3">
                  <CheckCircle size={48} className="text-green-500" />
                  <h4 className="font-bold text-lg">Message Sent!</h4>
                  <p className="text-sm text-gray-500">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-gray-600 mb-4">
                    Have a question or want to work together? Send me a direct message below.
                  </p>
                  
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 flex items-center gap-1"><User size={12}/> Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
                      disabled={status === "submitting"}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 flex items-center gap-1"><Mail size={12}/> Email</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
                      disabled={status === "submitting"}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 flex items-center gap-1"><MessageSquare size={12}/> Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Hi Aayush, I'd like to discuss..."
                      rows={4}
                      className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white resize-none"
                      disabled={status === "submitting"}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-red-500 text-center">Something went wrong. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-2.5 bg-foreground text-background rounded-lg font-medium text-sm hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin"/> Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
