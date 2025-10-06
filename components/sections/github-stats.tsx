import Image from "next/image";

export default function GithubStats() {
  return (
    <section id="github-stats" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            GitHub Insights
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            A quick look at my most used languages on GitHub.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <Image
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=thevedantt&layout=compact&theme=tokyonight&bg_color=0A040D&border_color=301934&title_color=B045E8&text_color=FFFFFF"
            alt="Vedant's Top Languages on GitHub"
            width={400}
            height={165}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
