'use client'

import CommonWidget from '@/widgets/click'
import ClickWidgetCss from '@/widgets/click.module.css'
import classNames from "classnames";


function App() {

    return (
        <CommonWidget itemClasses={classNames(ClickWidgetCss.commonWidget)}/>
    )
}

export default App;