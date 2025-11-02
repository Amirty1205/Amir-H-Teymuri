"use client";
import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

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

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4/5 h-3/5 bg-gray-200 rounded animate-pulse" />
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
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
          <div className="absolute top-3 left-3 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs font-medium">
            {category}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col gap-3">
        {/* Header */}
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-xl font-semibold text-gray-900 leading-tight flex-1">
            {title}
          </h3>
          {status && (
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(status)}`}>
              {status}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed line-clamp-3 text-sm">
          {description}
        </p>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {techStack.slice(0, 5).map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 5 && (
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                +{techStack.length - 5}
              </span>
            )}
          </div>
        )}

        {/* GitHub Stats */}
        {githubStats && (
          <div className="flex gap-3 text-sm text-gray-500">
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
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium text-sm"
          >
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-gray-300 hover:border-blue-500 text-blue-600 hover:text-blue-700 text-center py-2 px-4 rounded-lg transition-all duration-200 font-medium text-sm"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;