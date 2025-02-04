'use client'

import {useState} from "react";


function App() {
    const [clicks, setClick] = useState(0)

    function handleClick() {
        setClick(clicks+1);
    }

    return (
        <html>
        <body>
            <div style={{height: '100px', width: '100px', margin: 'auto'}}>
                <p>{`Clicks ${clicks}`}</p>
            </div>
            <button onClick={handleClick} style={{height: '100px', width: '100px', margin: 'auto'}}></button>
        </body>
        </html>
    )

}

export default App;