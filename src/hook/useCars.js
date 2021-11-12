import { useState, useEffect } from 'react';

const useCars = () => {
    const [cars, setcars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setcars(data))
    }, [cars])
    return {
        cars 
    }
};

export default useCars;