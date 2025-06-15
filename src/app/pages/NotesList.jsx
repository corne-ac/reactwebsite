import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient.js'

export default function NotesList() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        const fetchNotes = async () => {
            const { data, error } = await supabase.from('notes').select('*')
            if (error) console.error(error)
            else setNotes(data)
        }

        fetchNotes()
    }, [])

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
