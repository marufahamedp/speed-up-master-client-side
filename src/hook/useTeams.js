import { useState, useEffect } from 'react';

const useTeams = () => {
    const [teamMember, setTeamMember] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/teammembers')
            .then(res => res.json())
            .then(data => setTeamMember(data))
    }, [teamMember])
    return {
        teamMember
    }
};

export default useTeams;