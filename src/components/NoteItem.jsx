import './NoteItem.css'

export default function NoteItem({ note }) {
    return (
        <div className="note-card">
            <h1>{note.title}</h1>
            <a className="note-card-content">{note.content}</a>
        </div>
    )
}