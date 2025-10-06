import { skills } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Skills() {
  return (
    <section id="skills" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tech Toolbox
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              The tools, frameworks, and languages I use to bring ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillCategory) => (
              <Card key={skillCategory.category}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <skillCategory.icon className="h-8 w-8 text-primary" />
                  <CardTitle>{skillCategory.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {skillCategory.list.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
