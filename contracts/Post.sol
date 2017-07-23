pragma solidity ^0.4.4;

contract Post {
  address owner;
  uint public numPosts;
  mapping (uint => ForumPost) ForumPosts;

  struct ForumPost {
    bytes32 title;
    address author;
    bytes32 stock;
    bytes32 price;
    bytes32 text;
    bytes32 percentFundInvested;

    mapping (address => Approval) Approvals;
    mapping (address => Disapproval) Disapprovals;
  }

  struct Approval {
    address author;
  }

  struct Disapproval {
    address author;
  }

  function Post(){
    owner = msg.sender;
    numPosts = 0;
  }

  function newPost(bytes32 title, bytes32 stock, bytes32 price, bytes32 text, bytes32 percentFundInvested) returns (uint postId) {
    if (numPosts == 0){
      postId = 0;
      numPosts++;
    }
    else{
      postId = numPosts++;
    }
    ForumPosts[postId] = ForumPost(title, msg.sender, stock, price, text, percentFundInvested);
  }

  function getPost(uint postId) returns (bytes32 title, bytes32 stock, bytes32 price, bytes32 text, bytes32 percentFundInvested) {
    ForumPost p = ForumPosts[postId];
    if (p.author == msg.sender || owner == msg.sender){
      title = p.title;
      stock = p.stock;
      price = p.price;
      text = p.text;
      percentFundInvested = p.percentFundInvested;
    }
    else{
      title = "Invalid";
      stock = "Invalid";
      price = "Invalid";
      text = "Invalid";
      percentFundInvested = "Invalid";
    }
  }
}
