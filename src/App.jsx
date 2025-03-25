import { useState } from 'react'
import './App.css'
import languages from './components/data/language-list'

function App() {


  return (
    <>
      <Descriptions />
    </>
  )
}
function Descriptions() {
  return (
    <div className="container">
      <h1>Learn Web Development</h1>
      <DescriptionList />
    </div>

  )
}
function DescriptionList() {
  const [inShow, setInShow] = useState(1)
  return (
    <div>
      {
        languages.map((language) => {
          return (
            <Language key={`language-${language.id}`}
              title={language.title}
              inShow={inShow === language.id}
              showHandler={() => setInShow(inShow === language.id ? 0 : language.id)}
            >
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
function Language({ title, children, inShow, showHandler }) {
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

export default App
