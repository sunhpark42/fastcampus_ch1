import React, { useState } from 'react';

function Counter() {
    //number라는 상태값을 만들건데, default값은 0으로
    //setNumber는 기본 값을 바꾸어 주는 것.
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(number - 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;