'use client'

import ClickButton from "./ui/button";
import {useState} from "react";
import btnStyles from '@/app/ui/button.module.css'
import CommonLabel from '@/app/ui/label'
import classNames from 'classnames'
import lblStyles from '@/app/ui/label.module.css'
function App() {
    const [clicks, setClick] = useState(0)

    function handleClick() {
        setClick(clicks+1);
    }

    return (
        <>
            <CommonLabel itemClasses={classNames(lblStyles.commonLabel)} text={'Clicks '}/>
            <CommonLabel itemClasses={classNames(lblStyles.commonLabel)} text={clicks}/>
            <ClickButton itemClasses={classNames(btnStyles.redButton)} callable={handleClick}/>
        </>
    )

}

export default App;