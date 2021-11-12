import { useState, useEffect } from 'react';

const useOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://intense-sands-94991.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])
    return {
        orders 
    }
};

export default useOrders;