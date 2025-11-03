// app/layout.js
import Header from '@/components/Header';
import "./globals.css";
import DebugDarkMode from '@/components/DebugDarkMode';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <LanguageProvider>
          <Header />
          {/* <DebugDarkMode /> */}
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}