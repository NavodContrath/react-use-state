export default function Language({ title, inShow, showHandler }) {
    return (
        <>
            <button className={inShow === true ? "active" : ""} type='button' onClick={showHandler}>{title}</button>
        </>
    )
}
