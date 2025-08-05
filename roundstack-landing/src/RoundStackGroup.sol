// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract RoundStackGroup {
    address public creator;
    uint256 public contributionAmount;
    uint256 public intervalSeconds;
    uint256 public maxMembers;
    bool public started;
    uint256 public currentRound;
    uint256 public lastRoundTimestamp;

    address[] public members;
    mapping(address => bool) public hasJoined;
    mapping(uint256 => mapping(address => bool)) public hasContributedInRound;
    mapping(address => bool) public hasClaimed;

    event Contributed(address indexed member, uint256 round);
    event PayoutClaimed(address indexed member, uint256 amount);

    constructor(
        address _creator,
        uint256 _contributionAmount,
        uint256 _maxMembers,
        uint256 _intervalSeconds
    ) {
        creator = _creator;
        contributionAmount = _contributionAmount;
        maxMembers = _maxMembers;
        intervalSeconds = _intervalSeconds;
    }

    function joinGroup() external {
        require(!started, "Already started");
        require(!hasJoined[msg.sender], "Already joined");
        require(members.length < maxMembers, "Group full");

        hasJoined[msg.sender] = true;
        members.push(msg.sender);

        if (members.length == maxMembers) {
            started = true;
            currentRound = 1;
            lastRoundTimestamp = block.timestamp;
        }
    }

    function contribute() external payable {
        require(started, "Group not started");
        require(!hasContributedInRound[currentRound][msg.sender], "Already contributed");
        require(hasJoined[msg.sender], "Not a member");
        require(msg.value == contributionAmount, "Incorrect ETH amount");

        hasContributedInRound[currentRound][msg.sender] = true;
        emit Contributed(msg.sender, currentRound);
    }

    function claimPayout() external {
        require(started, "Group not started");
        require(!hasClaimed[msg.sender], "Already claimed");

        uint256 position = getMemberIndex(msg.sender);
        require(position + 1 == currentRound, "Not your payout round");
        require(allContributedForRound(currentRound), "Round not complete");

        uint256 payout = contributionAmount * maxMembers;
        hasClaimed[msg.sender] = true;

        (bool sent, ) = msg.sender.call{value: payout}("");
        require(sent, "ETH transfer failed");
        emit PayoutClaimed(msg.sender, payout);

        // prepare next round
        if (currentRound < maxMembers) {
            currentRound += 1;
            lastRoundTimestamp = block.timestamp;
        }
    }

    function allContributedForRound(uint256 round) public view returns (bool) {
        for (uint256 i = 0; i < members.length; i++) {
            if (!hasContributedInRound[round][members[i]]) {
                return false;
            }
        }
        return true;
    }

    function getMemberIndex(address user) public view returns (uint256) {
        for (uint256 i = 0; i < members.length; i++) {
            if (members[i] == user) return i;
        }
        revert("User not in group");
    }

    function getMembers() external view returns (address[] memory) {
        return members;
    }

    function getStatus() external view returns (string memory status) {
        if (!started) return "Pending";
        if (hasClaimed[msg.sender]) return "Completed";
        if (getMemberIndex(msg.sender) + 1 == currentRound) return "Payout Ready";
        return "Active";
    }

    // Allow contract to receive ETH
    receive() external payable {}
}