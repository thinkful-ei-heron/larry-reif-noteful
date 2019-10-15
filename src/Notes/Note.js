/* {
      id: 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1',
      name: 'Dogs',
      modified: '2019-01-03T00:00:00.000Z',
      folderId: 'b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1',
      content:
        'Corporis accusamus placeat quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi. Suscipit totam delectus ut voluptas aut qui rerum. Non veniam eius molestiae rerum quam.\n \rUnde qui aperiam praesentium alias. Aut temporibus id quidem recusandae voluptatem ut eum. Consequatur asperiores et in quisquam corporis maxime dolorem soluta. Et officiis id est quia sunt qui iste reiciendis saepe. Ut aut doloribus minus non nisi vel corporis. Veritatis mollitia et molestias voluptas neque aspernatur reprehenderit.\n \rMaxime aut reprehenderit mollitia quia eos sit fugiat exercitationem. Minima dolore soluta. Quidem fuga ut sit voluptas nihil sunt aliquam dignissimos. Ex autem nemo quisquam voluptas consequuntur et necessitatibus minima velit. Consequatur quia quis tempora minima. Aut qui dolor et dignissimos ut repellat quas ad.',
    } 
    additional prop: full (false except on /note/id)
    */
import React, { Component } from 'react';

export default class Note extends Component {
  static defaultProps = {
    full: false,
  };
  render() {
    const note = this.props.note;
    const date = new Date(Date.parse(note.modified)).toDateString().slice(4);
    let contentJsx = <p className='note-content'>{note.content}</p>;
    let noteJsx = (
      <div className='note'>
        <h2>
          <a href={`/note/${note.id}`}>{note.name}</a>
        </h2>
        <p>Date modified: {date}</p>
        <button type='button'>Delete Note ?NYI?</button>
        {/* OOOHHHH not yet implemented */}
      </div>
    );
    if (this.props.full) {
      return (
        <div>
          {noteJsx}
          {contentJsx}
        </div>
      );
    }
    return noteJsx;
  }
}
