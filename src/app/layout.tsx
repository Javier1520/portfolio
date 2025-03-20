import type { Metadata } from 'next';
import './globals.css';
import { LayoutProps } from '@/types';

export const metadata: Metadata = {
  title: 'Javier Guerrero | Full-Stack Developer',
  description: 'Portfolio of Javier Guerrero, a Full-Stack Developer specializing in backend development with Python, Django, React, and modern DevOps tools.',
};

export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
