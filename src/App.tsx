import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NoteRow } from './noterow';
import { NoteLine } from './NoteLine';
import { NoteTitle } from './notetitle';
import { Note } from './Note';
import { Menu } from './menu';
import NoteContentHandler from './NoteContentHandler';


interface AppProps {
}

interface AppState {
  focusedNoteRowId: number
  note: Note
}

class App extends React.Component<AppProps, AppState> {
  wrapperElement = React.createRef<HTMLDivElement>();

  constructor(props: AppProps) {
    super(props);

    let note = NoteContentHandler.getLastEditedNote();
    let firstNoteLineId: number;

    if (note === null) {
      note = this.createNewNote();
      firstNoteLineId = note.getFirstNoteLineId();
    } else {
      firstNoteLineId = note.getFirstNoteLineId();
    }

    this.state = { note: note, focusedNoteRowId: firstNoteLineId };
  }

  createNewNote(): Note {
      let note = new Note();
      note.addLine();

      return note;
  }

  render() {
    let noteRows = this.state.note.getLines().map(noteRow => {
      return (<NoteRow keyDownHandler={this.handleNoteRowKeyDown.bind(this)}
        focusHandler={this.noteRowFocusHandler.bind(this)}
        note={this.state.note}
        rowId={noteRow.id}
        key={noteRow.id}
        focused={noteRow.id === this.state.focusedNoteRowId} />);
    });

    return (
      <div className="App" ref={this.wrapperElement}>
        <div className="header">
          <NoteTitle title={this.state.note.getTitle()} titleChangeHandler={this.handleTitleChange.bind(this)} />
          <Menu noteFinished={this.state.note.getFinished()} 
            newNoteHandler={this.newNoteHandler.bind(this)}
            finishToggleHandler={this.handleToggleFinished.bind(this)} />
        </div>
        {noteRows}
      </div>
    );
  }

  handleTitleChange(newTitle: string) {
    this.state.note.setTitle(newTitle);
    this.setState({ note: this.state.note });
    NoteContentHandler.updateNote(this.state.note);
  }

  handleToggleFinished() {
    let note = this.state.note;

    note.setFinished(!note.getFinished());
    this.setState({ note: note });
  }

  newNoteHandler() {
    let note = this.createNewNote();
    this.setState({ note: note, focusedNoteRowId: note.getFirstNoteLineId() });
  }

  handleNoteRowKeyDown(noteRow: NoteLine, e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.setState((props, state) => {
        let note = this.state.note;
        let newNote = note.addLine(noteRow.getIndentedUnits());

        return { note: note, focusedNoteRowId: newNote.id }
      });
      return false;
    } else if (e.key === "Backspace") {
      let focusedRow = this.state.note.getLine(this.state.focusedNoteRowId);
      if (focusedRow !== undefined && focusedRow.isEmpty() && this.state.note.getLines().length > 1) {
        let nextFocusedRowId = this.state.note.getPreviousRowId(this.state.focusedNoteRowId);
        this.state.note.deleteRow(this.state.focusedNoteRowId);

        if (nextFocusedRowId !== null) {
          this.setState({ focusedNoteRowId: nextFocusedRowId });
        } else {
          console.error("Got a null previous row id relative to: ", this.state.focusedNoteRowId);
          this.setState({ focusedNoteRowId: this.state.note.getFirstNoteLineId() });
        }

        NoteContentHandler.updateNote(this.state.note);

        // Since we're catching the keydown event, if we don't call preventDefault,
        // a character will get deleted on the line that gets focus.
        e.preventDefault();

      }
    } else {
      return true;
    }
  }

  noteRowFocusHandler(note: NoteLine) {
    this.setState({ focusedNoteRowId: note.id });
  }
}




export default App;
