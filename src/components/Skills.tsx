import { motion } from "framer-motion";
import { Code, BarChart3, Globe, Briefcase, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeUp, stagger } from "@/lib/animations";

const categories = [
  {
    title: "Web Development",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL", "Database Design", "Google Maps API", "KML Processing", "Hosting", "Debugging"],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: ["Data Cleaning", "Analysis", "Visualization", "Power BI", "Excel", "SQL", "Research", "Reporting", "Documentation"],
  },
  {
    title: "GIS & Mapping",
    icon: Globe,
    skills: ["Drone Flight Planning", "Orthomosaic & 3D Modeling", "Land Parcel Visualization", "Master Planning", "Zoning", "Landscape Design"],
  },
  {
    title: "Business & Analysis",
    icon: Briefcase,
    skills: ["Requirements Gathering", "Workflow Design", "Stakeholder Communication", "Proposal Writing", "System Evaluation", "Process Improvement"],
  },
  {
    title: "Professional",
    icon: Users,
    skills: ["Project Management", "Client Delivery", "Team Leadership", "Remote Work", "International Compliance", "Teaching & Mentoring"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            What I <span className="text-gradient font-display italic">Bring</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: "0 0 30px hsl(142 50% 45% / 0.08)" }}
              className="bg-card border border-border rounded-xl p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <cat.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <Badge key={s} variant="secondary" className="bg-muted text-muted-foreground text-xs font-normal border-0">
                    {s}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
