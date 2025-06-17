
export default function NoteItem({ note }) {
    return (
        <div>
            <h1>{note.title}</h1>
            <a>{note.content}</a>
        </div>
    )
}