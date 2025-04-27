import React from "react";

interface AcceptProps  {
    header: React.JSX.Element,
    children: React.ReactElement
}
function Accept({header,children}:AcceptProps)
{
    return(<div>
        Child
        {header}
        Children
        {children}
    </div>)
}
export default function AcceptElementDemo()
{
    return (<div>
        <Accept header={<h1>This is input from parent</h1>}>
            <ol>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ol>
        </Accept>
    </div>)
}