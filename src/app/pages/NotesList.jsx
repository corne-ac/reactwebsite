import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient.js'
import NoteItem from "../../components/NoteItem.jsx";

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
            <div className="notesListContainer" >
                {notes.map(note => (
                   <NoteItem key={note.id} note={note} />
                ))}
            </div>
        </div>
    )
}
