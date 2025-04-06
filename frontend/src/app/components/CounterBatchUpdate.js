'use client';
import { useState } from 'react';

export default function CounterBatchUpdate() {
    const [score, setScore] = useState(0);

    function increment() {
        //setScore(score + 1);
        setScore(score=>score + 1);
    }

    return (
        <>
            <button onClick={() => increment()}>+1</button>
            <button onClick={() => {
                increment();
                increment();
                increment();
            }}>+3</button>
            <h1>Score: {score}</h1>
        </>
    )
}
