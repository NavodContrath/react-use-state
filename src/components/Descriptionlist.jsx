import languages from "./data/language-list";
import Language from "./Languages";
import { useState } from 'react'

export default function DescriptionList() {
    const [inShow, setInShow] = useState(1)
    return (
        <div>
            {
                languages.map((language) => {
                    return (
                        <Language key={`language-${language.id}`} title={language.title}
                            inShow={inShow === language.id}
                            showHandler={() => setInShow(inShow === language.id ? 0 : language.id)}>
                            <div>
                                {language.content}
                            </div>
                        </Language>
                    )
                })
            }
        </div>
    )
}
