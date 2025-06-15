import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Home from './pages/Home.jsx'
import NotesList from './pages/NotesList.jsx'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/notes" element={<NotesList />} />
            </Routes>
        </>
    )
}

export default App
