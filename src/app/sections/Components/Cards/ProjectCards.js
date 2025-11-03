"use client";
import React, { useState, useEffect } from 'react';

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const {
    title,
    description,
    image,
    liveUrl,
    githubUrl,
    techStack = [],
    category,
    status = 'Completed',
    githubStats
  } = project;

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    // Initial check
    checkDarkMode();
    
    // Observe changes to class attribute
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { 
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const getStatusColor = (status) => {
    const baseStyles = 'text-xs px-2 py-1 rounded-full font-medium';
    
    switch (status.toLowerCase()) {
      case 'completed':
        return isDark 
          ? `${baseStyles} bg-green-900 text-green-200`
          : `${baseStyles} bg-green-100 text-green-800`;
      case 'in progress':
        return isDark 
          ? `${baseStyles} bg-yellow-900 text-yellow-200`
          : `${baseStyles} bg-yellow-100 text-yellow-800`;
      case 'archived':
        return isDark 
          ? `${baseStyles} bg-gray-800 text-gray-200`
          : `${baseStyles} bg-gray-100 text-gray-800`;
      default:
        return isDark 
          ? `${baseStyles} bg-blue-900 text-blue-200`
          : `${baseStyles} bg-blue-100 text-blue-800`;
    }
  };

  const getTechStackColor = (tech) => {
    return isDark 
      ? 'bg-gray-800 text-gray-200 border border-gray-700'
      : 'bg-gray-100 text-gray-700';
  };

  const getMoreTechColor = () => {
    return isDark 
      ? 'bg-blue-900 text-blue-200 border border-blue-700'
      : 'bg-blue-100 text-blue-700';
  };

  return (
    <div className={`
      border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full
      ${isDark 
        ? 'bg-gray-900 border-gray-700 hover:shadow-gray-800/20' 
        : 'bg-white border-gray-200 hover:shadow-gray-200'
      }
    `}>
      {/* Image Section */}
      <div className={`relative h-48 overflow-hidden ${
        isDark ? 'bg-gray-800' : 'bg-gray-100'
      }`}>
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-4/5 h-3/5 rounded animate-pulse ${
              isDark ? 'bg-gray-700' : 'bg-gray-200'
            }`} />
          </div>
        )}
        
        {imageError ? (
          <div className={`absolute inset-0 flex items-center justify-center ${
            isDark ? 'bg-gray-700' : 'bg-gray-200'
          }`}>
            <span className="text-3xl">📁</span>
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
        
        {/* Category Tag */}
        {category && (
          <div className={`
            absolute top-3 left-3 text-white px-2 py-1 rounded text-xs font-medium
            ${isDark 
              ? 'bg-gray-900 bg-opacity-90 text-gray-100' 
              : 'bg-black bg-opacity-80 text-white'
            }
          `}>
            {category}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col gap-3">
        {/* Header */}
        <div className="flex justify-between items-start gap-2">
          <h3 className={`
            text-xl font-semibold leading-tight flex-1
            ${isDark ? 'text-gray-100' : 'text-gray-900'}
          `}>
            {title}
          </h3>
          {status && (
            <span className={getStatusColor(status)}>
              {status}
            </span>
          )}
        </div>

        {/* Description */}
        <p className={`
          leading-relaxed line-clamp-3 text-sm
          ${isDark ? 'text-gray-300' : 'text-gray-600'}
        `}>
          {description}
        </p>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {techStack.slice(0, 5).map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded text-xs font-medium ${getTechStackColor(tech)}`}
              >
                {tech}
              </span>
            ))}
            {techStack.length > 5 && (
              <span className={`px-2 py-1 rounded text-xs font-medium ${getMoreTechColor()}`}>
                +{techStack.length - 5}
              </span>
            )}
          </div>
        )}

        {/* GitHub Stats */}
        {githubStats && (
          <div className={`flex gap-3 text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <span className="flex items-center gap-1">
              ⭐ {githubStats.stars || 0}
            </span>
            <span className="flex items-center gap-1">
              🍴 {githubStats.forks || 0}
            </span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="px-5 pb-5 flex gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex-1 text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium text-sm
              ${isDark
                ? 'bg-blue-600 hover:bg-blue-500 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
              }
            `}
          >
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex-1 border text-center py-2 px-4 rounded-lg transition-all duration-200 font-medium text-sm
              ${isDark
                ? 'border-gray-600 hover:border-blue-500 text-blue-400 hover:text-blue-300 bg-gray-800 hover:bg-gray-700'
                : 'border-gray-300 hover:border-blue-500 text-blue-600 hover:text-blue-700 bg-white hover:bg-gray-50'
              }
            `}
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;