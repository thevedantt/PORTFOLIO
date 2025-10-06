import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import GithubStats from "@/components/sections/github-stats";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 page-container stack-lg">
        <section id="hero" className="section">
          <Hero />
        </section>
        <section id="about" className="section section-muted rounded-lg">
          <About />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="skills" className="section section-muted rounded-lg">
          <Skills />
        </section>
        <section id="experience" className="section">
          <Experience />
        </section>
        <section id="github-stats" className="section section-muted rounded-lg">
          <GithubStats />
        </section>
        <section id="blog" className="section">
          <Blog />
        </section>
        <section id="contact" className="section section-muted rounded-lg">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
