import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { NotesProvider as NotesContextProvider } from './context/NotesContext.jsx';



createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <NotesContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </NotesContextProvider>
  </AuthContextProvider>
 
)
