import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowDown, MapPin, Camera, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax shifts
  const bgX = useTransform(springX, [0, window.innerWidth], [-20, 20]);
  const bgY = useTransform(springY, [0, window.innerHeight], [-20, 20]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Premium Texture Overlay */}
      <div className="noise-bg" />

      {/* Technical Grid Background */}
      <div className="absolute inset-0 z-0 bg-[#020609]">
        {/* Subtle base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

        {/* Major Grid */}
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--green)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--green)) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }} />

        {/* Minor Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--green)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--green)) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }} />

        {/* Diagonal Tech Lines */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--green)) 0, hsl(var(--green)) 1px, transparent 0, transparent 40px)`,
        }} />
      </div>

      {/* Data Streams */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={`stream-x-${i}`}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-data-stream-x"
            style={{
              top: `${15 + i * 15}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + (i % 3) * 2}s`
            }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={`stream-y-${i}`}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-data-stream-y"
            style={{
              left: `${10 + i * 18}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + (i % 3) * 2}s`
            }}
          />
        ))}
      </div>

      {/* Interactive Background Elements (Parallax) */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* Floating Data Nodes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1.5 h-1.5 bg-primary/40 rounded-sm border border-primary/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Dynamic Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[1000px] h-[600px] rounded-[100%] bg-primary/20 blur-[150px] -rotate-12"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-[1000px] h-[600px] rounded-[100%] bg-secondary/10 blur-[150px] rotate-12"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
                Available for Projects
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-8 tracking-tight">
              From <span className="font-display italic text-gradient glow-text">Ghana</span> <br className="hidden sm:block" />
              to the frontiers of <span className="font-display italic text-gradient glow-text">technology</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              I’m <strong className="text-foreground font-semibold">Stanley Agyei</strong> — a Data & Systems Analyst and Web Developer building intelligent solutions for modern challenges.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground gap-3 rounded-full glow-green transition-all hover:scale-105 active:scale-95" asChild>
                <a href="#journey">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">Explore My Journey</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 border-border rounded-full hover:bg-muted transition-all hover:scale-105 active:scale-95 text-foreground" asChild>
                <a href="#contact" className="font-semibold">Get in Touch</a>
              </Button>
            </div>
          </motion.div>

          {/* portrait side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-10 rounded-full bg-primary/10 blur-[60px] animate-pulse" />

              {/* Spinning Ring */}
              <div className="absolute -inset-6 rounded-full border border-primary/20 border-dashed animate-[spin_30s_linear_infinite]" />

              {/* Portrait Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full p-2 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 shadow-2xl"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 glass-panel">
                  <img
                    src="../public/pic.jpg"
                    alt="Stanley Agyei"
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-110"
                  />
                </div>
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-8 glass-panel px-5 py-3 rounded-2xl shadow-xl border-white/20"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-1">Origin</span>
                  <div className="flex items-center gap-2">
                    <img src="https://flagcdn.com/gh.svg" alt="Ghana Flag" className="h-3 w-4.5 rounded-sm object-cover shadow-sm" />
                    <span className="text-sm font-bold text-foreground">Ghana</span>
                    <span className="text-muted-foreground mx-1">→</span>
                    <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="h-3 w-4.5 rounded-sm object-cover shadow-sm" />
                    <span className="text-sm font-bold text-foreground">UK</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-12 -right-12 glass-panel px-5 py-3 rounded-2xl shadow-xl border-white/20"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] text-primary uppercase font-bold tracking-wider mb-1">Focus</span>
                  <span className="text-sm font-bold text-foreground">MSc Data Science</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Improved scroll indicator */}
        <motion.a
          href="#journey"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group"
        >
          <span className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase font-bold group-hover:text-primary transition-colors">Discover</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-1"
          >
            <motion.div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
