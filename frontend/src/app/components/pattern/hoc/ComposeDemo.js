'use client';
import withLogger from "./withLogger";
import {Page1, withAuth} from "./AuthDemo";

let CompWithLoggerWithAuth = withLogger(withAuth(Page1));
export default function ComposeDemo()
{
    return (<div>
        <CompWithLoggerWithAuth/>
    </div>);
}