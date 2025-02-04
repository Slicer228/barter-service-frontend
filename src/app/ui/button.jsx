import {useState} from "react";


export default function ClickButton({itemClass, callable}) {
    return <button className={itemClass} onClick={callable}></button>
}