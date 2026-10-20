# Base Apex Ballot

An advanced decentralized voting engine designed for DAOs and community governance on the Base network. Apex Ballot provides a mathematically sound, transparent, and tamper-proof environment for processing proposals and tallying votes.

## Governance Highlights
* **Weighted Voting Logic:** Supports complex voter weight math, allowing token-based or reputation-based voting power structures.
* **Duplicate Rejection:** Implements robust mapping structures to track voter participation (`hasVoted`), instantly reverting any duplicate submissions.
* **Immutable Tallies:** Once a voting period concludes, state transitions freeze, preventing any further state manipulation or late entries.

## Security Posture
The contract architecture prioritizes strict access control for proposal creation while maintaining permissionless entry for verified voters.
