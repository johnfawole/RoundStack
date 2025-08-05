// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/RoundStackFactory.sol";

contract Deploy is Script {
    function run() external {
        vm.startBroadcast();

        // Deploy the factory contract
        RoundStackFactory factory = new RoundStackFactory();
        console.log("RoundStackFactory deployed at:", address(factory));

        vm.stopBroadcast();
    }
}