"use client";

import { useSession, signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Connect() {
  const { data: session } = useSession();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Autofill if logged in
  useEffect(() => {
    if (session?.user) {
      setFormData(prev => ({
        ...prev,
        name: session.user?.name || prev.name,
        email: session.user?.email || prev.email,
      }));
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xlgqrkel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full py-24 z-10 relative" id="connect">
      <h2 className="text-sm font-mono text-signal-cyan tracking-widest uppercase mb-12">
        {"//"} Connect
      </h2>
      
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h3 className="text-3xl font-display font-medium text-white mb-6">
            Let&apos;s build something resilient.
          </h3>
          <p className="text-text-dim leading-relaxed mb-8 max-w-md">
            Open to full-time AI Engineer and Full-Stack roles. If you&apos;re hiring or just want to talk about edge AI and multi-agent systems — reach out.
          </p>

          {!session && (
            <div className="signal-card p-6 border-dashed bg-white/[0.02] mb-8">
              <p className="text-sm text-text-dim mb-4">Want to save some typing?</p>
              <button 
                onClick={() => signIn("google")}
                className="w-full flex items-center justify-center gap-3 bg-white text-black px-4 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
            </div>
          )}
        </div>

        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="bg-surface border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-signal-cyan transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="bg-surface border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-signal-cyan transition-colors"
              />
            </div>
            <input 
              type="text" 
              placeholder="Company / Role (Optional)" 
              value={formData.company}
              onChange={e => setFormData({...formData, company: e.target.value})}
              className="bg-surface border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-signal-cyan transition-colors"
            />
            <textarea 
              placeholder="Message" 
              required
              rows={5}
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              className="bg-surface border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-signal-cyan transition-colors resize-none"
            />
            
            <button 
              type="submit" 
              disabled={status === "submitting" || status === "success"}
              className={`btn-primary flex items-center justify-center gap-2 mt-2 ${status === "success" ? "bg-green-600" : ""}`}
            >
              {status === "submitting" ? "Sending..." : status === "success" ? <><CheckCircle2 size={18} /> Sent</> : <><Send size={18} /> Send Message</>}
            </button>
            
            {status === "error" && (
              <p className="text-red-400 text-sm text-center mt-2">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
