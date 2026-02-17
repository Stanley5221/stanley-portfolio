import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { fadeUp, stagger } from "@/lib/animations";
import {
  Code, Globe, Camera, BarChart3, Map, Plane,
  ExternalLink, Play, FileText, ImageIcon
} from "lucide-react";
import type { Variants } from "framer-motion";

interface Project {
  name: string;
  role: string;
  icon: typeof Code;
  image: string;
  tech: string[];
  achievement: string;
  description: string;
  liveUrl?: string;
  demoUrl?: string;
  reportUrl?: string;
}

interface Chapter {
  id: string;
  era: string;
  title: string;
  subtitle: string;
  story: string;
  photoCaption: string;
  image?: string;
  video?: string;
  projects: Project[];
}

const chapters: Chapter[] = [
  {
    id: "uk-chapter",
    era: "2025 – Present",
    title: "The UK Chapter",
    subtitle: "MSc Data Science — University of Sunderland",
    story: "Now in the UK pursuing an MSc in Data Science, I'm combining everything I've learned — web development, GIS, data analytics, and business analysis — into a new chapter. This website is part of that story. I'm ready to bring my unique blend of skills to new challenges and opportunities.",
    photoCaption: "Sunderland, university life, and new beginnings",
    image: "/3.jpg",
    projects: [],
  },
  {
    id: "building-systems",
    era: "2022 – 2024",
    title: "Building Real Systems",
    subtitle: "From ideas to enterprise — shipping software that solved real problems",
    story: "At Synergy Empresa Ltd, I went from student to lead developer. I built the Synergy Land Parcel System that eradicated double land sales using interactive maps and KML processing. I developed the Lumen App that cut client wait times by 25%. I created the Land Secretariat Database that boosted data accuracy by 30%. Every project was a new challenge, a new lesson.",
    photoCaption: "Screenshots, team photos, and project demos",
    image: "/12.jpg",
    projects: [
      {
        name: "Synergy Land Parcel System",
        role: "Lead Web Developer",
        icon: Map,
        image: "/2.png", // Map/GIS
        tech: ["HTML", "CSS", "PHP", "JS", "Google Maps"],
        achievement: "Eradicated double sales, streamlined land information",
        description: "A comprehensive land management system with interactive maps, KML file uploads, buyer tracking, and real-time parcel visualization. Built for Synergy Empresa Ltd to manage land sales across multiple sites.",
        liveUrl: "https://synergylandhub.com/1_handy_landapp2/login.php", demoUrl: "", reportUrl: "",
      },
      {
        name: "Lumen App",
        role: "Lead Web Developer",
        icon: Code,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop", // Dashboard/Analytics
        tech: ["HTML", "CSS", "PHP", "JavaScript"],
        achievement: "25% reduction in client wait time",
        description: "Client data capture application for a business center, streamlining customer onboarding and reducing wait times through digital form processing and queue management.",
        liveUrl: "", demoUrl: "",
      },
      {
        name: "Land Secretariat Database",
        role: "Lead Web Developer",
        icon: BarChart3,
        image: "/1.png", // Data/Charts
        tech: ["HTML", "CSS", "PHP", "JS", "Google Maps"],
        achievement: "30% increase in data accuracy",
        description: "Internal and external data management system for the Land Secretariat, enabling accurate record-keeping and spatial data integration for government land administration.",
        liveUrl: "https://synergylandhub.com/index.php",
      },
      {
        name: "Virtual Tours (Hotels)",
        role: "Business Improvement",
        icon: Camera,
        image: "/4.jpg", // Hotel/VR
        tech: ["Drones", "360° Cameras"],
        achievement: "50% boost in engagement & bookings",
        description: "Created immersive 360° virtual tours for Aratina and Eusbet hotels, enhancing online presence and driving direct bookings through interactive visual experiences.",
        liveUrl: "https://kuula.co/share/collection/7Kvw2?logo=1&card=1&info=0&logosize=200&fs=1&vr=0&zoom=1&sd=1&autorotate=0.49&autop=13&autopalt=1&thumbs=4&margin=9&alpha=0.67", demoUrl: "",
      },
      {
        name: "Synergy Company Website",
        role: "Lead Developer",
        icon: Globe,
        image: "/5.png", // Website/Typing
        tech: ["HTML", "CSS", "JavaScript"],
        achievement: "Improved online presence",
        description: "Designed and developed the official company website with a focus on user experience, responsive design, and clear communication of services.",
        liveUrl: "https://www.synergyempresa.com/",
      },
      {
        name: "Anglican Hospital System",
        role: "Business Analyst",
        icon: BarChart3,
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000&auto=format&fit=crop", // Medical/Data
        tech: ["Power BI", "Excel"],
        achievement: "Enhanced workflow & staff management",
        description: "Developed attendance tracking and hospital management software, with Power BI dashboards for real-time operational insights and staff performance monitoring.",
        reportUrl: "",
      },
      {
        name: "FancyWave Travel",
        role: "Lead Developer",
        icon: Plane,
        image: "/6.png",
        tech: ["HTML", "CSS", "PHP", "JavaScript"],
        achievement: "Complete Booking Solution",
        description: "A comprehensive travel booking platform featuring destination guides, currency conversion, and a seamless booking flow for international and local travelers.",
        liveUrl: "https://fancywavetravel.com/",
      },
      {
        name: "Dewaks Engineering",
        role: "Lead Developer",
        icon: Code,
        image: "/7.png",
        tech: ["HTML", "CSS", "PHP", "JavaScript"],
        achievement: "Professional Service Platform",
        description: "A robust business website developed for an engineering firm, focusing on service presentation, project portfolios, and client engagement.",
        liveUrl: "https://dewaks-eng.com/",
      },
      {
        name: "Excelon Tech Institute",
        role: "Lead Developer",
        icon: Globe,
        image: "/8.png",
        tech: ["HTML", "CSS", "PHP", "JavaScript"],
        achievement: "Streamlined Educational Management",
        description: "An educational platform designed to manage institutional data, student applications, and information dissemination for a technology institute.",
        liveUrl: "https://excelontech-inst.com/",
      },
    ],
  },
  {
    id: "flying-mapping",
    era: "2022 – 2024",
    title: "Flying & Mapping",
    subtitle: "Taking to the skies — drones, GIS, and large-scale land planning",
    story: "Working with Lumen Development as a licensed drone pilot, I took on projects that most people only see from the ground. I processed 1,500 acres of aerial imagery into orthomosaic maps, created 3D terrain models, and helped plan military logistics zones. I also co-planned master plans for the Catholic Church Grotto and Mary Queen of Peace — projects that balanced community needs with sustainable development.",
    photoCaption: "Drone shots, aerial maps, and field work",
    video: "/Sunyani.mp4",
    image: "/16.jpg",
    projects: [
      {
        name: "Catholic Church Grotto Master Plan",
        role: "Assistant Planner",
        icon: Map,
        image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=2000&auto=format&fit=crop", // Nature/Kneeling? or Map
        tech: ["GIS", "Drones"],
        achievement: "100% adherence to requirements",
        description: "A 100-acre strategic land use plan for the Catholic Church Grotto, incorporating drone surveys, terrain analysis, and sustainable development principles.",
        reportUrl: "",
      },
      {
        name: "Orthomosaic Planning (1500 acres)",
        role: "Assistant Planner",
        icon: Plane,
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2000&auto=format&fit=crop", // Drone flying
        tech: ["GIS", "Drones"],
        achievement: "20% faster project planning",
        description: "Large-scale aerial mapping project for Obuasi, processing 1500 acres of drone imagery into high-resolution orthomosaic maps for development planning.",
      },
      {
        name: "AccuGeospatial 3D Modeling",
        role: "Lead Analyst",
        icon: Globe,
        image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop", // 3D/Wireframe
        tech: ["Drones", "3D Software"],
        achievement: "30% improvement in project efficiency",
        description: "Aerial imaging and 3D model generation for geospatial analysis, providing stakeholders with accurate terrain models for infrastructure planning.",
        demoUrl: "",
      },
      {
        name: "Mary Queen of Peace Grotto Plan",
        role: "Assistant Planner",
        icon: Map,
        image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop", // Landscape
        tech: ["GIS", "Drones"],
        achievement: "Met local community needs",
        description: "Sustainable, community-focused master plan incorporating environmental assessments, stakeholder consultation, and culturally sensitive design.",
        reportUrl: "",
      },
      {
        name: "Ghana Army Command Zones Map",
        role: "Assistant Planner",
        icon: Map,
        image: "/11.jpg", // Logistics/Map
        tech: ["GIS", "Mapping Tools"],
        achievement: "20% better logistics efficiency",
        description: "Operational efficiency mapping for Ghana Armed Forces command zones, optimizing resource allocation and logistics through geospatial analysis.",
      },
    ],
  },
  {
    id: "university",
    era: "2018 – 2022",
    title: "University & Discovery",
    subtitle: "BSc Information Technology — University of Energy and Natural Resources, Ghana",
    story: "University was where I discovered my true calling. Studying IT at UENR, I went beyond textbooks — earning Huawei certifications (HCIA-DATACOM, HCIA-Routing & Switching) and eventually becoming a Teaching Assistant, mentoring the next generation of developers. This is where coding, networking, and data all came together.",
    photoCaption: "University campus, classes, and certification moments",
    projects: [],
    image: "/9.jpeg",
  },
  {
    id: "early-years",
    era: "2018 – 2022",
    title: "The Early Years",
    subtitle: "Where it all began — curiosity, creativity, and a love for design",
    story: "My journey started as a freelance graphic designer at Eusbet Hotel and for local clients across Ghana. I designed brochures, flyers, posters, and digital banners — learning how visual communication could transform a small business's presence. These early years taught me the power of design thinking and client relationships.",
    photoCaption: "Photos from your early freelance design days",
    projects: [],
    image: "/10.jpg",
  },
];

