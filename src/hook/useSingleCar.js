import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const useSingleCar = () => {
    const { carID } = useParams();
    const [car, setcar] = useState({});
        
    useEffect(() => {
        fetch(`https://intense-sands-94991.herokuapp.com/cars/${carID}`)
            .then(res => res.json())
            .then(data => setcar(data))
    }, [car])
    return{
        car
    }
};

export default useSingleCar;