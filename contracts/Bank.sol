pragma solidity ^0.4.4;
contract Bank {
  address Owner;
  //uint accountCount;
  mapping(address => uint) balances;
  //mapping(uint => address) index;
  uint stockNum;
  mapping(uint => uint) stocks;
  function Bank() {
    Owner = msg.sender;
  }
  function Deposit() payable{
    // adds the wei that is being sent by msg to the balance[addr]
    //index[accountCount++] = msg.sender;
    balances[msg.sender] += msg.value;
  }
  function withdraw(address investor) {
    //still need percent of fund to be invested for each specific post.
    uint amount = balances[investor]; //* percent;
    balances[investor] -= amount;
    Owner.transfer(amount);
  }
  function userWithdraw(uint amount) {
    // Skip if someone tries to withdraw 0 or if they don't have enough Ether to make the withdrawal.
    if (balances[msg.sender] < amount || amount == 0)
      return;
    balances[msg.sender] -= amount;
    msg.sender.transfer(amount);
  }
 // function sell(address investor){
  //}
}
