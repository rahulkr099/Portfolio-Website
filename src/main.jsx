import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './index.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from './useContext/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
  ,
)
AOS.init({
  offset: 0
});