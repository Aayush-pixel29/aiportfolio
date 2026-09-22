"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Terminal } from "lucide-react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        alert("Authentication Failed");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0E] text-white relative flex items-center justify-center overflow-hidden font-sans">
      
      {/* Glow Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#AB9FF2]/10 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#7F56D9]/10 blur-[120px] pointer-events-none z-0"></div>

      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none"></div>

      {/* Main Login Card */}
      <div className="w-full max-w-md phantom-card z-10 flex flex-col items-center">
        
        {/* Logo/Icon */}
        <div className="w-14 h-14 bg-white/5 border border-white/10 text-[#AB9FF2] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(171,159,242,0.2)]">
          <Terminal size={24} />
        </div>

        <h1 className="text-3xl font-bold text-center mb-2 tracking-tight">
          System Access
        </h1>
        <p className="text-sm text-white/50 mb-8 font-mono">
          Initialize secure connection
        </p>

        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-white/70 ml-1 uppercase tracking-wider">Email Protocol</label>
            <input
              type="email"
              required
              placeholder="user@network.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/50 outline-none focus:border-[#AB9FF2] focus:ring-1 focus:ring-[#AB9FF2] transition-all text-white placeholder-white/30"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="phantom-btn-primary w-full flex items-center justify-center gap-2 mt-2"
          >
            {loading ? "Authenticating..." : "Connect via Email"}
          </button>
        </form>

        <div className="w-full flex items-center gap-4 my-8 opacity-40">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white"></div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-white">OR</span>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white"></div>
        </div>

        {/* OAuth Buttons */}
        <div className="w-full flex flex-col gap-3">
          <button 
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="phantom-btn-outline w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border-white/10"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Connect via Google
          </button>
        </div>

      </div>
    </div>
  );
}
