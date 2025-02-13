'use client'
import ClickButton from "@/ui/button";
import CommonLabel from "@/ui/label";
import BtnStyles from '@/ui/button.module.css'
import LblStyles from '@/ui/label.module.css'
import React, {useState, useRef} from "react";
import classNames from "classnames";


export default function CommonWidget({itemClasses}) {
    const [clicks, setClicks] = useState(0);

    function increaseClick() {
        setClicks(clicks + 1);
    }

    return (
        <div className={itemClasses}>
            <CommonLabel itemClasses={classNames(LblStyles.commonLabel)} text={'Clicks '}/>
            <CommonLabel itemClasses={classNames(LblStyles.commonLabel)} text={clicks}/>
            <ClickButton itemClasses={classNames(BtnStyles.redButton)} callable={togglePlayback}/>
        </div>
    )
}

