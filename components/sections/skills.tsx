"use client";
import { skills } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  // Proficiency data to drive loaders (percentages)
  const proficiencies: Record<string, { name: string; value: number }[]> = {
    "Languages": [
      { name: "Python", value: 95 },
      { name: "JavaScript", value: 85 },
      { name: "TypeScript", value: 75 },
      { name: "SQL", value: 80 },
      { name: "HTML/CSS", value: 90 },
    ],
    "Frontend": [
      { name: "React", value: 88 },
      { name: "Next.js", value: 86 },
      { name: "Tailwind CSS", value: 90 },
      { name: "GSAP", value: 80 },
    ],
    "Backend": [
      { name: "Flask", value: 90 },
      { name: "Firebase", value: 85 },
      { name: "SQLite", value: 88 },
      { name: "Neon DB", value: 75 },
      { name: "FastAPI", value: 85 },
    ],
    "ML/AI": [
      { name: "TensorFlow", value: 80 },
      { name: "Scikit-learn", value: 85 },
      { name: "LangChain", value: 90 },
      { name: "OpenAI API", value: 92 },
      { name: "Gemini API", value: 88 },
      { name: "RAG Pipelines", value: 90 },
      { name: "FAISS / Vector DBs", value: 88 },
    ],
    "UI/UX Design": [
      { name: "Figma", value: 95 },
      { name: "Canva", value: 90 },
      { name: "Wireframing", value: 92 },
      { name: "Prototyping", value: 90 },
    ],
    "Other Tools": [
      { name: "Git / GitHub", value: 88 },
      { name: "Vercel", value: 85 },
      { name: "PythonAnywhere", value: 82 },
      { name: "Clerk", value: 75 },
      { name: "AssemblyAI", value: 80 },
      { name: "Railway", value: 78 },
      { name: "Render", value: 78 },
    ],
  };

  // Trigger animation on mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="page-container section stack-lg">
      <div className="stack-md text-center anim-fade-up">
        <h2 className="heading-underline"><span className="text-gradient-primary">Tech Toolbox</span></h2>
        <p className="mx-auto max-w-2xl">
          The tools, frameworks, and languages I use to bring ideas to life.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skillCategory) => (
          <Card key={skillCategory.category} className="card-elevated card-hover anim-rise">
            <CardHeader className="flex flex-row items-center gap-4">
              <skillCategory.icon className="h-8 w-8 text-primary" />
              <CardTitle>{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(proficiencies[skillCategory.category] || skillCategory.list.map((name) => ({ name, value: 75 }))).map((item, idx) => (
                <div key={item.name} className="space-y-2 anim-fade-up" style={{ animationDelay: `${(idx % 5) * 60}ms` }}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/90">{item.name}</span>
                    <span className="text-muted-foreground">{item.value}%</span>
                  </div>
                  <Progress value={mounted ? item.value : 0} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
