'use client'

import CommonWidget from '@/app/widgets/click'
import ClickWidgetCss from '@/app/widgets/click.module.css'
import classNames from "classnames";


function App() {

    return (
        <CommonWidget itemClasses={classNames(ClickWidgetCss.commonWidget)}/>
    )
}

export default App;