import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeUp, stagger } from "@/lib/animations";

const education = [
  { degree: "MSc Data Science", school: "University of Sunderland, UK", period: "Ongoing", note: "Specializing in analytics & machine learning" },
  { degree: "BSc Information Technology", school: "University of Energy and Natural Resources, Ghana", period: "2018 – 2022", note: "" },
];

const certs = [
  { name: "HCIA-DATACOM", issuer: "Huawei", year: "2022–2023" },
  { name: "HCIA-Routing & Switching", issuer: "Huawei", year: "2018–2022" },
  { name: "RPAS Safety Training", issuer: "Ghana Civil Aviation Authority", year: "2024" },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-5xl mx-auto px-4 sm:px-6"
      >
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Education & <span className="text-gradient font-display italic">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={stagger} className="space-y-4">
            <motion.h3 variants={fadeUp} className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <GraduationCap className="h-5 w-5 text-primary" /> Education
            </motion.h3>
            {education.map((e) => (
              <motion.div key={e.degree} variants={fadeUp} className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground">{e.degree}</h4>
                  <Badge variant="outline" className="text-xs border-border">{e.period}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                {e.note && <p className="text-xs text-primary mt-1">{e.note}</p>}
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={stagger} className="space-y-4">
            <motion.h3 variants={fadeUp} className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <Award className="h-5 w-5 text-primary" /> Certifications
            </motion.h3>
            {certs.map((c) => (
              <motion.div key={c.name} variants={fadeUp} className="bg-card border border-border rounded-xl p-5 flex items-center justify-between hover:border-primary/30 transition-colors">
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{c.name}</h4>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                </div>
                <Badge variant="secondary" className="text-xs">{c.year}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
