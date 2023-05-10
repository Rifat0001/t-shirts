import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import toast from 'react-hot-toast';
import './Home.css';
import Cart from '../Cart/Cart';
const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exist = cart.find(ts => ts._id === tshirt._id);
        if (exist) {
            toast('you have already added')
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart);
        }
    }

    const handleRemoveCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt._id} handleAddToCart={handleAddToCart} tshirt={tshirt} ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart handleRemoveCart={handleRemoveCart} cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Home;