import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Home from './pages/Home.jsx'
import NotesList from './pages/NotesList.jsx'
import './App.css'
import '../Global.css'
import Footer from "../components/Footer.jsx";

function App() {
    return (
        <div className="background">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/notes" element={<NotesList />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App
