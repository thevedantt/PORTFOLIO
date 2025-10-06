"use client";
import { useEffect, useState } from "react";

export default function GithubStats() {
  // Static values as per screenshot; could be wired to API later
  const languages = [
    { name: "Jupyter Notebook", value: 44.04, className: "lang-jupyter" },
    { name: "HTML", value: 20.80, className: "lang-html" },
    { name: "JavaScript", value: 12.27, className: "lang-js" },
    { name: "TypeScript", value: 11.35, className: "lang-ts" },
    { name: "Python", value: 7.27, className: "lang-python" },
    { name: "CSS", value: 4.28, className: "lang-css" },
  ];

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="page-container section stack-lg">
      <div className="stack-md text-center anim-fade-up">
        <h2>GitHub Insights</h2>
        <p className="mx-auto max-w-2xl">Most Used Languages</p>
      </div>

      {/* Stacked animated bar */}
      <div className="card-elevated card-hover anim-rise">
        <div className="stack-md">
          <div className="h-5 w-full overflow-hidden rounded-full bg-secondary glow-ring">
            <div className="flex h-full w-full">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className={`${lang.className} ${mounted ? "bar-appear" : ""}`}
                  style={{
                    // use CSS var to animate to width
                    // @ts-expect-error CSS custom property
                    "--w": `${lang.value}%`,
                  }}
                  title={`${lang.name} ${lang.value}%`}
                />
              ))}
            </div>
          </div>

          {/* Legend with individual progress */}
          <div className="grid gap-4 sm:grid-cols-2">
            {languages.map((lang) => (
              <div key={lang.name} className="stack-sm">
                <div className="flex items-center gap-2">
                  <span className={`lang-dot ${lang.className}`} />
                  <span className="text-sm">
                    {lang.name} {lang.value}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className={`${lang.className} ${mounted ? "bar-appear" : ""}`}
                    style={{
                      // @ts-expect-error CSS custom property
                      "--w": `${lang.value}%`,
                      height: "100%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
