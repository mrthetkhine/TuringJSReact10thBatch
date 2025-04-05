import styles from './Card.module.css';
import Profile from "./Profile";
import {console} from "next/dist/compiled/@edge-runtime/primitives";
export default function Card(props)
{
    console.log('Card props ',props);
    return (<div className={styles.card}>
        {props.header}
        {props.children}
    </div>);
}