'use client'
import {useEffect, useState} from "react";

function MyTimer()
{
    let [now,setNow] = useState(new Date());

    useEffect(()=>{
        console.log('Init');
        let timer = setInterval(()=>{
            console.log('Update time');
            setNow(new Date());
        },1000);
        
        return ()=>{
            console.log('Clean up');
            clearInterval(timer);
        };
    },[]);
    return(<div>
        Timer {now.toLocaleTimeString()}
    </div>);
}

export default function TimerWithCleanUp()
{
    const [showTimer, setShowTimer] = useState(true);
    return(<div>
        {
            showTimer && <MyTimer/>
        }
        <label>
            <input
                type="checkbox"
                checked={showTimer}
                onChange={e => {
                    setShowTimer(e.target.checked)
                }}
            />
            Show
        </label>
    </div>)
}