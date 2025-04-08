'use client';
import styles from './CustomTab.module.css';
import {useState} from "react";
import classNames from 'classnames';

export default function CustomTab({headers,children})
{
    let [current,setCurrent] = useState(0);

    const tabHeaderClickHandler = (index)=>{
        setCurrent(index);
    }

    return(<div>
        {
            headers.map((header,index)=><span key={index}
                                              onClick={()=>tabHeaderClickHandler(index)}
                                              className={classNames({
                                                  'tab-header': true,
                                                  'active': index==current,
                                              })}>
                {header}
            </span>)
        }
        <div className={styles['tab-body']}>
            {children[current]}
        </div>
    </div>);
}