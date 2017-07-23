pragma solidity ^0.4.2;
// contract to initiate transfer of ether from user's account to collective fund
contract Funding {
  address owner;
  mapping (address => uint) public balance;
  event Sent(address from, address , uint amount);
  // remember the amount to transfer will be measured in WEI, not Ether
  function Funding() payable {
    owner = msg.sender;
		balance[msg.sender] = 696969;
	}

  function transfer(address newOwner, uint amt) {
    if (balance[msg.sender] < amt) return;
    msg.sender.transfer(amt);
    balance[msg.sender] -= amt;
    balance[newOwner] += amt;
    Sent(msg.sender, newOwner, amt); // logs transaction on blockchain
  }

  function getOwner() returns (address owner) {
    return msg.sender;
  }

  function getBalance(address addr) returns(uint bal) {
	   bal = balance[addr];
	}
}
