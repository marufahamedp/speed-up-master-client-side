import { useState, useEffect } from 'react';

const useUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://intense-sands-94991.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])
    return {
        users
    }
};

export default useUsers;