import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import web3 from 'web3';

import NavbarContainer from './NavbarContainer';
import MainContainer from './MainContainer';

class HomeContainer extends Component {
  render () {
    const a = web3;
    console.log(a);
    return (
      <div>
        <NavbarContainer />
        <MainContainer />

      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
