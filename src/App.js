import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import dummyStore from './dummy-store';

import './App.css';

import StoreContext from './StoreContext';

import Header from './Header';
import Sidebar from './Sidebar';
import NotesList from './Notes/NotesList';
// import Note from './Notes/Note';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      folders: [],
      notes: [],
    };
  }
  // To fetch the notes and folders, you should make two GET requests:
  // http://localhost:9090/folders
  // http://localhost:9090/notes

  // To delete notes, make a DELETE request to the /notes/<note-id> endpoint.
  componentDidMount() {
    fetch('http://localhost:9090/folders')
      .then(resp => resp.json())
      .then(resp =>
        this.setState({
          folders: resp,
        })
      );

    fetch('http://localhost:9090/notes')
      .then(resp => resp.json())
      .then(resp =>
        this.setState({
          notes: resp,
        })
      );
  }

  render() {
    return (
      <StoreContext.Provider
        value={{
          folders: this.state.folders,
          notes: this.state.notes,
        }}
      >
        <BrowserRouter>
          <main className='App'>
            <Header />
            <section id='main-content'>
              <Route
                exact
                path='/'
                component={() => (
                  <>
                    <Sidebar />
                    <NotesList />
                  </>
                )}
              />
              <Route
                path='/folder/:folderid'
                component={props => (
                  <>
                    <Sidebar />
                    <NotesList folderId={props.match.params.folderid} />
                  </>
                )}
              />
              {/* <Route
                path='/note/:noteid'
                component={props => {
                  console.log(props);
                  const note = this.state.notes.find(
                    x => x.id === props.match.params.noteid
                  );
                  return (
                    <>
                      <Sidebar
                        folderName={
                          this.state.folders.find(x => x.id === note.folderId)
                            .name
                        }
                        history={props.history}
                      />
                      <Note full={true} note={note} />
                    </>
                  );
                }}
              />
              <Route path='/add_folder' /> */}
            </section>
          </main>
        </BrowserRouter>
      </StoreContext.Provider>
    );
  }
}

// App.js .Provider => folders/notes from state
// Sidebar .Consumer => reqs folders
// NotesList .Consumer => reqs notes
//
//
//
