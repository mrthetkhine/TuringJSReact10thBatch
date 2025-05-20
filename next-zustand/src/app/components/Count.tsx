'use client'

import {useBoundStore} from "../../stores/useBoundStore";

export default function Count()
{
    const count = useBoundStore(state => state.count);
    return(<div>
        <h3>Count {count}</h3>
    </div>);
}