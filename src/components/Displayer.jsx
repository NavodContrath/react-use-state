export default function Displayer({ inShow, languages, }) {
    const selectedLanguage = languages.find(lang => lang.id === inShow)

    return (
        <div>

            {inShow ? (
                <div className="displayer">
                    <h3>{selectedLanguage.title}</h3>
                    <p>{selectedLanguage.content}</p>
                </div>
            ) : (<h3 className="danger">Select a language</h3>)}
        </div >
    )
}
