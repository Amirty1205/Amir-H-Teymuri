// components/LanguageSelector.js
"use client";
import { useState } from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, changeLanguage } = useLanguage();

    const handleLanguageChange = (newLang) => {
        changeLanguage(newLang);
        setIsOpen(false);
        console.log('Language changed to:', newLang); // Debug log
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="Change Language"
            >
                <GlobeAltIcon className="w-6 h-6" />
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-lg py-1 z-50">
                    <button
                        onClick={() => handleLanguageChange('en')}
                        className={`w-full text-left px-3 py-2 text-sm transition-colors ${language === 'en'
                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-600 dark:text-white'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                    >
                        English
                    </button>
                    <button
                        onClick={() => handleLanguageChange('fa')}
                        className={`w-full text-left px-3 py-2 text-sm transition-colors ${language === 'fa'
                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-600 dark:text-white'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                    >
                        فارسی
                    </button>
                </div>
            )}
        </div>
    );
}