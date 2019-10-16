import React, { Component } from 'react';

import './Note.css';

export default class Note extends Component {
  // static defaultProps = {
  //   full: false,
  // };

  render() {
    const date = new Date(Date.parse(this.props.note)).toDateString().slice(4);
    // let contentJsx = <p className='note-content'>{this.props.note.content}</p>;
    // let noteJsx = (
    //   <li className='note'>
    //     <h2>
    //       <a href={`/note/${this.props.note.id}`}>{this.props.note.name}</a>
    //     </h2>
    //     <p>Date modified: {date}</p>
    //     <button type='button'>Delete Note NYI</button>
    //   </li>
    // );
    // if (this.props.full) {
    //   return (
    //     <div>
    //       {noteJsx}
    //       {contentJsx}
    //     </div>
    //   );
    // }
    return (
      <li className='note'>
        <h2>
          <a href={`/note/${this.props.note.id}`}>{this.props.note.name}</a>
        </h2>
        <p>Date modified: {date}</p>
        <button type='button'>Delete Note NYI</button>
      </li>
    );
  }
}