function PhotoPlaceholder({ caption, wide = false }: { caption: string; wide?: boolean }) {
  return (
    <div className={`photo-placeholder ${wide ? "aspect-video" : "aspect-[4/3]"} flex flex-col items-center justify-center gap-2`}>
      <ImageIcon className="h-8 w-8 text-muted-foreground/30" />
      <span className="text-xs text-muted-foreground/50 text-center px-4">{caption}</span>
    </div>
  );
}

function VideoPlaceholder({ caption }: { caption: string }) {
  return (
    <div className="photo-placeholder aspect-video flex flex-col items-center justify-center gap-2">
      <Play className="h-8 w-8 text-muted-foreground/30" />
      <span className="text-xs text-muted-foreground/50 text-center px-4">{caption}</span>
    </div>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.button
      variants={fadeUp}
      onClick={onClick}
      className="text-left bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-[0_0_30px_hsl(142_50%_45%/0.08)] transition-all duration-300 group flex flex-col h-full"
      whileHover={{ y: -4, scale: 1.01 }}
    >
      {/* Card Image */}
      <div className="h-40 w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-3 left-4 z-20 flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-background/90 backdrop-blur-sm">
            <project.icon className="h-4 w-4 text-primary" />
          </div>
          <span className="text-[10px] font-medium text-white/90 bg-black/20 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10">
            {project.role}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h4 className="font-semibold text-foreground mb-2 text-sm line-clamp-1">{project.name}</h4>
        <p className="text-xs text-primary font-medium mb-4">✦ {project.achievement}</p>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t} variant="outline" className="text-[10px] px-2 py-0 border-border text-muted-foreground bg-muted/50">{t}</Badge>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

export default function Journey() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="journey" className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-4xl mx-auto px-4 sm:px-6 mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            My <span className="text-gradient font-display italic">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every project tells a story. Here's mine — from designing flyers in small-town Ghana to mapping 1,500 acres from the sky.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {chapters.map((chapter, i) => (
            <motion.div
              key={chapter.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="relative pl-12 sm:pl-20 pb-20 last:pb-0"
            >
              <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-1">
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="absolute inset-0 rounded-full bg-primary animate-[pulse-ring_2s_ease-out_infinite]" />
                </div>
              </div>

              <motion.div variants={fadeUp} className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider">
                  {chapter.era}
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{chapter.title}</h3>
                <p className="text-sm text-primary font-medium">{chapter.subtitle}</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <motion.div variants={fadeUp}>
                  <p className="text-muted-foreground leading-relaxed">{chapter.story}</p>
                </motion.div>
                <motion.div variants={fadeUp} className="space-y-4">
                  {chapter.image && (
                    <div className="relative overflow-hidden rounded-xl border border-border group">
                      <img
                        src={chapter.image}
                        alt={chapter.title}
                        className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                  {chapter.video ? (
                    <div className="relative overflow-hidden rounded-xl border border-border bg-black group aspect-video">
                      <video
                        src={chapter.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 z-10 p-1.5 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10">
                        <Play className="h-3.5 w-3.5 text-white/80 fill-white/20" />
                      </div>
                    </div>
                  ) : (
                    !chapter.image && <PhotoPlaceholder caption={chapter.photoCaption} wide />
                  )}
                  {i === 2 && !chapter.video && <VideoPlaceholder caption="Drone flight footage — add your video here" />}
                </motion.div>
              </div>

              {chapter.projects.length > 0 && (
                <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {chapter.projects.map((p) => (
                    <ProjectCard key={p.name} project={p} onClick={() => setSelected(p)} />
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-lg bg-card border-border">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-foreground">
                  <selected.icon className="h-5 w-5 text-primary" />
                  {selected.name}
                </DialogTitle>
                <DialogDescription>{selected.role}</DialogDescription>
              </DialogHeader>
              <PhotoPlaceholder caption="Add project screenshot here" wide />
              <p className="text-sm text-muted-foreground leading-relaxed">{selected.description}</p>
              <p className="text-sm font-medium text-primary">✦ {selected.achievement}</p>
              <div className="flex flex-wrap gap-2">
                {selected.tech.map((t) => (
                  <Badge key={t} variant="secondary">{t}</Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {selected.liveUrl !== undefined && (
                  <Button size="sm" variant="outline" className="gap-1.5 text-xs" asChild>
                    <a href={selected.liveUrl || "#"} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5" /> View Live
                    </a>
                  </Button>
                )}
                {selected.demoUrl !== undefined && (
                  <Button size="sm" variant="outline" className="gap-1.5 text-xs" asChild>
                    <a href={selected.demoUrl || "#"} target="_blank" rel="noopener noreferrer">
                      <Play className="h-3.5 w-3.5" /> Watch Demo
                    </a>
                  </Button>
                )}
                {selected.reportUrl !== undefined && (
                  <Button size="sm" variant="outline" className="gap-1.5 text-xs" asChild>
                    <a href={selected.reportUrl || "#"} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-3.5 w-3.5" /> View Report
                    </a>
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
