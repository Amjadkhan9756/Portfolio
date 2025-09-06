import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    setIsLoaded(true);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Dynamic Gradient Background */}
      <div 
        className="absolute inset-0 opacity-40 transition-all duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(99, 102, 241, 0.2), 
            rgba(168, 85, 247, 0.15), 
            rgba(236, 72, 153, 0.1), 
            transparent 50%)`
        }}
      />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="h-full w-full bg-gradient-to-br from-indigo-800/30 via-purple-800/20 to-pink-800/30" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px',
               animation: 'gridMove 20s linear infinite'
             }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-600/20 to-purple-600/25 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/25 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-indigo-600/15 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className={`relative z-10 container mx-auto px-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center max-w-7xl w-full">
            
            {/* Left Section - Enhanced Image */}
            <div className="flex items-center justify-center order-2 xl:order-1">
              <div className="relative group">
                {/* Multiple Glowing Rings */}
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-all duration-700 animate-spin-slow" />
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-all duration-700 animate-pulse" />
                
                {/* Main Image Container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-2xl transform group-hover:scale-110 transition-all duration-700 border-4 border-purple-500/30">
                  <img
                    className="w-full h-full object-cover filter group-hover:brightness-125 group-hover:contrast-110 transition-all duration-700"
                    src="/image/IMG_20240919_145329_007.jpg"
                    alt="Amjad Khan - Full Stack Developer"
                  />
                  
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Scanning Line Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan" />
                  </div>
                </div>

                {/* Name Label on Photo */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-purple-600/90 to-cyan-600/90 backdrop-blur-lg rounded-2xl border border-purple-400/30 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white font-semibold text-lg bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    Amjad Khan
                  </span>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce">
                  <span className="text-white text-2xl">⚛️</span>
                </div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-bounce">
                  <span className="text-white text-2xl">🚀</span>
                </div>
              </div>
            </div>

            {/* Right Section - Enhanced Text */}
            <div className="flex items-center justify-center order-2 xl:order-2">
              <div className="relative group w-full max-w-2xl">
                {/* Background Glow */}
                <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                
                {/* Main Container */}
                <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-12 shadow-2xl transform group-hover:scale-105 transition-all duration-500 overflow-hidden">
                  
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20" style={{
                      backgroundImage: `
                        radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)
                      `
                    }} />
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-float-particle-${i % 3}`}
                        style={{
                          top: `${20 + (i * 15) % 60}%`,
                          left: `${10 + (i * 20) % 80}%`,
                          animationDelay: `${i * 0.5}s`
                        }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Greeting */}
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
                        👋 Welcome to my digital space
                      </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                      <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                        Amjad Khan
                      </span>
                    </h1>

                    {/* Animated Underline */}
                    <div className="flex justify-center mb-8">
                      <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-full animate-pulse" />
                    </div>

                    {/* Subtitle with Typewriter Effect */}
                    <div className="mb-8">
                      <h2 className="text-xl lg:text-2xl text-gray-300 font-medium mb-2">
                        <span className="text-purple-400 font-semibold">Full Stack Developer</span> & 
                        <span className="text-cyan-400 font-semibold"> MERN Expert</span>
                      </h2>
                      <p className="text-gray-400 text-lg">
                        Crafting digital experiences with cutting-edge technology
                      </p>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                      {['React.js', 'Node.js', 'Express.js','MongoDB' , 'TypeScript', 'Next.js'].map((skill, index) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300 hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-300 hover:scale-105"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                      <button className="group px-8 py-4 border-2 border-cyan-500/50 rounded-2xl font-semibold text-cyan-400 hover:bg-cyan-500/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                        <span className="flex items-center justify-center gap-2">
                          Get In Touch
                          <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-purple-500/50 rounded-tl-lg" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-500/50 rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-pink-500/50 rounded-bl-lg" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-purple-500/50 rounded-br-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes scan {
          0% { top: 0%; opacity: 1; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float-particle-0 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          50% { transform: translateY(-10px) translateX(5px); opacity: 1; }
        }
        
        @keyframes float-particle-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
          50% { transform: translateY(-15px) translateX(-5px); opacity: 1; }
        }
        
        @keyframes float-particle-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
          50% { transform: translateY(-12px) translateX(3px); opacity: 1; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-scan { animation: scan 2s linear infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-float-particle-0 { animation: float-particle-0 4s ease-in-out infinite; }
        .animate-float-particle-1 { animation: float-particle-1 5s ease-in-out infinite; }
        .animate-float-particle-2 { animation: float-particle-2 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

export default Home;