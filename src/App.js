import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import dummyStore from './dummy-store';

import './App.css';

import StoreContext from './StoreContext';

import Header from './Header';
import Sidebar from './Sidebar';
import NotesList from './Notes/NotesList';
import Note from './Notes/Note';

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
  getData = () => {
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
  };

  // To delete notes, make a DELETE request to the /notes/<note-id> endpoint.
  //   fetch(`http://localhost:1234/foo/${fooId}`, {
  //   method: 'DELETE',
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  // };
  handleDelete = id => {
    fetch(`http://localhost:9090/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(resp => {
        if (!resp.ok) return resp.json().then(e => Promise.reject(e));
      })
      .then(() => this.getData())
      .catch(e => console.log(e));
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <StoreContext.Provider
        value={{
          folders: this.state.folders,
          notes: this.state.notes,
          handleDelete: this.handleDelete,
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
                    <Sidebar folderId={props.match.params.folderid} />
                    <NotesList folderId={props.match.params.folderid} />
                  </>
                )}
              />
              <Route
                path='/note/:noteid'
                component={props => (
                  <>
                    <Sidebar
                      history={props.history}
                      noteId={props.match.params.noteid}
                    />
                    <Note full={true} noteId={props.match.params.noteid} />
                  </>
                )}
              />
              <Route path='/add_folder' />
            </section>
          </main>
        </BrowserRouter>
      </StoreContext.Provider>
    );
  }
}
