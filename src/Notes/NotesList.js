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
      curNotes = notes.filter(x => x.folderId === this.props.folderId);
      output = curNotes.map(item => (
        <Note note={item} full={false} key={item.id} />
      ));
    } else {
      output = notes.map(item => (
        <Note note={item} full={false} key={item.id} />
      ));
    }
    return <ul id='noteslist-container'>{output}</ul>;
  }
}
