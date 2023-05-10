import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';
export const RingContext = createContext('gold ring');
export const MoneyContext = createContext('money');
const Grandpa = () => {
    const ring = 'Diamond';
    const [money, setMoney] = useState(0);
    return (
        <div className='granda'>
            <h2>Grandpa</h2>
            <p>Money is {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='I love u'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Aunty></Aunty>
                        <Uncle></Uncle>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;