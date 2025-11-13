import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from './components/theme-provider';

const Rubik = localFont({
  src: '../../public/assets/fonts/Rubik-VariableFont_wght.ttf',
});

export const metadata: Metadata = {
  title: 'Frontend Quiz App',
  description: 'A quiz to test your frontend development knowledge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={Rubik.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
