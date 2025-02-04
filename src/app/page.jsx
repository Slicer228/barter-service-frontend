'use client'

import ClickButton from "./ui/button";
import {useState} from "react";


function App() {
    const [clicks, setClick] = useState(0)

    function handleClick() {
        setClick(clicks+1);
    }

    return (
        <>
            <div style={{height: '100px', width: '100px', margin: 'auto'}}>
                <p>{`Clicks ${clicks}`}</p>
            </div>
            <ClickButton callable={handleClick}/>
        </>
    )

}

export default App;