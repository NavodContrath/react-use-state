export default function Language({ title, children, inShow, showHandler }) {
    return (
        <>
            <button type='button' onClick={showHandler}>{title}</button>

        </>
    )
}
