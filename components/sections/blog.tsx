import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Rise of AI Voice Agents",
    description: "Exploring the architecture and impact of real-time conversational AI in modern applications.",
    date: "October 26, 2024",
  },
  {
    title: "Full-Stack Development with Next.js and Python",
    description: "A guide to building powerful web apps by combining the strengths of Next.js for the frontend and Python for the backend.",
    date: "September 15, 2024",
  },
  {
    title: "Simplifying UX with Motion UI",
    description: "How subtle animations and transitions can significantly improve user experience and engagement.",
    date: "August 02, 2024",
  },
];

export default function Blog() {
  return (
    <section id="blog">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              From the Blog
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Thoughts on technology, development, and AI.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card key={index} className="flex flex-col overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{post.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0 h-auto text-primary">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
