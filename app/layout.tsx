import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: "Vedant's Portfolio",
  description: 'Python Developer | Full-Stack Developer | AI/ML Enthusiast',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head />
      <body className={`font-body antialiased ${poppins.className}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
