from fastapi import FastAPI, Request
from transformers import pipeline
from pydantic import BaseModel

app = FastAPI()
summariser = pipeline("summarization", model="facebook/bart-large-cnn")

class Notes(BaseModel):
    text: str

@app.post("/summarize")
def summarise(notes: Notes):
    summary = summariser(notes.text, max_length=100, min_length=20, do_sample=False)
    return {"summary": summary[0]["summary_text"]}