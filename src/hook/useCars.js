import { useState, useEffect } from 'react';

const useCars = () => {
    const [cars, setcars] = useState([]);

    useEffect(() => {
        fetch('https://intense-sands-94991.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setcars(data))
    }, [cars])
    return {
        cars 
    }
};

export default useCars;