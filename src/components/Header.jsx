import './Header.css'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0, justifyContent: 'center' }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/notes">Notes</Link></li>
                </ul>
            </nav>
        </header>
    )
}