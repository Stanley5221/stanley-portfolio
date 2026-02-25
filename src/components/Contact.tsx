import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { fadeUp, stagger } from "@/lib/animations";

const info = [
  { icon: Mail, label: "stanleyagyei61@gmail.com", href: "mailto:stanleyagyei61@gmail.com" },
  { icon: Phone, label: "+44 7990 662741", href: "tel:+447990662741" },
  { icon: MapPin, label: "UNITED KINGDOM", href: "https://maps.app.goo.gl/gQv8dFfdaE7hybie8" },
];

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-5xl mx-auto px-4 sm:px-6"
      >
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Get in <span className="text-gradient font-display italic">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div variants={stagger} className="space-y-6">
            <motion.p variants={fadeUp} className="text-muted-foreground">
              I'm always open to new opportunities and interesting projects. Feel free to reach out!
            </motion.p>
            <div className="space-y-4">
              {info.map((item) => (
                <motion.a key={item.label} variants={fadeUp} href={item.href} className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  {item.label}
                </motion.a>
              ))}
            </div>
            <motion.div variants={fadeUp} className="flex gap-3 pt-2">
              <a href="https://www.linkedin.com/in/stanley-agyei-4333042ba/" className="p-2 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://github.com/Stanley5221" className="p-2 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" maxLength={100} className="bg-muted/50 border-border" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" maxLength={255} className="bg-muted/50 border-border" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your message..." rows={4} maxLength={1000} className="bg-muted/50 border-border" />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-green">Send Message</Button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
