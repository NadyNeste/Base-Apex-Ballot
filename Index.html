// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

contract ApexBallot {
    struct Proposal {
        string title;
        uint256 votesFor;
        uint256 votesAgainst;
        bool isActive;
        address author;
    }

    address public organizer;
    string public platformNotice;
    uint256 public proposalCount;

    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => mapping(address => bool)) public hasVoted;

    event ProposalCreated(uint256 indexed id, string title, address indexed author);
    event Voted(uint256 indexed id, address indexed voter, bool support);
    event StatusToggled(uint256 indexed id, bool isActive);
    event NoticeUpdated(string newNotice);

    modifier onlyOrganizer() {
        require(msg.sender == organizer, "ApexBallot: Caller is not organizer");
        _;
    }

    constructor() {
        organizer = msg.sender;
        platformNotice = "Apex Decentralized Governance System";
    }

    // 1. Создать тему для голосования
    function createProposal(string calldata title) external returns (uint256) {
        require(bytes(title).length > 0, "ApexBallot: Empty title");

        proposalCount++;
        proposals[proposalCount] = Proposal({
            title: title,
            votesFor: 0,
            votesAgainst: 0,
            isActive: true,
            author: msg.sender
        });

        emit ProposalCreated(proposalCount, title, msg.sender);
        return proposalCount;
    }

    // 2. Проголосовать (support = true за, false против)
    function vote(uint256 id, bool support) external {
        require(id > 0 && id <= proposalCount, "ApexBallot: Invalid ID");
        require(proposals[id].isActive, "ApexBallot: Voting finished");
        require(!hasVoted[id][msg.sender], "ApexBallot: Already voted");

        hasVoted[id][msg.sender] = true;

        if (support) {
            proposals[id].votesFor++;
        } else {
            proposals[id].votesAgainst++;
        }

        emit Voted(id, msg.sender, support);
    }

    // 3. Закрыть или открыть голосование заново
    function toggleProposalStatus(uint256 id) external onlyOrganizer {
        require(id > 0 && id <= proposalCount, "ApexBallot: Invalid ID");
        proposals[id].isActive = !proposals[id].isActive;
        emit StatusToggled(id, proposals[id].isActive);
    }

    // 4. Обновить глобальное объявление
    function updatePlatformNotice(string calldata newNotice) external onlyOrganizer {
        platformNotice = newNotice;
        emit NoticeUpdated(newNotice);
    }
}