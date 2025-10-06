import { experience, achievements, certifications } from "@/lib/data";

interface TimelineItemProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

const TimelineItem = ({ icon: Icon, title, subtitle, date, description }: TimelineItemProps) => (
  <div className="flex items-start gap-6">
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
      <Icon className="h-6 w-6" />
    </div>
    <div className="flex-grow">
      <p className="text-xs text-muted-foreground">{date}</p>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-primary">{subtitle}</p>
      <p className="mt-1 text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section id="experience">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Journey
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              A timeline of my professional experience, education, and accomplishments.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-8 text-2xl font-semibold tracking-tight">Experience & Education</h3>
              <div className="relative space-y-10 pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-border">
                {experience.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[37px] top-2.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background"></div>
                    <TimelineItem icon={item.icon} title={item.title} subtitle={item.company} date={item.date} description={item.description} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-8 text-2xl font-semibold tracking-tight">Achievements & Certifications</h3>
              <div className="space-y-8">
                <div className="space-y-6">
                  {achievements.map((item, index) => (
                    <TimelineItem key={index} icon={item.icon} title={item.title} subtitle={item.event} date="" description={item.description} />
                  ))}
                </div>
                 <div className="space-y-6">
                  {certifications.map((item, index) => (
                    <TimelineItem key={index} icon={item.icon} title={item.title} subtitle={item.issuer} date={item.date} description="" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
