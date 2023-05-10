import React, { useContext } from 'react';
import Cusin from '../Cusin/Cusin';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';


const Aunty = () => {
    const gift = useContext(RingContext);
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <h5>{money}</h5>
            <section className='flex'>
                <Cusin>Alvi {gift} </Cusin>
                <Cusin>Sujon</Cusin>
            </section>
        </div>
    );
};

export default Aunty;