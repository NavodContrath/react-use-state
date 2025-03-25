import languages from "./data/language-list";
import Language from "./Languages";
import Displayer from "./Displayer";
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
            <Displayer inShow={inShow} languages={languages} />

        </>
    )
}
