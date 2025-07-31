pragma solidity 0.8.30;

import"@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract RoundStackGroup {

address public creator;
uint256 public contributionAmount;
uint256 public intervalSeconds;

address public token;
address public round;
uint256 public maxMembers;
bool public started;

address[] public members;
mapping(address => bool) public hasJoined;

constructor (
    address _creator,
    uint256 _contributionAmount,
    uint256 _maxMembers,
    uint256 _intervalSeconds,
    address _token
) {
    creator = _creator;
    contributionAmount = _contributionAmount;
    intervalSeconds = _intervalSeconds;
    token = _token;
    maxMembers = _maxMembers;
}

    function joinGroup() external {
        require(!started, "Group has started already!");
        require(!joined(msg.sender), "You have already joined");
        require(members.length < maxMembers, "Group Full");

        hasJoined[msg.sender] = true;
        members.push(msg.sender);

        if (members.length == maxMembers) {
            started = true;
            round = 1;
        }
    }

    function getMembers() external view returns (address[]memory) {
        return members;
    }

}