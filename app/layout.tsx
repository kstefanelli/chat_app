import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import FirebaseAuthProvider from '@/components/FirebaseAuthProvider';
import ClientProviders from '@/components/ClientProviders';

export const metadata: Metadata = {
  title: 'Chat App',
  description:
    'Chat app that translates languages allowing you chat with users who speak a different language.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ClientProviders>
          <FirebaseAuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />

              {children}
            </ThemeProvider>
          </FirebaseAuthProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
