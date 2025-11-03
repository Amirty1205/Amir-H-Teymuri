// components/DebugDarkMode.js
"use client";
import { useEffect, useState } from 'react';

export default function DebugDarkMode() {
    const [isDark, setIsDark] = useState(false);
    const [hasDarkClass, setHasDarkClass] = useState(false);

    useEffect(() => {
        const checkDarkMode = () => {
            const darkMode = localStorage.getItem('darkMode');
            const htmlHasDark = document.documentElement.classList.contains('dark');

            setIsDark(darkMode === 'true');
            setHasDarkClass(htmlHasDark);
        };

        checkDarkMode();

        // Check periodically (for debugging)
        const interval = setInterval(checkDarkMode, 1000);
        return () => clearInterval(interval);
    }, []);

    if (process.env.NODE_ENV === 'development') {
        return (
            <div className="fixed bottom-4 left-4 z-50 p-2 bg-red-500 text-white text-xs">
                Dark Mode: {isDark ? 'ON' : 'OFF'} | HTML Class: {hasDarkClass ? 'dark' : 'light'}
            </div>
        );
    }

    return null;
}