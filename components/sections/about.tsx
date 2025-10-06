import { about, personalInfo } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="page-container section stack-lg">
      <div className="stack-md text-center anim-fade-up">
        <h2>About Me</h2>
        <p className="mx-auto max-w-2xl">
          A developer driven by passion and a desire to build impactful solutions.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        <Card className="card-elevated card-hover anim-rise">
          <CardHeader>
            <CardTitle>My Approach</CardTitle>
          </CardHeader>
          <CardContent className="stack-md">
            {about.aboutMe.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class=\"text-primary\">$1</strong>') }} />
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="card-elevated card-hover anim-rise anim-delay-1">
          <CardHeader>
            <CardTitle>Focus Areas</CardTitle>
          </CardHeader>
          <CardContent className="stack-md">
            {about.focusAreas.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class=\"text-primary/90\">$1</strong>') }} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <blockquote className="text-center text-xl italic text-muted-foreground md:text-2xl anim-fade-up anim-delay-2">
        &ldquo;{personalInfo.quote}&rdquo;
      </blockquote>
    </div>
  );
}
