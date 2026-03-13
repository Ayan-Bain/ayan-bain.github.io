import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Cpu, Code2, Layers, Github, ExternalLink, Download, Rocket, Star, Shield, Smartphone } from 'lucide-react';

const App = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "HAB App (Mess Rebate)",
      description: "Engineered a robust mess rebate module for the official IITG HAB Application. Managing dynamic allowances across hostel networks.",
      tech: ["Flutter", "Node.js", "MongoDB", "REST API"],
      link: "https://github.com/Coding-Club-IITG/iitgHABapp/tree/messrebate",
      icon: <MobileAppIcon className="w-6 h-6 text-electric-indigo" />
    },
    {
      title: "RIF App-Dev Task",
      description: "A specialized app-dev assignment for RIF. Architecting scalable frontend UI and asynchronous data pipelines.",
      tech: ["React Native", "Provider", "App Dev"],
      link: "https://github.com/Ayan-Bain/task-2-rif-appdev",
      icon: <Layers className="w-6 h-6 text-cyan-neon" />
    },
    {
      title: "PokeDex",
      description: "A high-performance interactive PokeDex fetching live telemetry from PokeAPI. Features smooth animations and data parsing.",
      tech: ["React Native", "PokeAPI", "Animations"],
      link: "https://github.com/Ayan-Bain/PokeDex-Coding_Club",
      icon: <Smartphone className="w-6 h-6 text-cyan-neon" />
    }
  ];

  return (
    <div className="relative min-h-screen font-sans selection:bg-electric-indigo/30 selection:text-white pb-20 overflow-hidden">
      
      {/* Event Horizon Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border-2 border-cyan-neon rounded-full pointer-events-none z-[100] mix-blend-screen shadow-[0_0_15px_rgba(0,209,255,0.5)] hidden md:block"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovered ? 1.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 1500, damping: 40, mass: 0.1 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-electric-indigo rounded-full pointer-events-none z-[100] hidden md:block"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ type: "tween", duration: 0 }}
      />

      {/* Dynamic Backgrounds */}
      <div className="fixed inset-0 z-0 bg-galaxy pointer-events-none" />
      <motion.div style={{ y }} className="fixed inset-0 stars opacity-50" />
      
      {/* Floating Orbs for Ambient Lighting */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-20 left-10 w-96 h-96 bg-electric-indigo/20 rounded-full blur-[100px] z-0 pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="fixed bottom-20 right-10 w-[30rem] h-[30rem] bg-cyan-neon/10 rounded-full blur-[120px] z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 sm:pt-40">
        
        {/* Navigation/Header My Resume/CV */}
        <motion.nav 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 glass-dock px-6 py-4 flex items-center gap-8 z-50 transition-all font-mono"
        >
          <a href="#about" className="text-sm font-medium hover:text-cyan-neon transition-colors duration-300 hover:scale-110 transform cursor-none" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>About</a>
          <a href="#education" className="text-sm font-medium hover:text-cyan-neon transition-colors duration-300 hover:scale-110 transform cursor-none" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Education</a>
          <a href="#projects" className="text-sm font-medium hover:text-cyan-neon transition-colors duration-300 hover:scale-110 transform cursor-none" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Projects</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-electric-indigo/20 hover:bg-electric-indigo/40 border border-electric-indigo/50 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] cursor-none" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Download className="w-4 h-4" />
            My Resume/CV
          </a>
        </motion.nav>

        {/* Hero Section */}
        <header className="flex flex-col items-center justify-center min-h-[70vh] text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-cyan-neon/20 bg-cyan-neon/5 backdrop-blur-sm text-xs md:text-sm text-cyan-neon font-mono">
              <Rocket className="w-4 h-4" />
              <span>1st-Year ECE @ IIT Guwahati</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-neon via-white to-electric-indigo font-mono text-glow">Ayan Bain</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-mono">
              Bridging the physical and the digital: Engineering <span className="text-white font-medium">intelligent silicon</span> and architecting <span className="text-white font-medium">weightless backends</span>.
            </p>

            <motion.div 
              className="mt-12 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a href="#projects" className="px-8 py-4 bg-white text-obsidian font-bold rounded-full hover:bg-cyan-neon hover:text-obsidian transition-all duration-300 transform hover:-translate-y-1 cursor-none shadow-[0_0_20px_rgba(255,255,255,0.2)]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                My Projects
              </a>
              <a href="https://github.com/Ayan-Bain" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 glass-panel font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 cursor-none" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <Github className="w-5 h-5" />
                GitHub Profile
              </a>
            </motion.div>
          </motion.div>
        </header>

        {/* About & Narrative Section */}
        <section id="about" className="py-24 relative z-10 mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            animate={{ y: [0, -10, 0] }}
            className="glass-panel p-8 md:p-12 relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-neon/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-4 inline-block font-mono">Giving machines their minds</h2>
                <p className="text-slate-300 mb-6 leading-relaxed font-mono text-sm group">
                  My mission bridges the raw physics of hardware with the limitless abstraction of software. As an <span className="text-cyan-neon group-hover:text-glow transition-all">ECE student</span>, I decode signals and circuits. As a <span className="text-electric-indigo group-hover:text-glow transition-all">Backend & App Developer</span>, I build the architectures that give those signals meaning.
                </p>
                <div className="flex flex-col gap-4 mt-6">
                  <h3 className="font-semibold text-white font-mono text-sm border-b border-white/10 pb-2">PORs (Position of Responsibility)</h3>
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-obsidian/40 border border-white/5 backdrop-blur-md">
                    <Terminal className="w-6 h-6 text-cyan-neon shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white text-sm font-mono">Deputy Coordinator | Coding Club</h4>
                      <p className="text-xs text-slate-400 font-mono mt-1"><span className="text-cyan-neon">The Digital Trajectory:</span> Architecting robust student initiatives, fostering algorithmic thinking, and ensuring our codebases maintain escape velocity.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-obsidian/40 border border-white/5 backdrop-blur-md">
                    <Cpu className="w-6 h-6 text-electric-indigo shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white text-sm font-mono">Associate | Robotics Club</h4>
                      <p className="text-xs text-slate-400 font-mono mt-1"><span className="text-electric-indigo">The Physical Payload:</span> Operating at the intersection of hardware and software. Collaborating to build autonomous systems and bridging the hardware components with intelligent control systems.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Terminal className="w-6 h-6"/>, label: "Backend Core", sub: "Node, Express, MongoDB" },
                  { icon: <Smartphone className="w-6 h-6"/>, label: "App Dev", sub: "React Native" },
                  { icon: <Cpu className="w-6 h-6"/>, label: "Hardware", sub: "Arduino" },
                  { icon: <Code2 className="w-6 h-6"/>, label: "Languages", sub: "C++, JS/TS, Python" },
                ].map((skill, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05, y: -5, boxShadow: "0 0 20px rgba(0,209,255,0.2)" }}
                    className="p-5 rounded-xl border border-white/10 bg-obsidian/40 flex flex-col items-center justify-center text-center gap-3 backdrop-blur-sm transition-all group cursor-none"
                  >
                    <div className="text-slate-400 group-hover:text-cyan-neon transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-200 font-mono">{skill.label}</h4>
                      <p className="text-xs text-slate-500 mt-1 font-mono">{skill.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>        {/* Education Section */}
        <section id="education" className="py-24 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono text-glow">The Launchpad</h2>
            <p className="text-slate-400 max-w-xl mx-auto font-mono text-sm">The trajectory of my academic journey, securing coordinates for deep-tech exploration.</p>
          </div>

          <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-8"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-neon bg-obsidian text-cyan-neon shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(0,209,255,0.4)] z-10">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/10 bg-obsidian/40 backdrop-blur-md transition-all hover:border-cyan-neon/50">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white font-mono">IIT Guwahati</h3>
                  <span className="text-xs font-semibold text-cyan-neon font-mono bg-cyan-neon/10 py-1 px-2 rounded-full">2025 - 2029</span>
                </div>
                <p className="text-sm text-electric-indigo font-mono mb-3">B.Tech in Electronics and Communication Engineering (ECE)</p>
                <p className="text-sm text-slate-400 font-mono">The current mission: Mastering the complexities of signals, systems, and deep-tech architectures at one of the nation's premier institutes.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-8"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-electric-indigo bg-obsidian text-electric-indigo shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(79,70,229,0.4)] z-10">
                <Star className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/10 bg-obsidian/40 backdrop-blur-md transition-all hover:border-electric-indigo/50">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white font-mono">Delhi World Public School Kalyani</h3>
                  <span className="text-xs font-semibold text-electric-indigo font-mono bg-electric-indigo/10 py-1 px-2 rounded-full">2023 - 2025</span>
                </div>
                <p className="text-sm text-cyan-neon font-mono mb-3">Higher Secondary Education</p>
                <p className="text-sm text-slate-400 font-mono"> Sharpened the computational logic and physics foundational knowledge required to enter the elite IIT ecosystem.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-obsidian text-slate-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                 <Shield className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/10 bg-obsidian/40 backdrop-blur-md transition-all hover:border-white/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white font-mono">Ramakrishna Mission Vidyalaya, Narendrapur</h3>
                  <span className="text-xs font-semibold text-slate-300 font-mono bg-white/5 py-1 px-2 rounded-full">2017 - 2023</span>
                </div>
                <p className="text-sm text-slate-300 font-mono mb-3">Primary & Secondary Education</p>
                <p className="text-sm text-slate-400 font-mono">The initial foundation. Cultivated the core principles of analytical thinking, discipline, and scientific curiosity.</p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Projects Display */}
        <section id="projects" className="py-24 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono text-glow">My Projects</h2>
            <p className="text-slate-400 max-w-xl mx-auto font-mono text-sm">Systems engineered for the sake of it. Scalable, self-sustaining, and weightless.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <ProjectCard 
                key={idx}
                title={proj.title}
                description={proj.description}
                tech={proj.tech}
                link={proj.link}
                icon={proj.icon}
                idx={idx}
                setIsHovered={setIsHovered}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pb-24 text-center text-slate-500 text-sm border-t border-glass-border/20 pt-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-2 font-mono">
              <Star className="w-4 h-4 text-cyan-neon" />
              <span>Forged by Ayan Bain</span>
            </div>
            <p className="text-xs font-mono">&copy; Reserved by Ayan Bain</p>
          </motion.div>
        </footer>

      </div>
    </div>
  );
};

const MobileAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 2v20c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2z"></path>
    <path d="M12 18h.01"></path>
  </svg>
);

const ProjectCard = ({ title, description, tech, link, icon, idx, setIsHovered }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: idx * 0.2 }}
      animate={{ y: [0, -12, 0] }}
      whileHover={{ y: -20, scale: 1.02, transition: { duration: 0.3 } }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      className="glass-shard p-8 flex flex-col h-full relative group overflow-hidden cursor-none"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-electric-indigo/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="p-3 bg-obsidian/50 rounded-2xl w-min mb-6 border border-glass-white group-hover:border-cyan-neon/50 transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-3 font-mono group-hover:text-cyan-neon transition-colors duration-300 relative z-10">{title}</h3>
      <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed font-mono relative z-10">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8 relative z-10">
        {tech.map((t, i) => (
          <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-electric-indigo/10 text-cyan-neon border border-electric-indigo/20">
            {t}
          </span>
        ))}
      </div>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-auto flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white group-hover:text-cyan-neon transition-colors pt-4 border-t border-glass-border/30 cursor-none relative z-10"
      >
        <Github className="w-5 h-5" />
        View Repository
        <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2" />
      </a>
    </motion.div>
  );
};

export default App;
