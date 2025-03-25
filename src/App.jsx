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
}
export default App
