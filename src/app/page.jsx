'use client'

import ClickButton from "./ui/button";
import {useState} from "react";
import styles from '@/app/ui/button.module.css'
import CommonLabel from '@/app/ui/label'
import classNames from 'classnames'

function App() {
    const [clicks, setClick] = useState(0)

    function handleClick() {
        setClick(clicks+1);
    }

    return (
        <>
            <CommonLabel itemClasses={{}} text={'Clicks'}/>
            <CommonLabel itemClasses={{}} text={clicks}/>
            <ClickButton itemClasses={classNames(styles.redButton, styles.smallButton)} callable={handleClick}/>
        </>
    )

}

export default App;