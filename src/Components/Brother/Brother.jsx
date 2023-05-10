import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const gift = useContext(RingContext);
    return (
        <div>
            <h2>Brother</h2>
            <h3>{gift}</h3>
        </div>
    );
};

export default Brother;