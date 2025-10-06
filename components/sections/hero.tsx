import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="container mx-auto px-4 md:px-6 text-center">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-primary">{personalInfo.name}</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            {personalInfo.title}
          </p>
        </div>
        <p className="text-lg text-foreground/80 md:text-xl">
          {personalInfo.bio}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <div className="flex items-center space-x-2">
            {personalInfo.socials.map((social) => (
              <Button key={social.name} variant="outline" size="icon" asChild>
                <Link href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
