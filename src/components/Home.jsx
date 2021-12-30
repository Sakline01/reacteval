import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Productcard from './ProductCard';
const Home = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(data => {
                console.log(data.data)
                setProduct(data.data);
            })


    }, []);
    return (
        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', rowGap: '15px' }}>
            {
                product.map(item => (
                    <Productcard key={item.id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
    );
}

export default Home;
