import React, { Component } from 'react';
import Note from './Note';
import StoreContext from '../StoreContext';

export default class NotesList extends Component {
  static contextType = StoreContext;
  render() {
    let output;
    let curNotes;
    const { notes } = this.context;
    if (this.props.folderId) {
      curNotes = notes.filter(item => item.folderId === this.props.folderId);
      console.log(curNotes);
      output = curNotes.map(item => (
        <Note note={item} full={false} key={item.id} folder={true} />
      ));
    } else {
      output = <Note />;
    }
    return <ul id='noteslist-container'>{output}</ul>;
  }
}
