'use client';
let counter =0;
export default function CounterWithoutState()
{

    const incHandler = ()=>{
        counter ++;
        console.log('Counter ',counter);
    };

    console.log('Render CounterWithoutState');
    return (<div>
        Counter {counter}&nbsp;

        <button type={"button"} onClick={incHandler}>&nbsp; + &nbsp;  </button>
    </div>);
}