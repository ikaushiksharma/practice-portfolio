import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kaushik Sharma | Web Developer',
  description: 'Portfolio website for Kaushik Sharma',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-secondary">{children}</body>
    </html>
  );
}
