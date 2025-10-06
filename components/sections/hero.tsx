import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "@/components/ui/typewriter";

export default function Hero() {
  return (
    <section id="home" className="page-container section -mt-6 md:-mt-10">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Left: text */}
        <div className="stack-lg text-left">
          <div className="stack-sm">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl anim-rise">
              <span className="text-shimmer">{personalInfo.name}</span>
            </h1>
            <Typewriter
              text={personalInfo.title}
              className="text-lg text-muted-foreground md:text-xl anim-fade-up anim-delay-1"
              speedMs={28}
              startDelayMs={250}
            />
          </div>
          <p className="text-lg text-foreground/80 md:text-xl anim-fade-up anim-delay-2">
            {personalInfo.bio}
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row anim-fade-up anim-delay-3">
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

        {/* Right: photo */}
        <div className="flex justify-center md:justify-end anim-fade-up">
          <div className="relative w-full max-w-sm">
            <Image
              src="/tm1.png.jpeg"
              alt="Portrait of Vedant"
              width={640}
              height={800}
              priority
              sizes="(min-width: 768px) 400px, 60vw"
              className="rounded-2xl shadow-xl glow-ring object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
