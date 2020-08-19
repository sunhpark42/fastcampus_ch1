import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT' :
            return state + 1;
        case 'DECREMENT' :
            return state - 1;
        default :
            throw new Error('Unhandled action');
    }
}

function Counter() {
    //number라는 상태값을 만들건데, default값은 0으로
    //setNumber는 기본 값을 바꾸어 주는 것.
    // const [number, setNumber] = useState(0);
    
    //reducer
    const [number, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => {
        dispatch({
            type:'DECREMENT',
        })
    }
    const onDecrease = () => {
        dispatch({
            type:'INCREMENT'
        })
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default React.memo(Counter);