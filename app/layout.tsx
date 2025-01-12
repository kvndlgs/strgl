import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { MainSidebar } from '@/components/MainSidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Struggle Casino',
  description: 'Top Crypto Casino',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <MainSidebar />
          <SidebarTrigger> x </SidebarTrigger>
          <main>{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
