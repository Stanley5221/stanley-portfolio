import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© 2025 Stanley Agyei. All rights reserved.</p>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/in/stanley-agyei-4333042ba/" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://github.com/Stanley5221" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-4 w-4" />
          </a>
          <a href="mailto:stanleyagyei61@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
