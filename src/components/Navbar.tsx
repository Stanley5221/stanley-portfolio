import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Journey", href: "#journey" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-foreground tracking-tight">
          Stanley<span className="text-primary">.</span>Dev
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5 glow-green" asChild>
            <a href="/Stanley Agyei CV TT.pdf" download="Stanley_Agyei_CV.pdf">
              <Download className="h-3.5 w-3.5" /> CV
            </a>
          </Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary">
                  {l.label}
                </a>
              ))}
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5" asChild>
                <a href="/Stanley Agyei CV TT.pdf" download="Stanley_Agyei_CV.pdf">
                  <Download className="h-3.5 w-3.5" /> Download CV
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
