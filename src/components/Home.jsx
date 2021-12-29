import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Productcard from './ProductCard';
const Home = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(data => {
                setProduct(data.data);
            })


    }, []);
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {
                product.map(item => (
                    <Productcard key={item.id} name={item.name} price={item.price} />
                ))
            }
        </div>
    );
}

export default Home;
