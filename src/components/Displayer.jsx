export default function Displayer({ inShow, languages }) {
    const selectedLanguage = languages.find(lang => lang.id === inShow)
    return (
        <div className="displayer">
            {inShow ? (
                <>
                    <h3>{selectedLanguage.title}</h3>
                    <p>{selectedLanguage.content}</p>
                </>
            ) : (<p className="displayer">Select a language</p>)}
        </div >
    )
}
