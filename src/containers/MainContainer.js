import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
var Web3 = require('web3');

import data from '__data__/FakeDataPost.json';
import Post from 'components/Post';

class MainContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      post: {},
    };
    this.updatePost = this.updatePost.bind(this);
  }

  updatePost (post) {
    this.setState({
      post: JSON.parse(post)
    });
  }

  render () {
    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    const abi = [{"constant":false,"inputs":[{"name":"postId","type":"uint256"}],"name":"getPost","outputs":[{"name":"title","type":"bytes32"},{"name":"stock","type":"bytes32"},{"name":"price","type":"bytes32"},{"name":"text","type":"bytes32"},{"name":"percentFundInvested","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"title","type":"bytes32"},{"name":"stock","type":"bytes32"},{"name":"price","type":"bytes32"},{"name":"text","type":"bytes32"},{"name":"percentFundInvested","type":"bytes32"}],"name":"newPost","outputs":[{"name":"postId","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"numPosts","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];
    const acc = "0x45493cc9f9d43809aba4d3d513f9ce11b06f28f6";
    const contract = web3.eth.contract(abi).at(acc);
    console.log('post', contract);
    console.log(abi);
    console.log('newPost', contract.newPost.call("helllo", "helllo", "helllo", "helllo", "helllo"));
    // console.log('contract', contract.getPost.call(0));
    return (
      <div>
        {JSON.stringify(this.state.post)}
        {data.posts.map((post) => {
          return (
            <Post title={post.title} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
