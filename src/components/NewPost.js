import React, { Component }   from 'react';
import jsonfile from 'jsonfile';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const post = JSON.stringify(this.state);
    jsonfile.writeFile('__data__/Post.json', post, {flag: 'a'}, function (err) {
      console.error(err);
    });
    console.log('post', post);
    console.log('submitting', e);
  }

  onTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Title: </label>
        <input onChange={this.onTitleChange}></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NewPost;
