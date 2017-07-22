import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { Link }               from 'react-router';
import { bindActionCreators } from 'redux';

import web3 from 'web3';

class Home extends Component {
  render () {
    const a = web3;
    console.log(a);
    return (
      <div>
        <h1>Home</h1>
        <Link to='/about'>About</Link>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
