// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

interface IApexBallot {
    function createProposal(string memory description) external returns (uint256);
    function vote(uint256 proposalId) external;
}
