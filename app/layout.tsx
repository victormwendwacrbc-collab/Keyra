import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Keyra - Property Discovery Platform',
  description: 'Discover and explore properties with Keyra, your modern property discovery platform.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <footer className="border-t bg-white py-6 text-center text-gray-600 text-sm">
          <p>&copy; 2026 Keyra Property Discovery. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
