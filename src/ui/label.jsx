


export default function CommonLabel({itemClasses, text}) {
    return (
        <p className={itemClasses}>{text}</p>
    )
}

function LinkLabel({itemClasses, text}) {
    return (
        <a className={itemClasses}>{text}</a>
    )
}

export {LinkLabel};