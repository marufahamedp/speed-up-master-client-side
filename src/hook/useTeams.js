import { useState, useEffect } from 'react';

const useTeams = () => {
    const [teamMember, setTeamMember] = useState([]);

    useEffect(() => {
        fetch('https://intense-sands-94991.herokuapp.com/teammembers')
            .then(res => res.json())
            .then(data => setTeamMember(data))
    }, [teamMember])
    return {
        teamMember
    }
};

export default useTeams;