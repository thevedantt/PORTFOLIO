"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavContent = () => (
    <>
      {navLinks.map((link) => (
        <Button key={link.href} variant="link" asChild className="text-foreground/80 hover:text-foreground text-base">
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl font-bold tracking-tighter text-primary">
          {personalInfo.aka}
        </Link>
        <nav className="hidden md:flex items-center space-x-2">
          <NavContent />
          <Button asChild>
            <a href="mailto:vedanttalekar1705@gmail.com">Hire Me</a>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col items-center space-y-6 pt-12">
                {navLinks.map((link) => (
                  <Button key={link.href} variant="link" asChild className="text-2xl text-foreground">
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
                <Button asChild size="lg" className="text-xl">
                  <a href="mailto:vedanttalekar1705@gmail.com">Hire Me</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
