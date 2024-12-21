'use client'; // Mark as a client component
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeProviderWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  // UseEffect to delay theme initialization until the component is mounted in the browser
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>; // Return children without the ThemeProvider during SSR
  }

  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </ThemeProvider>
  );
}
