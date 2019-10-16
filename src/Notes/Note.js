import React, { Component } from 'react';
import StoreContext from '../StoreContext';

import './Note.css';

export default class Note extends Component {
  static contextType = StoreContext;

  render() {
    const { notes, handleDelete } = this.context;

    let target = notes.find(item => item.id === this.props.noteId);

    let output = notes.map(item => {
      const date = new Date(Date.parse(item.modified)).toDateString().slice(4);
      return (
        <li className='note' key={item.id}>
          <h2>
            <a href={`/note/${item.id}`}>{item.name}</a>
          </h2>
          <p>Date modified: {date}</p>
          <button
            type='button'
            onClick={e => {
              e.preventDefault();
              handleDelete(item.id);
            }}
          >
            Delete Note NYI
          </button>
        </li>
      );
    });
    if (target) {
      output = (
        <li className='note'>
          <h2>
            <a href={`/note/${target.id}`}>{target.name}</a>
          </h2>
          <p>
            Date modified:{' '}
            {new Date(Date.parse(target.modified)).toDateString().slice(4)}
          </p>
          <button
            type='button'
            onClick={e => {
              e.preventDefault();
              handleDelete(target.id);
            }}
          >
            Delete Note NYI
          </button>
          <p className='note-content'>{target.content}</p>
        </li>
      );
    }
    if (this.props.folder) {
      const date = new Date(Date.parse(this.props.note.modified))
        .toDateString()
        .slice(4);
      output = (
        <li className='note' key={this.props.note.id}>
          <h2>
            <a href={`/note/${this.props.note.id}`}>{this.props.note.name}</a>
          </h2>
          <p>Date modified: {date}</p>
          <button
            type='button'
            onClick={e => {
              e.preventDefault();
              handleDelete(this.props.note.id);
            }}
          >
            Delete Note NYI
          </button>
        </li>
      );
    }
    return <>{output}</>;
  }
}
