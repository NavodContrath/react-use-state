export default function Language({ title, children, inShow, showHandler }) {
    return (
        <>
            <button type='button' onClick={showHandler}>{title}</button>
            <div className="displayer">
                <h3>{inShow && title}</h3>
                {inShow && children}
            </div>
        </>
    )
}
