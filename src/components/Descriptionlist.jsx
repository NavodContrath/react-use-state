import languages from "./data/language-list";
import Language from "./Languages";
import { useState } from 'react'

export default function DescriptionList() {
    const [inShow, setInShow] = useState(null)
    return (
        <>
            <div className="flex-container">
                {
                    languages.map((language) => {
                        return (
                            <Language key={`language-${language.id}`} title={language.title}
                                inShow={inShow === language.id}
                                showHandler={() => setInShow(inShow === language.id ? null : language.id)}>
                            </Language>
                        )
                    })
                }
            </div>
            {inShow ? (<div className="displayer">
                <h3>{languages.find(lang => lang.id === inShow).title}</h3>
                {languages.find(lang => lang.id === inShow).content}
            </div>) : (<p className="displayer">Select a language</p>)}
        </>
    )
}
