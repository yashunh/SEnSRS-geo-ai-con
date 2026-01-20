import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#" },
    { name: "Schedule", href: "#schedule" },
    { name: "Speakers", href: "#schedule" }, // Pointing to schedule as speakers are listed there
    { name: "Venue", href: "#register" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-xl font-bold font-display tracking-tighter flex items-center gap-2">
              <img src="https://sensrs.com/_next/image?url=%2Fimages%2Fsensrsfooterlogo-removebg.png&w=3840&q=75" alt="SEnSRS Logo" className="h-10 w-auto" />
              <span className="hidden sm:inline">GEO AI CON: Intersession</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="rounded-full px-6">Register</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border p-4 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full rounded-full">Register</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
