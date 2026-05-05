"use client";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-background">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay"></div>

      {/* Slowly Drifting Ambient Blobs - Disabled for Reduced Motion via CSS */}
      <div 
        className="ambient-blob motion-reduce:animation-none absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary-container/5 blur-[160px] rounded-full"
        style={{ animationDelay: "0s" }}
      ></div>
      
      <div 
        className="ambient-blob motion-reduce:animation-none absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-secondary/5 blur-[140px] rounded-full"
        style={{ animationDelay: "-5s", animationDuration: "25s" }}
      ></div>

      <div 
        className="ambient-blob motion-reduce:animation-none absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] bg-primary-fixed/5 blur-[120px] rounded-full"
        style={{ animationDelay: "-10s", animationDuration: "22s" }}
      ></div>

      {/* Static deep background tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background opacity-80"></div>
    </div>
  );
}
