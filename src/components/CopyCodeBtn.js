import React from "react";

export default function CopyCodeBtn({ children }) {
    const [copyOk, setCopyOk] = React.useState(false);

    const iconColor = copyOk ? '#0af20a' : '#ddd';
    const icon = copyOk ? 'fa-check-square' : 'fa-copy';

    const handleClick = (e) => {
        window.navigator.clipboard.writeText(children?.props?.children);
        console.log(children);

        setCopyOk(true);
        setTimeout(() => {
            setCopyOk(false);
        }, 5000);
    }

    return (
        <div className="code-copy-btn">
            <i title={copyOk ? "copied to clipboard" : "copy to clipboard"} className={`fas ${icon}`} onClick={handleClick} style={{color: iconColor}} />
        </div>
    )
}