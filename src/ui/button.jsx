import {useState} from "react";


export default function ClickButton({itemClasses, callable}) {
    return <button className={itemClasses} onClick={callable}></button>
}