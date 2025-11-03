// app/layout.js
import Header from '@/components/Header';
import "./globals.css";
import DebugDarkMode from '@/components/DebugDarkMode';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        {/* <DebugDarkMode /> */}
        {children}
      </body>
    </html>
  );
}