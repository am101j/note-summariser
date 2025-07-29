# 📝 Note Summariser

An AI-powered text summarization application that transforms lengthy notes into concise, meaningful summaries using advanced natural language processing.

## ✨ Features

- **AI-Powered Summarization**: Uses Facebook's BART model for high-quality text summarization
- **Real-time Processing**: Get instant summaries with a simple click
- **History Tracking**: View and manage previously generated summaries
- **Modern UI**: Clean, responsive interface with glass morphism design
- **Data Persistence**: Summaries are stored in Supabase for future reference

## 🛠️ Tech Stack

**Frontend:**
- React 19.1.0
- Modern CSS with glass morphism effects
- Responsive design

**Backend:**
- FastAPI (Python)
- Transformers library with BART model
- Supabase for data storage
- CORS middleware for cross-origin requests

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Python 3.8+
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd note-summariser
   ```

2. **Backend Setup**
   ```bash
   cd backend
   pip install fastapi transformers supabase python-dotenv uvicorn
   ```

3. **Environment Configuration**
   Create a `.env` file in the backend directory:
   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   ```

4. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Start the Backend**
   ```bash
   cd backend
   uvicorn main:app --reload
   ```
   Backend will run on `http://127.0.0.1:8000`

2. **Start the Frontend**
   ```bash
   cd frontend
   npm start
   ```
   Frontend will run on `http://localhost:3000`

## 📖 Usage

1. Open the application in your browser
2. Paste or type your text in the textarea
3. Click "Summarize" to generate an AI summary
4. View your summary history below the input area
5. All summaries are automatically saved for future reference

## 🔧 API Endpoints

- `POST /summarize` - Generate summary from input text
- `GET /summaries` - Retrieve all saved summaries

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the terms specified in the LICENSE file.

---

*Built with ❤️ using AI and modern web technologies*
