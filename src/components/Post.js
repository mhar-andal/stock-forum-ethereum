import React, { Component }   from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  static propTypes = {
    title: PropTypes.string
  };

  constructor (props) {
    super(props);
  }

  render () {
    const { title } = this.props;
    return (
      <div>
        <h2>{title}</h2>
      </div>
    );
  }
}

export default Post;
