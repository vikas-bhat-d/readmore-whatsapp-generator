import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  let zeroWidthString='\u200B'.repeat(4000);
  const [beforeText,setBeforeText]=useState('')
  const [afterText,setAfterText]=useState('')
  const [generatedText,setGeneratedText]=useState(zeroWidthString);
  useEffect(()=>{
    let newGeneratedText=beforeText+zeroWidthString+afterText;
    setGeneratedText(newGeneratedText)
  },[beforeText,afterText])

  return (
    <div className='hero-section'>
      <textarea name="before-text" className="before-text" id="" placeholder='Enter the visible message' onChange={(e)=>setBeforeText(e.target.value)}></textarea>
      <textarea name="after-text" id="" placeholder='Enter the hidden message' onChange={(e)=>setAfterText(e.target.value)}></textarea>
      <textarea name="generated-text" id="generated-text" value={generatedText} onChange={(e)=>setGeneratedText(e.target.value)}>hello</textarea>
      <button onClick={async (e)=>{
        console.log("copying text")
        await window.navigator.clipboard.writeText(generatedText)
        }}>
        Copy
      </button>
    </div>
  )
}

export default App
