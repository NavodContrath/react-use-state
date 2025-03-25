export default function Language({ title, inShow, showHandler, languageId }) {
    return (
        <>
            <button className={inShow === true ? "active" : ""} type='button' onClick={showHandler}>{title}</button>
        </>
    )
}
