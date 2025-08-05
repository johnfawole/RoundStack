pragma solidity 0.8.20;

import "./RoundStackGroup.sol";

contract RoundStackFactory {
    address[] public allGroups;

    event GroupCreated(address indexed group, address indexed creator);

    function createGroup(
        uint256 contributionAmount,
        uint256 maxMembers,
        uint256 intervalSeconds,
        address token
    ) external returns (address group) {
        RoundStackGroup newGroup = new RoundStackGroup (
            msg.sender,
            contributionAmount,
            maxMembers,
            intervalSeconds,
            token
        );

        allGroups.push(address(newGroup));
        emit GroupCreated(address(newGroup), msg.sender);
        return address(newGroup);
    }

    function getAllGroups() external view returns (address[] memory) {
        return allGroups;
    }
}