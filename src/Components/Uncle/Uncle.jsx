import React, { useContext } from 'react';
import Cusin from '../Cusin/Cusin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p>{money}</p>
            <button onClick={() => setMoney(money + 1000)}>Money</button>
            <section className='flex'>
                <Cusin>Arham</Cusin>
                <Cusin>Nafis</Cusin>
            </section>
        </div>
    );
};

export default Uncle;