import { useState, useEffect } from 'react';
import { getGitHubRepos } from '@/lib/github';

const useGitHubRepos = (username) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setLoading(true);
                const data = await getGitHubRepos(username);
                setRepos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchRepos();
        }
    }, [username]);

    return { repos, loading, error };
};

export default useGitHubRepos;