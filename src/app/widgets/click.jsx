import ClickButton from "@/app/ui/button";
import CommonLabel from "@/app/ui/label";
import BtnStyles from '@/app/ui/button.module.css'
import LblStyles from '@/app/ui/label.module.css'
import {useState} from "react";
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
            <ClickButton itemClasses={classNames(BtnStyles.redButton)} callable={increaseClick}/>
        </div>
    )
}