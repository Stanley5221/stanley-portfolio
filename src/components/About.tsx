import { motion } from "framer-motion";
import { MapPin, Languages, Brain } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const facts = [
  { icon: MapPin, text: "Based in Sunderland, UK (open to remote/hybrid)" },
  { icon: Languages, text: "Fluent in English" },
  { icon: Brain, text: "HCIA certified, drone pilot, full-stack dev" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-5xl mx-auto px-4 sm:px-6"
      >
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            About <span className="text-gradient font-display italic">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div variants={fadeUp} className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a versatile IT professional with a passion for using data and technology to solve real-world problems. My journey started in Ghana, where I co-developed enterprise systems for land management, healthcare, and tourism. Now pursuing an MSc in Data Science at the University of Sunderland, I'm ready to bring my unique blend of web development, GIS, and business analysis to new challenges.
            </p>
            <p>
              I don't just build software — I build solutions that improve efficiency, accuracy, and user experience.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground font-medium">
              "To bridge the gap between technology and sustainable development through innovative data systems and geospatial intelligence."
            </blockquote>
          </motion.div>
          <motion.div variants={stagger} className="space-y-4">
            {facts.map((f) => (
              <motion.div key={f.text} variants={fadeUp} className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border">
                <f.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{f.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
