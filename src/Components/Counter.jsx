import React from 'react';

const Counter = props => {
    return (
        <div>
            <button onClick={() => props.Increment()}>Increment</button>
            <button onClick={() => props.Decrement()}>Decrement</button>
            <button onClick={() => props.IncrementAsync()}>Increment</button>
            <span> value{props.value}</span>
        </div>
    )
}

export default Counter;
