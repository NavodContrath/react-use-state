import { useState } from 'react'
import './App.css'
import languages from './components/data/language-list'

function App() {


  return (
    <>
      <Description />
    </>
  )
}
function Description() {
  return (
    <div className="container">
      <h1>Learn Web Development</h1>
      <ButtonList />

      <div className="displayer">
        <h3></h3>
        <p></p>
      </div>
    </div>

  )
}
function ButtonList() {
  return (
    <div>
      {
        languages.map((language) => {
          return (
            <button type='button' key={`language-${language.id}`}>{language.title}</button>
          )
        })
      }
    </div>
  )
}
export default App
