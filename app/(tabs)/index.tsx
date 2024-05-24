import React, { useState } from 'react'
import Home from '@/screens/Home'
import AddNote from '@/screens/addNote'
import EditNote from '@/screens/editNote'

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, editNote, selectedNoteId, setSelectedNoteId, deleteNote }) => {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} setSelectedNoteId={setSelectedNoteId} deleteNote={deleteNote} />
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} editNote={editNote} noteList={noteList} noteId={selectedNoteId} />
    default:
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} setSelectedNoteId={setSelectedNoteId} deleteNote={deleteNote} />
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ])
  const [selectedNoteId, setSelectedNoteId] = useState(null)

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1
    setNoteList([
      ...noteList,
      {
        id,
        title,
        desc,
      },
    ])
  }

  const editNote = (id, updatedTitle, updatedDesc) => {
    const updatedNotes = noteList.map(note =>
      note.id === id ? { ...note, title: updatedTitle, desc: updatedDesc } : note
    )
    setNoteList(updatedNotes)
  }

  const deleteNote = (id) => {
    const updatedNotes = noteList.filter(note => note.id !== id)
    setNoteList(updatedNotes)
  }

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      editNote={editNote}
      deleteNote={deleteNote}
      selectedNoteId={selectedNoteId}
      setSelectedNoteId={setSelectedNoteId}
    />
  )
}

export default App