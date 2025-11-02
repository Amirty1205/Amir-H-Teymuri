'use client';
import React, { useState } from "react";
import ProjectCard from "./Components/Cards/ProjectCards";
import useGitHubRepos from "@/hooks/useGitHubRepos";

function ProjectsList() {
    const [activeFilter, setActiveFilter] = useState("All");

    const { repos, loading, error } = useGitHubRepos("Amirty1205");

    // Transform GitHub repos to project format
    const projects = repos.map(repo => ({
        id: repo.id,
        title: repo.name.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
        description: repo.description || "No description available",
        image: `/projects/${repo.name}.jpg`,
        liveUrl: repo.homepage || null,
        githubUrl: repo.html_url,
        techStack: repo.language ? [repo.language] : [],
        category: repo.language || "Code",
        status: repo.archived ? "Archived" : "Completed",
        githubStats: {
            stars: repo.stargazers_count,
            forks: repo.forks_count
        }
    }));

    if (loading) return (
        <section id="projects" className="px-6 py-20 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-left">My Projects</h2>
            <p className="text-left">Loading projects from GitHub...</p>
        </section>
    );

    if (error) return (
        <section id="projects" className="px-6 py-20 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-left">My Projects</h2>
            <p className="text-left text-red-600">Error loading projects</p>
        </section>
    );

    return (
        <section id="projects" className="px-6 py-20">
            <div className="max-w-4xl mx-auto"> {/* Add this wrapper */}
                <h2 className="text-4xl font-bold mb-6">My Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {projects.length === 0 && (
                    <p className="text-gray-500">No public repositories found.</p>
                )}
            </div>
        </section>
    );
}

export default ProjectsList;