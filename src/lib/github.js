const GITHUB_API_URL = 'https://api.github.com';

export async function getGitHubRepos(username) {
    try {
        const response = await fetch(
            `${GITHUB_API_URL}/users/${username}/repos?sort=updated&per_page=20&type=owner`
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos = await response.json();
        return repos;
    } catch (error) {
        console.error('Failed to fetch GitHub repos:', error);
        throw error;
    }
}

export async function getUserProfile(username) {
    try {
        const response = await fetch(`${GITHUB_API_URL}/users/${username}`);

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const profile = await response.json();
        return profile;
    } catch (error) {
        console.error('Failed to fetch GitHub profile:', error);
        throw error;
    }
}