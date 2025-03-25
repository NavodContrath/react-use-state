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
                            <Language >
                            </Language>
                        )
                    })
                }
            </div>
        </>
    )
}
