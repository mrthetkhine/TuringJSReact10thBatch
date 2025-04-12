'use client';

import { useState } from 'react';

export default function DifferentPosition() {
    const [isPlayerA, setIsPlayerA] = useState(true);
    return (
        <div>
            {isPlayerA &&
            <Counter key={'counter'}  person="Taylor" />
            }
            {!isPlayerA &&
            <Counter key={'counter'} person="Sarah" />
            }
            <button onClick={() => {
                setIsPlayerA(!isPlayerA);
            }}>
                Next player!
            </button>
        </div>
    );
}

function Counter({ person }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';
    if (hover) {
        className += ' hover';
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{person}'s score: {score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}
