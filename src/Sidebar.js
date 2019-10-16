import React, { Component } from 'react';

import StoreContext from './StoreContext';

import './Sidebar.css';

export default class Sidebar extends Component {
  static defaultProps = {
    folderName: '',
  };
  static contextType = StoreContext;

  render() {
    const { folders, notes } = this.context;
    let target = notes.find(item => item.id === this.props.noteId);

    let output = (
      <section id='sidebar-container'>
        {folders.map(item => {
          return (
            <a
              href={`/folder/${item.id}`}
              className={
                item.id === this.props.folderId
                  ? 'folder-list-item highlight'
                  : 'folder-list-item'
              }
              key={item.id}
            >
              <h3>{item.name}</h3>
            </a>
          );
        })}
      </section>
    );

    if (target) {
      let folTar = folders.find(item => item.id === target.folderId);
      output = (
        <section id='sidebar-container'>
          <button
            id='go-back-button'
            type='button'
            onClick={this.props.history.goBack}
          >
            <h3>Go Back</h3>
          </button>
          <h2 id='folder-name-left'>{folTar.name}</h2>
        </section>
      );
    }
    return <>{output}</>;
  }
}
