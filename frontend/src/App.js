import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="glass-card">
        <h1>✨ AI Text Summarizer</h1>
        <p>Paste your text below and click Summarize to get a concise summary instantly.</p>
        <textarea placeholder="Enter text to summarize..." rows="8" />
        <button>Summarize</button>
      </div>
    </div>
  );
}

export default App;
