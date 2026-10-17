const hre = require("hardhat");

async function main() {
  const Ballot = await hre.ethers.getContractFactory("ApexBallot");
  const ballot = await Ballot.deploy();
  await ballot.deployed();
  console.log("ApexBallot deployed to:", ballot.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
