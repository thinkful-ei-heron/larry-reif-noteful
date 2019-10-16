import React, { Component } from 'react';

import StoreContext from './StoreContext';

import './Sidebar.css';

export default class Sidebar extends Component {
  static defaultProps = {
    folderName: '',
  };
  static contextType = StoreContext;

  render() {
    const { folders } = this.context;
    return (
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
  }
}

// ) : (
//   <>
//     <button
//       id='go-back-button'
//       type='button'
//       onClick={this.props.history.goBack}
//     >
//       <h3>Go Back</h3>
//     </button>
//     <h2 id='folder-name-left'>{this.props.folderName}</h2>
//   </>
// );
// }
