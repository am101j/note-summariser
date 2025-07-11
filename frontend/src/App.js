import React from 'react';
import './App.css';
import { useState } from 'react'

function App() {
  const [note, setNote] = useState('')
  const [summary, setSummary] = useState('')
 
  const getSummary = () => {
    console.log(note)
  }

  return (
    <div className="app-container">
      <div className="glass-card">
        <h1>✨ AI Text Summarizer</h1>
        <p>Paste your text below and click Summarize to get a concise summary instantly.</p>
        <textarea 
        placeholder="Enter text to summarize..."
        rows="8"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        />
        <button onClick = {getSummary}>Summarize</button>
      </div>
    </div>
  );
}

export default App;
